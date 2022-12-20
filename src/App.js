import React, { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      name: 'Ada',
      email: 'ada@dev.org',
      isPresent: false,
    },
    {
      id: 2,
      name: 'Soon-Ah',
      email: 'soonah@dev.org',
      isPresent: false,
    },
    {
      id: 3,
      name: 'Yael',
      email: 'yael@dev.org',
      isPresent: false,
    }
  ]);

  const updateStudentData = updatedStudent => {
    const students = studentData.map(student => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });

    setStudentData(students);
  };

  const addStudentData = newStudent => {
    const newStudentList = [...studentData];

    const nextId = Math.max(...newStudentList.map(student => student.id)) + 1;

    newStudentList.push({
      id: nextId,
      name: newStudent.name,
      email: newStudent.email,
      isPresent: false,
    });

    setStudentData(newStudentList);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length} />
      <StudentList 
        students={studentData} 
        onUpdateStudent={updateStudentData}/>
    </main>
  );
}

export default App;
