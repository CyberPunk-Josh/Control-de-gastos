import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, mostrarPregunta}) => {

    // useState para guardar el valor del presupuesto:
    const [cantidad, guardarCantidad] = useState(0);
    // useState para el error:
    const [error, guardarError] = useState(false);

    // funcion para leer el presupuesto:
    const definirPresupuesto = e =>{
        guardarCantidad(parseInt(e.target.value));
    }
    
    // cuando se agrega el presupuesto:
    const agregarPresupuesto = e =>{
        e.preventDefault();

        // validar el dato ingresado:
        if(cantidad < 1 || isNaN(cantidad)){
            // mostrar mensaje de error
            guardarError(true);
            return;
        }
        guardarError(false);
        // console.log('todo bien');

        // pasar el dato al componente principal
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        mostrarPregunta(false);
    }

    return ( 
        <Fragment>
            <h2 className='text-capitalize mt-3'>Define tu presupuesto inicial</h2>

            {/* mensaje de error */}
            {error ? <Error mensaje = 'Presupuesto no Valido'/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <div className='form-group'>
                    <input 
                        type='number'
                        placeholder='Ingresa tu presupuesto'
                        className='d-block form-control'
                        onChange={definirPresupuesto}
                    />
                </div>
                
                <button 
                    type='submit'
                    className='btn btn-success'
                >Agregar</button>
            </form>
        </Fragment>
     );
}
 
export default Pregunta;