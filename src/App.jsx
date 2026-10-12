import { useState } from "react";
import StudentList from "./components/StudentList";
import "./index.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", city: "Ahmedabad" },
    { id: 2, name: "Priya Patel", email: "priya@gmail.com", city: "Surat" },
    { id: 3, name: "Amit Shah", email: "amit@gmail.com", city: "Vadodara" },
    { id: 4, name: "Neha Verma", email: "neha@gmail.com", city: "Rajkot" },
    { id: 5, name: "Karan Mehta", email: "karan@gmail.com", city: "Gandhinagar" },
  ]);

  const handleDeleteStudent = (id) => {
    if (window.confirm("Do you want to delete this student?")) {
      setStudents((previousStudents) =>
        previousStudents.filter((student) => student.id !== id)
      );
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Student Management System</h1>
        <p>Delete Operation</p>
      </header>

      <main>
        <h2>Student List</h2>
        <p>Total Students: {students.length}</p>

        <StudentList
          students={students}
          onDeleteStudent={handleDeleteStudent}
        />
      </main>

      <footer>React Practical - Delete Operation</footer>
    </div>
  );
}

export default App;