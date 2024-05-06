import React from 'react';

function Listado({ colaboradores, setColaboradores }) {
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  return (
    <div className='a'>
      <h2>Listado de Colaboradores</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>
                <button onClick={() => eliminarColaborador(colaborador.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listado;