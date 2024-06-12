import { getProductos, getProductosxCat } from './api/api.productos.js';
import { getDestacados, getCategorias } from './api/api.categorias.js';
//import {iconComponent} from "./componentes/head.js"
//Carga el navbar
import {navbarComponent} from "./componentes/header.js"
//Importa el footer
import {footerComponent} from "./componentes/footer.js"
//Importa funciones de Storage
import {getProductData, setProductData, getUserData, logOut} from "./controllers/storage.controller.js"
//Importa la funcion que actualiza el carrito
import {contadorCarrito} from "./utils/count.carrito.js"
import {cardComponent, cardCarrito, cardResumen, cardItem} from "../componentes/cards.js"
import {cardHome} from "../componentes/cards.js"

let pageName = document.getElementById('pageName').value
let userInfo = getUserData('userData')
let cardContainer = document.getElementById('cardContainer')
let resumenContainer = document.getElementById('resumenContainer')
let itemsContainer = document.getElementById('itemsContainer')
let totalCarrito = document.getElementById('total')
let cards = ''
let items = ''
let totalItem = 0, total = 0
let mensaje = '&text=Hola%20Mica,%20te%20paso%20mi%20pedido'

const renderCards = async(page) => {
    let navContainer = document.querySelector('header')    
    let footerContainer = document.querySelector('footer')
    let cardContainer = document.getElementById('cardContainer')
    navContainer.innerHTML = navbarComponent        
    footerContainer.innerHTML = footerComponent
    document.title = `Mi tienda | ${page}`
    let botonCarrito = document.querySelector('.btn-carrito')
    let producto = ''
    
    if(page === 'Home') {
        const data = await getProductos()
        const destacados = await getDestacados()
        
        let aux = 0
        data.forEach((jsonData) => {                
            destacados.forEach((item) => {
                
                if (item.destacado === jsonData.id) {
                    cards += cardHome(jsonData)
                }                    
            })   
                
            producto = getProductData('itemsData')
            if (producto.length <= aux) {
                jsonData['cant'] = 0
                producto.push(jsonData)    
                setProductData('itemsData', producto)                    
            } 
            aux = aux + 1                        
        })
        cardContainer.innerHTML = cards 
    } else if(page === 'Todos') {
        const data = await getProductos()
        data.forEach((jsonData) => {                           
            cards += cardComponent(jsonData)
        })   
        cardContainer.innerHTML = cards       
    } else if(page === 'Carrito') {    
        let producto = getProductData('itemsData')        
        producto.forEach((item) => {                                
            if (item.cant > 0) {                              
                totalItem = (item.cant * item.precio)  
                cards += cardCarrito(item)
                items += cardItem(item, totalItem)
                total = total + totalItem
                itemsContainer.innerHTML = items
                totalCarrito.innerHTML = '$ ' + total.toLocaleString('es-AR')
            }
        })
        
        cardContainer.innerHTML = cards
        botonCarrito = document.querySelector('.btn-carrito')
        contadorCarrito(producto, botonCarrito)    
        resumenContainer = document.getElementById('resumenContainer');
        const elementosCart = document.querySelectorAll('.cart-item');
        
        // Recorre cada elemento y construye la cadena de mensaje
        elementosCart.forEach((elemento) => {
            // Obtén el texto del div con clase 'nombre'
            const nombre = elemento.querySelector('.nombre').textContent.replace(/ /g, '%20');

            // Obtén el valor del input
            const cantidad = elemento.querySelector('input').value;

            // Obtén el texto del h2
            const precio = elemento.querySelector('h2').textContent;

            // Concatena los elementos y agrega '%20' en lugar de espacios
            mensaje += `%0A${nombre}%20(${cantidad})%20${precio}`;

            // Agrega '%0A' para un salto de línea después de cada elemento
            //if (index < elementosCart.length - 1) {
            //    mensaje += '%0A';
            //}
        });
        mensaje += `%0ATotal%20$%20${total.toLocaleString('es-AR')}%0AGracias!`;

        // Nuevo contenido que deseas agregar
        let nuevoContenido = `<a href="https://api.whatsapp.com/send?phone=543517656710${mensaje}" class="btn btn-primary text-white" style="background-color: rgb(247, 98, 66); width: 100%; padding: 8px;" id="btnEnviar">Enviar pedido</a>`
        //let nuevoContenido = `<a href="https://127.0.0.1:5500/productos/api.ultramsg.js" class="btn btn-primary w-100 mt-4" id="btnEnviar">Enviar pedido</a>`
        // Crear un nuevo elemento div
        let nuevoElemento = document.createElement('a')

        // Establecer el HTML del nuevo elemento
        nuevoElemento.innerHTML = nuevoContenido

        // Agregar el nuevo elemento al final del contenedor
        resumenContainer.appendChild(nuevoElemento)
        //&text=Hola%20Angel%2C%20vi%20tu%20portfolio%2C%20queria%20hacerte%20una%20consulta        
    
        resumenContainer.addEventListener('click', (event) => {
            
            let producto = getProductData('itemsData')
            // Verifica si el elemento clickeado es un botón con el nombre 'delItem'
            if (event.target.name === 'delItem') {
                // Obtiene el data-id del botón clickeado
                const dataId = event.target.dataset.id
                // Obtiene el valor del atributo 'value' del elemento con nombre 'cantProdu' correspondiente al data-id
                const cantidadElement = document.querySelector(`input[name="cantProdu"][data-id="${dataId}"]`)
                const cantidad = cantidadElement ? cantidadElement.value : 0
    
                producto.forEach((item) => {
                    if (item.id === parseInt(dataId)) {
                        item.cant = parseInt(0)
                        setProductData('itemsData', producto)
                    }
                });
                location.reload(true)
            }        
        })
    
        cardContainer.addEventListener('click', (event) => {
            
            let producto = getProductData('itemsData')
            // Verifica si el elemento clickeado es un botón con el nombre 'cantProdu'
            if (event.target.name === 'cantProdu') {
                // Obtiene el data-id del botón clickeado
                const dataId = event.target.dataset.id
    
                // Obtiene el valor del atributo 'value' del elemento con nombre 'cantProdu' correspondiente al data-id
                const cantidadElement = document.querySelector(`input[name="cantProdu"][data-id="${dataId}"]`)
                const cantidad = cantidadElement ? cantidadElement.value : 0
    
                producto.forEach((item) => {
                    if (item.id === parseInt(dataId)) {
                        item.cant = parseInt(cantidad)
                        setProductData('itemsData', producto)
                    }
                });
                location.reload(true)
            }
    
            if (event.target.name === 'btnEliminar') {
                // Obtiene el data-id del botón clickeado
                const dataId = event.target.dataset.id
    
                producto.forEach((item) => {
                    if (item.id === parseInt(dataId)) {
                        item.cant = parseInt(0)
                        setProductData('itemsData', producto)
                    }
                });
                location.reload(true)
            }
    
            let botonCarrito = document.querySelector('.btn-carrito')
            contadorCarrito(producto, botonCarrito)
        })

    } else {
        const data = await getProductosxCat(page)
        data.forEach((jsonData) => {                           
            cards += cardComponent(jsonData)
        })
        cardContainer.innerHTML = cards
        producto = getProductData('itemsData')
        contadorCarrito(producto, botonCarrito)
        // Asigna el evento click al contenedor de las cards (cardContainer)
        cardContainer.addEventListener('click', (event) => {
            producto = getProductData('itemsData')
            // Verifica si el elemento clickeado es un botón con el nombre 'btnAgregar'
            if (event.target.name === 'btnAgregar') {
                // Obtiene el data-id del botón clickeado
                const dataId = event.target.dataset.id
                
                // Obtiene el valor del atributo 'value' del elemento con nombre 'cantProdu' correspondiente al data-id
                const cantidadElement = document.querySelector(`input[name="cantProdu"][data-id="${dataId}"]`)
                const cantidad = cantidadElement ? cantidadElement.value : 0
                
                // Ahora puedes usar dataId y cantidad según tus necesidades
                //console.log('Data-id:', dataId);
                //console.log('Cantidad:', cantidad);
                
                producto.forEach((item) => {
                    if (item.id === parseInt(dataId)) {
                        item.cant = parseInt(cantidad)                            
                        setProductData('itemsData', producto)
                    }
                });
            }
            contadorCarrito(producto, botonCarrito)
        })
    }
}

if (Object.keys(userInfo).length > 0) {
    window.addEventListener('load', async () => {        
        await renderCards(pageName)        

        const btnUser = document.querySelector('.cart-container-user') 
        const containerInfoUsuario = document.querySelector('.info-usuario')
        const btnLogOut = document.getElementById('btnLogOut')

        btnUser.addEventListener('click', () => {
            containerInfoUsuario.classList.toggle('hidden-cart')
            btnLogOut.addEventListener('click', () => {
                logOut('userData')
                window.location.href = "./login.html"
            })
        })
        
    })
} else {
    window.location.href = "./login.html"
}