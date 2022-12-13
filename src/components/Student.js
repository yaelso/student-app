import React from 'react';

const Student = (props) => {
    return (
        <ul>
            <li>Nickname: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
    );
}

export default Student;