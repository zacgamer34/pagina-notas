import React, { useState } from 'react';
import './Notas.css';
import { useNavigate } from 'react-router-dom';

function NotasPage() {
  const navigate = useNavigate(); // Aquí se inicializa

  const volverAlInicio = () => {
    navigate('./'); // Redirige al home ("/")
  };

  const [notas, setNotas] = useState([
    { id: 1, estudiante: 'Juan Pérez', materia: 'Matemáticas', nota: 8.5 },
    { id: 2, estudiante: 'Ana Gómez', materia: 'Historia', nota: 7.8 },
    { id: 3, estudiante: 'Luis Fernández', materia: 'Ciencias', nota: 9.2 },
    { id: 4, estudiante: 'Marta Sánchez', materia: 'Literatura', nota: 6.7 },
  ]);

  const [editandoId, setEditandoId] = useState(null);
  const [notaTemporal, setNotaTemporal] = useState('');

  const guardarNota = (id) => {
    setNotas(prev =>
      prev.map(n => n.id === id ? { ...n, nota: parseFloat(notaTemporal) } : n)
    );
    setEditandoId(null);
  };

  return (
    <section className="notas-page">
      <h2>Notas de estudiantes</h2>
      <button onClick={volverAlInicio} className="btn-volver">Volver al Inicio</button>

      {notas.length > 0 ? (
        <table aria-label="Tabla de notas de estudiantes">
          <thead>
            <tr>
              <th>Estudiante</th>
              <th>Materia</th>
              <th>Nota</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notas.map(({ id, estudiante, materia, nota }) => (
              <tr key={id}>
                <td>{estudiante}</td>
                <td>{materia}</td>
                <td className={nota >= 7 ? 'nota-alta' : 'nota-baja'}>
                  {editandoId === id ? (
                    <input
                      type="number"
                      value={notaTemporal}
                      onChange={(e) => setNotaTemporal(e.target.value)}
                      onBlur={() => guardarNota(id)}
                      onKeyDown={(e) => e.key === 'Enter' && guardarNota(id)}
                      step="0.1"
                      min="0"
                      max="10"
                      autoFocus
                    />
                  ) : (
                    nota.toFixed(1)
                  )}
                </td>
                <td>
                  <button
                    onClick={() => {
                      setEditandoId(id);
                      setNotaTemporal(nota.toString());
                    }}
                    className="btn-editar"
                  >
                    Editar Nota
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="sin-notas">No hay notas registradas aún.</p>
      )}
    </section>
  );
}

export default NotasPage;
