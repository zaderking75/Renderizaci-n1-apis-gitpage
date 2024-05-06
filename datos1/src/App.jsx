import React, { useState } from 'react';

import Alert from './Components/Alert';
import Buscador from './Components/Buscador';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';
import { BaseColaboradores } from './data/BaseColaboradores';

const App = () => {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setMensaje('Colaborador agregado exitosamente');
    setTipoMensaje('success');
  };

  const buscarColaborador = (query) => {
    console.log('Buscar colaborador:', query);
  };

  return (
    <div className="container">
      <h1>Administrador de Colaboradores</h1>
      <Alert mensaje={mensaje} tipo={tipoMensaje} />
      <Formulario agregarColaborador={agregarColaborador} />
      <Buscador colaboradores={colaboradores} />
      <Listado colaboradores={colaboradores} setColaboradores={setColaboradores} />
    </div>
  );
};

export default App;