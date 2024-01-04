import PropsType from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No' }</p>
        </div>
    );
}
Student.PropsType = {
    name: PropsType.string,
    age: PropsType.number,
    isStudent: PropsType.bool,
}

// DefaultProps
Student.defaultProps = {
    name: 'Guest',
    age: 0,
    isStudent: false,
}

export default Student;