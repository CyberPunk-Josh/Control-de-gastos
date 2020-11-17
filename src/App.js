import React, {useState, useEffect, Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // useState para traer los datos del componente de pregunta:
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);

  // useState para la carga condicional de componentes:
  const [pregunta, mostrarPregunta] = useState(true);

  // useState para mostrar los gastos del formulario:
  const [gastos, guardarGastos] = useState([]);

  // useState para los gastos:
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // useEffect que actualiza el gasto:
  useEffect(() => {
    if(creargasto){
      // agrega el nuevo presupuesto:
      guardarGastos([
      ...gastos,
      gasto
      ]);
      // restar del nuevo presupuesto:
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
    }
    // resetear al false:
    guardarCrearGasto(false);
  }, [gasto, gastos, creargasto, restante]);

  return (
    <Fragment>
      <section className='fondo'>
        <div className='d-flex flex-column align-items-center justify-content-center titulo'>
          <h1>Control de <span>Gastos</span></h1>
          <i className="fas fa-chevron-down mt-5"></i>
        </div>
      </section>
      <div className='container'>
      {pregunta ? (
        <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          mostrarPregunta={mostrarPregunta}
        />
      ) : (
        <div className='row'>
          <div className='col-md-6'>
           <Formulario
            guardarGasto={guardarGasto}
            guardarCrearGasto={guardarCrearGasto}
           />
        </div>
        <div className='col-md-6 panel'>
          <Listado 
            gastos={gastos}
          />
          <ControlPresupuesto 
            presupuesto={presupuesto}
            restante={restante}
          />
        </div>
        </div>
      ) }
    </div>
    </Fragment>
  );
}

export default App;
