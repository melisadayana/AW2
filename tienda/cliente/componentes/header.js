import { API } from '../api/api.js';

let productos = [
    {subtitle:'Calzas', sublink:`${API}/pages/productos/calzas.html`},
    {subtitle:'Tops', sublink:`${API}/pages/productos/tops.html`},
    {subtitle:'Remeras', sublink:`${API}/pages/productos/remeras.html`},
    {subtitle:'Camperas', sublink:`${API}/pages/productos/camperas.html`},
    {subtitle:'Bikinis', sublink:`${API}/pages/productos/bikinis.html`},
    {subtitle:'Todos', sublink:`${API}/pages/productos/todos.html`}
]

let navElements = [    
    {title:'Home', link:`${API}/pages/home.html`, dropdown:'', svg:''},
    {title:'Productos', link:'', dropdown: productos},
    {title:'Carrito', link:`${API}/pages/productos/carrito.html`, dropdown:'', svg: `<svg xmlns="${API}assets/cart-fill.svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>`},
    {title:'Salir', link:`${API}/pages/login.html`, dropdown:'', svg:''}
]

import {getProductData, setProductData, getUserData, logOut} from "../controllers/storage.controller.js"
let userInfo = getUserData('userData')

export const navbarComponent = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="${API}/assets/corona.svg" alt="logo" with="80px" height="80px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    ${
                        navElements.map(e => {
                            if(e.title == 'Productos') {                                
                                return `
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" style="color: whitesmoke;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Productos
                                        </a>
                                        <ul class="dropdown-menu" style="background-color: #C91B66;">                                        
                                        ${
                                            e.dropdown.map(i => { 
                                                return `
                                                <li><a class="dropdown-item" style="color: whitesmoke; background-color: transparent;" href=${i.sublink}>${i.subtitle}</a></li>
                                            `
                                            }).join('')
                                        }
                                        </ul>
                                    </li>
                                `                               
                            } else {
                                return `
                                    <li class="nav-item">
                                        <a class="nav-link active" style="color: whitesmoke;" aria-current="page" href=${e.link}>${e.title}${e.svg}</a>
                                    </li>
                                `
                            }
                        }).join('')
                    }                    
                </ul>
                <a href="${API}/pages/productos/carrito.html">
                    <div class="cart-container-produ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 
                            1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <div class="cant-productos">
                            <span class="btn-carrito" id="cant-carrito">0</span>
                        </div>
                    </div>
                </a>
                <div class="cart-container-user">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-user">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>                    
                    <div class="info-usuario hidden-cart">
                        <div class="card-user">
                            <div class="card-info-user">
                                <img src="${userInfo.foto}" class="img-fluid rounded-start" alt="">
                                <div class="card-body-user">
                                    <p class="card-title-user">Datos de usuario</p>
                                    <p class="card-text-user">Usuario: ${userInfo.nombre} ${userInfo.apellido}</p>
                                    <p class="card-text-user">Email: ${userInfo.email}</p>
                                    <p class="card-text-user"><small>Último acceso: hoy a las 18:52 hs</small></p>
                                    <a href="#" class="btn btn-primary w-100 mt-4" id="btnLogOut">Desconectar</a>
                                </div>
                            </div>                                 
                        </div>
                    </div>
                </div>                     
            </div>            
        </div>
    </nav>
`