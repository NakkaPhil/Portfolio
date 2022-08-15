
//Boton para abrir menu
const boton = document.querySelector('#menu-mobile')


//Creamos el boton de cerrar:
const cerrarBtn = document.createElement('IMG');
cerrarBtn.classList.add('boton-cerrar')
cerrarBtn.src = './assets/img/close.png';

const bloque_nav = document.querySelector('.bloque1-nav')

boton.addEventListener('click',  ()=>{

        bloque_nav.classList.add('mostrar') 
           
        //Lo añadimos al bloque de menú:
        bloque_nav.appendChild(cerrarBtn);
    })

    
if(cerrarBtn){
    cerrarBtn.addEventListener('click', ()=> {
        bloque_nav.classList.add('oculto')
        setTimeout(() => {
            bloque_nav.classList.remove('mostrar')
            bloque_nav.classList.remove('oculto')
        }, 750);
    })
}




