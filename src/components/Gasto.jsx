    import React from 'react';

    const Gasto = ({gasto}) => (
        <li className='gastos list-unstyled'>
            <p className='d-flex justify-content-between'>
                {gasto.nombre}
                <span className='gasto'>
                    $ {gasto.cantidad}
                </span>
            </p>
        </li>
    );
     
    export default Gasto;