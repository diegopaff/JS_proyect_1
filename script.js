const increaseButtonEl = document.querySelector('.counter__button--increase');
const counterValueEl = document.querySelector('.counter__value');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterEl = document.querySelector('.counter');

function incrementCounter(){
    //obtener valor actual
    const currentValue = counterValueEl.textContent; //devuelve string
    //convertir string a number type
    const currentValueAsNumber = +currentValue; //poner el +string lo convierte a number
    //incrementar en 1
    let newValue = currentValueAsNumber + 1;

    if(newValue > 5){
        //limite valor 5
        newValue = 5;
        //cambiamos el color de fondo
        counterEl.classList.add('counter--limit');
        //desabilitamos los botones

        increaseButtonEl.disabled = true;
        decreaseButtonEl.disabled = true;
    }
    counterValueEl.textContent = newValue;

    //unfocus del boton
    increaseButtonEl.blur();
}

function decrementCounter(){
    //obtener valor actual
    const currentValue = counterValueEl.textContent; //devuelve string
    //convertir string a number type
    const currentValueAsNumber = +currentValue;
    //incrementar en 1
    let newValue = currentValueAsNumber - 1;

    if(newValue < 0){
        newValue = 0;
    }
    counterValueEl.textContent = newValue;

    //unfocus del boton
    decreaseButtonEl.blur();
}

increaseButtonEl.addEventListener('click', incrementCounter);

decreaseButtonEl.addEventListener('click', decrementCounter)

resetButtonEl.addEventListener('click', ()=>{
    //convertir el valor a 0
    counterValueEl.textContent = 0;

    //vuelvo al color original
    counterEl.classList.remove('counter--limit');
    //vuelvo a activar los botones
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled = false;

    //unfocus del boton
    resetButtonEl.blur();

})

// hacer que al apretar cualquier tecla se incremente

document.addEventListener('keydown', incrementCounter);

