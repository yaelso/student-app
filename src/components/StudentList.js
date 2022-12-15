import React from 'react';
import PropTypes from 'prop-types';
import './StudentList.css';
import Student from './Student';

const StudentList = (props) => {
    const studentComponents = props.students.map((student, index) => {
        return (
            <li key={index}><Student name={student.name} email={student.email} /></li>
        );
    });

    return (
        <section>
            <h2 className="student-list__heading">Student List</h2>
            <ul className="student-list">
                {studentComponents}
            </ul>
        </section>
    );
}

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    }))
};

export default StudentList;