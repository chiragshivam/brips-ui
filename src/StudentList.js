import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/api/students/dummy')
            .then(response => setStudents(response.data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);
    
    return (
        <div>
            <h1>Students</h1>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name} - {student.age}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;
