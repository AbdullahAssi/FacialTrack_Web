import {useState} from "react";
import { QA } from "../Constants";
import './Styles/Faqs.css';

function Accordion (){

    const [open , setopen] = useState(null)

    const toggle = (index) => {
        if (open === index ){
            return setopen(null)
        } 

        setopen(index)
    }
    return(
        <>
            <h1 className="Faq_heading"> Faqs</h1>
                <div className="accordion">
                    {QA.map(( items , index )=> (
                        <div className="Accordion-items">
                            <div className="title" onClick={() => toggle(index)}>
                                <h2>{items.title}</h2>
                                <img className="sign" src={open ===index ? items.arrowUp: items.arrowDown} width="20px"/> 
                            </div>
                            <div className={open ===index ? 'content show': 'content'}>
                                <p>{items.ans}</p>
                            </div>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default Accordion