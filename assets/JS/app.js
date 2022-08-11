

const boton = document.querySelector('#menu-mobile')
boton.addEventListener('click',  ()=>{

    const bloque_nav = document.querySelector('.bloque1-nav')
    bloque_nav.classList.add('mostrar') 

    //Creamos el boton de cerrar:
    const cerrarBtn = document.createElement('IMG');
    cerrarBtn.classList.add('boton-cerrar')
    cerrarBtn.src = './assets/img/close.png';
    
    //Lo añadimos al bloque de menú:
    bloque_nav.appendChild(cerrarBtn);
})
