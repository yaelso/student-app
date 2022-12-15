import { useState } from 'react';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const [studentData, setStudentData] = useState([
    {
      name: 'Ada',
      email: 'ada@dev.org',
      isPresent: false,
    },
    {
      name: 'Soon-Ah',
      email: 'soonah@dev.org',
      isPresent: false,
    },
    {
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

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length} />
      <StudentList students={studentData} onUpdateStudent={updateStudentData}/>
    </main>
  );
}

export default App;
