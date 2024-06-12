import { login } from './api/api.login.js';

const pageName = document.getElementById('pageName').value
const form = document.getElementById('formulario')

if (pageName === 'login') {
    form.addEventListener('submit', (e) => {
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value
        
        e.preventDefault()
        login(username, password)

        /*let username = document.getElementById('username').value
        let password = document.getElementById('password').value
        
        fetch('http://127.0.0.1:5500/privado/data_usuarios.json')
        .then(res => res.json()) 
        .then(users => {
            const user = users.find(e => e.usuario === username && e.pass === password)
            
            if(user) {
                sessionStorage.setItem('userData', JSON.stringify(user))                
                window.location.href = "http://127.0.0.1:5500/publico/home.html"
            } else {
                document.getElementById('lblError').textContent = "Error en los datos ingresados."
            }
        })*/
        
    })
} else {
    form.addEventListener('submit', (e) => {
        e.preventDefault()       
        window.location.href = "./login.html"            
    })
}