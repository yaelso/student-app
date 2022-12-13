import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
      name: 'Ada',
      email: 'ada@dev.org'
    },
    {
      name: 'Soon-Ah',
      email: 'soonah@dev.org'
    },
    {
      name: 'Yael',
      email: 'yael@dev.org'
    }
  ];

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo />
      <StudentList students={studentData} />
    </main>
  );
}

export default App;
