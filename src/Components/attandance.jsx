import React, { useState, useEffect } from 'react';
import './Styles/attandance.css'
import { attendance_data } from '../Constants';
import { db } from '../Config/Firebase';
import 'firebase/database';
import { onValue, ref } from 'firebase/database';

function Attendance() {
    const [data, setData] = useState([]);
    const [dataArray, setDataArray] = useState([]);

    const [presentCount, setPresentCount] = useState(0);
    const [absentCount, setAbsentCount] = useState(0);


    useEffect(() => {
        const fetchData = () => {
            const studentsRef = ref(db, 'students');
            onValue(studentsRef, (snapshot) => {
                if (snapshot.exists()) {

                    const dataObject = snapshot.val();
                    const dataArray = Object.values(dataObject || []);
                    setDataArray(dataArray);

                    // Calculate the present and absent counts
                    const present = dataArray.filter(student => student.Attendance === "P").length;
                    const absent = dataArray.filter(student => student.Attendance === "A").length;

                    console.log(present, absent);
                    
                    // Update counts using the functional form of setState
                    setPresentCount(prevPresentCount => present);
                    setAbsentCount(prevAbsentCount => absent);
                }
            });
        };

        fetchData();
    }, []);


    return (
        <div className='attandance_container'>
            <div>
                <h1>Attendance</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Roll No:</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.map((student, index) => (
                            <tr key={index}>
                                <td>{student.std_id}</td>
                                <td>{student.Name}</td>
                                <td>{student.Major}</td>
                                <td>{student.Attendance ? "P" : "A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            {/* <p>Total Present: {presentCount}</p>
            <p>Total Absent: {absentCount}</p>   */}
            </div>
        </div>
    );
}

export default Attendance;

{/* <div className='attandance_wrapper'>
    {attendance_data.map((studentData, index) => (
        <div className='attendance_card' key={index}>
            <img src={studentData.img} alt="" className='student_img' />
            <div className='attendance_card_content'>
                <h3>{studentData.name}</h3>
                <p>{studentData.roll}</p>
            </div>
            <div className={`status ${studentData.status === 'A' ? 'absent-status' : 'present-status'}`}>
                <p>{studentData.status}</p>
            </div>
        </div>
    ))}
</div> */}