import PropTypes from 'prop-types';

const ClassInfo = (props) => {
    return (
        <section>
            <h2>Class Information</h2>
            <ul>
                <li>Name: Team Semicolons</li>
                <li>Number of members: {props.memberCount}</li>
            </ul>
            {/* <button onClick={}>Delete All Students</button> */}
        </section>
    );
};

ClassInfo.propTypes = {
    memberCount: PropTypes.number
};

export default ClassInfo;