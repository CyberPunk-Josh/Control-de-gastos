export const revisarPresupuesto = (presupuesto , restante) => {
    let clase;
    if((presupuesto/4) > restante){
        clase ='bg-danger restante text-center text-capitalize';
    } else if ((presupuesto /2) > restante){
        clase = 'bg-warning restante text-center text-capitalize';
    } else {
        clase = 'bg-success restante text-center text-capitalize';
    }
    return clase;
}

// clases para la barra de progreso:
export const revisarProcentaje = (presupuesto, restante) => {
    let clase;
    if(restante < (presupuesto / 2) ){
        clase= 'progress-bar w-25 bg-danger progress-bar-striped progress-bar-animated';
    }else if(restante === (presupuesto / 2)){
        clase='progress-bar w-50 bg-warning progress-bar-striped progress-bar-animated';
    }else if(restante > (presupuesto / 2) && restante < presupuesto){
        clase='progress-bar w-75 bg-info progress-bar-striped progress-bar-animated';
    }else if(presupuesto === restante){
        clase='progress-bar w-100 bg-success progress-bar-striped progress-bar-animated';
    }
    return clase;
};

// definir porcentaje:
export const numeroPorcentaje = (presupuesto, restante) => {
    let a = 100;
    let porcentaje = `${(((restante / a) * a) / (presupuesto / a))} %`;
    return porcentaje; 
};



// se tomasn valores de 25, 50, 75 y 100 %