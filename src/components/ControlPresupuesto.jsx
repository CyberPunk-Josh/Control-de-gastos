import React, {Fragment} from 'react';
import {revisarPresupuesto, revisarProcentaje, numeroPorcentaje} from '../Helpers';
const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className='presupuesto d-block text-center mb-3'>
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                restante: ${restante}
            </div>
            <h3 className='text-center text-capitalize mt-4'>Porcentaje restante</h3>
            <div className="progress">
            <div className={revisarProcentaje(presupuesto, restante)} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{numeroPorcentaje(presupuesto, restante)}</div>
            </div>
        </Fragment>
     );
}
 
export default ControlPresupuesto;