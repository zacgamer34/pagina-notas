import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Asignaturas.css'; // Asegúrate de renombrar el archivo CSS si cambias su nombre

const SubjectsPage = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [error, setError] = useState('');

  const handleAddSubject = (e) => {
    e.preventDefault();
    setError('');

    if (!subjectName.trim()) {
      setError('Por favor, introduce el nombre de la asignatura');
      return;
    }

    if (!teacherName.trim()) {
      setError('Por favor, introduce el nombre del profesor');
      return;
    }

    const newSubject = {
      id: Date.now(),
      name: subjectName.trim(),
      teacher: teacherName.trim(),
    };

    setSubjects((prev) => [newSubject, ...prev]);
    setSubjectName('');
    setTeacherName('');
  };

  const handleDeleteSubject = (id) => {
    setSubjects((prev) => prev.filter((subject) => subject.id !== id));
  };

  return (
    <div className="subject-container">
      <header className="subject-header">
        <h1>Gestión de Asignaturas</h1>
        <button className="back-button" onClick={() => navigate(-1)}>Volver</button>
      </header>

      <form onSubmit={handleAddSubject} className="subject-form">
        <input
          type="text"
          placeholder="Nombre de la asignatura"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          className="subject-input"
        />
        <input
          type="text"
          placeholder="Nombre del profesor"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          className="subject-input"
        />
        <button type="submit" className="add-button">Agregar Asignatura</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="subject-list">
        {subjects.length === 0 ? (
          <p className="no-subjects">No hay asignaturas registradas.</p>
        ) : (
          subjects.map((subject) => (
            <div key={subject.id} className="subject-card">
              <div>
                <h3 className="subject-name">{subject.name}</h3>
                <p>Profesor encargado: {subject.teacher}</p>
              </div>
              <button onClick={() => handleDeleteSubject(subject.id)} className="delete-button">Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectsPage;
