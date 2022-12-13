import React from 'react';
import './StudentList.css';
import Student from './Student';

const StudentList = () => {
    return (
        <section>
            <h2 className="student-list__heading">Student List</h2>
            <ul className="student-list">
                <li><Student name="Ada" email="ada@dev.org" /></li>
                <li><Student name="Soo-ah" email="sooah@dev.org" /></li>
                <li><Student name="Yael" email="yael@dev.org" /></li>
            </ul>
        </section>
    );
}

export default StudentList;