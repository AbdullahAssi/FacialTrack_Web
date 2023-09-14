import React, { useState, useEffect } from 'react';
import './Styles/attandance.css'
import { attendance_data } from '../Constants';
import { db } from '../Config/Firebase';
import 'firebase/database';
import { onValue, ref } from 'firebase/database';

function Attendance() {
    const [data, setData] = useState([]);
    const [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const studentsRef = ref(db, 'students');
            onValue(studentsRef, (snapshot) => {
                if (snapshot.exists()) {
                    const dataObject = snapshot.val();
                    setData(dataObject);

                    const dataArray = Object.values(dataObject || {});
                    setDataArray(dataArray);
                }
            });
        };

        fetchData();
    }, []);

    return (
        <div className='attandance_container'>
            <div className='attandance_wrapper'>
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
            </div>
            <div>
                <h1>Attendance</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Roll No:</th>
                            <th>Name</th>
                            <th>Major</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataArray.map((student, index) => (
                            <tr key={index}>
                                <td>{student.id}</td>
                                <td>{student.Name}</td>
                                <td>{student.Major}</td>
                                <td>{student.Attandance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Attendance;
