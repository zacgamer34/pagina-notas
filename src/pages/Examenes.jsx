import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Examenes.css';

const ExamPage = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [examName, setExamName] = useState('');
  const [examScore, setExamScore] = useState('');
  const [examTotal, setExamTotal] = useState('');
  const [error, setError] = useState('');

  const handleAddExam = (e) => {
    e.preventDefault();
    setError('');

    if (!examName.trim()) {
      setError('Por favor, introduce el nombre del examen');
      return;
    }

    if (!examScore || !examTotal) {
      setError('Introduce la calificación y el puntaje total');
      return;
    }

    const scoreNum = Number(examScore);
    const totalNum = Number(examTotal);

    if (isNaN(scoreNum) || isNaN(totalNum) || scoreNum < 0 || totalNum <= 0 || scoreNum > totalNum) {
      setError('Calificación inválida o puntaje total inválido');
      return;
    }

    const newExam = {
      id: Date.now(),
      name: examName,
      score: scoreNum,
      total: totalNum,
      percentage: ((scoreNum / totalNum) * 100).toFixed(2),
    };

    setExams((prev) => [newExam, ...prev]);
    setExamName('');
    setExamScore('');
    setExamTotal('');
  };

  const handleDeleteExam = (id) => {
    setExams((prev) => prev.filter((exam) => exam.id !== id));
  };

  return (
    <div className="exam-container">
      <header className="exam-header">
        <h1>Gestión de Exámenes</h1>
        <button className="back-button" onClick={() => navigate(-1)}>Volver</button>
      </header>

      <form onSubmit={handleAddExam} className="exam-form">
        <input
          type="text"
          placeholder="Nombre del examen"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
          className="exam-input"
        />
        <input
          type="number"
          placeholder="Calificación obtenida"
          value={examScore}
          onChange={(e) => setExamScore(e.target.value)}
          className="exam-input"
          min="0"
        />
        <input
          type="number"
          placeholder="Puntaje total"
          value={examTotal}
          onChange={(e) => setExamTotal(e.target.value)}
          className="exam-input"
          min="1"
        />
        <button type="submit" className="add-button">Agregar Examen</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="exam-list">
        {exams.length === 0 ? (
          <p className="no-exams">No hay exámenes cargados.</p>
        ) : (
          exams.map((exam) => (
            <div key={exam.id} className="exam-card">
              <div>
                <h3 className="exam-name">{exam.name}</h3>
                <p>Calificación: {exam.score} / {exam.total} ({exam.percentage}%)</p>
              </div>
              <button onClick={() => handleDeleteExam(exam.id)} className="delete-button">Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExamPage;
