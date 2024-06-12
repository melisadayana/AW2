export const contadorCarrito = (data, element) => {
    let cant_carrito = 0
    
    data.forEach((item) => {
        //console.log(item)
        cant_carrito = cant_carrito + item.cant
    })
    
    if (element) {        
        element.textContent = cant_carrito;
    } else {
        console.error('El elemento no se encontró.');
    }
}