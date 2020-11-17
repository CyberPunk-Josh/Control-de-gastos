import React, {Fragment, useState} from 'react';
import shortid from 'shortid';
import Error from './Error';
const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    // useState para leer los datos del gasto:
    const [cantidad, guardarCantidad] = useState(0);
    const [nombre, guardarNombre] = useState('');

    // useState para el error:
    const [error, guardarError] = useState(false);

    // funcion para agregar al gasto:
    const agregarGasto = e =>{
        e.preventDefault();

        // validar los datos ingresados
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            // mostrar error:
            guardarError(true);
            return;
        }
        guardarError(false);
        // crear el gasto
        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
        }
        // console.log(gasto);
        // pasar el gasto al state principal:
        guardarGasto(gasto);
        guardarCrearGasto(true);
        // resetear el form:
        guardarCantidad(0);
        guardarNombre('');

    }

    return ( 
        <Fragment>
            <h2 className='text-center'>Ingresa tus gastos aqui</h2>
            {/* mensaje de error */}
            {error ? <Error mensaje = 'Nombre del Gasto o Cantidad no Valida'/> : null}
            <form
                onSubmit={agregarGasto}
            >
                <div className='form-group'>
                    <label>Nombre del Gasto</label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Ej. Comida'
                        value={nombre}
                        onChange={e => guardarNombre(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Cantidad</label>
                    <input 
                        type='number'
                        className='form-control'
                        placeholder='Ej. 150'
                        value={cantidad}
                        onChange={e => guardarCantidad(parseInt(e.target.value))}
                    />
                </div>
                <button
                    type='submit'
                    className='btn btn-success'
                >Añadir Gasto</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;