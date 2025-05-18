import React from 'react';
import './Notas.css';
import { useNavigate } from 'react-router-dom';

function NotasPage() {
  const navigate = useNavigate(); // Aquí se inicializa

  const volverAlInicio = () => {
    navigate('./'); // Redirige al home ("/")
  };

  const notas = [
    { id: 1, estudiante: 'Juan Pérez', materia: 'Matemáticas', nota: 8.5 },
    { id: 2, estudiante: 'Ana Gómez', materia: 'Historia', nota: 7.8 },
    { id: 3, estudiante: 'Luis Fernández', materia: 'Ciencias', nota: 9.2 },
    { id: 4, estudiante: 'Marta Sánchez', materia: 'Literatura', nota: 6.7 },
  ];

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
            </tr>
          </thead>
          <tbody>
            {notas.map(({ id, estudiante, materia, nota }) => (
              <tr key={id}>
                <td>{estudiante}</td>
                <td>{materia}</td>
                <td className={nota >= 7 ? 'nota-alta' : 'nota-baja'}>
                  {nota.toFixed(1)}
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
