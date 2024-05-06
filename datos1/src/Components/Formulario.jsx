import React, { useState } from 'react';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setError('Por favor complete todos los campos');
      return;
    }

    agregarColaborador({ id: Date.now().toString(), nombre, correo, edad, cargo, telefono });
    setNombre('');
    setCorreo('');
    setEdad('');
    setCargo('');
    setTelefono('');
    setError('');
  };

  return (
    <div className='centrado'>
      <h2>Agregar Colaborador</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mbp a">
          <label htmlFor="nombre" className="form-label"><p>Nombre</p></label>
          <input
            type="text"
            className="form-control a1"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mbp a">
          <label htmlFor="correo" className="form-label"><p>Correo</p></label>
          <input
            type="email"
            className="form-control a1"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mbp a">
          <label htmlFor="edad" className="form-label"><p>Edad</p></label>
          <input
            type="number"
            className="form-control a1"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mbp a">
          <label htmlFor="cargo" className="form-label"><p>Cargo</p></label>
          <input
            type="text"
            className="form-control a1"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="mbp a">
          <label htmlFor="telefono" className="form-label"><p>Teléfono</p></label>
          <input
            type="text"
            className="form-control a1"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className='b'>
        <button  id='b1' className="b">Agregar Colaborador</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;