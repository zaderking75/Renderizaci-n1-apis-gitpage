import React, { useState } from 'react';

const Buscador = ({ colaboradores }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleBusquedaChange = (e) => {
    setBusqueda(e.target.value);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    const { id, nombre, correo, edad, cargo, telefono } = colaborador;
    const termino = busqueda.toLowerCase();
    return (
      id.includes(termino) ||
      nombre.toLowerCase().includes(termino) ||
      correo.toLowerCase().includes(termino) ||
      edad.toString().includes(termino) ||
      cargo.toLowerCase().includes(termino) ||
      telefono.toLowerCase().includes(termino)
    );
  });

  return (
    <div className='a'>
      <input className='a1'
        type="text"
        placeholder="Buscar colaborador..."
        value={busqueda}
        onChange={handleBusquedaChange}
      />
      <ul>
        {colaboradoresFiltrados.map((colaborador) => (
          <li key={colaborador.id}>
            {colaborador.nombre} - {colaborador.correo} - {colaborador.edad} - {colaborador.cargo} - {colaborador.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buscador;