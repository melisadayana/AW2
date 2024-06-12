import { API } from './api.js';

const error = document.getElementById('lblError')

export const login = async(usuario, pass) => {    
    try {
        const res = await fetch(`${API}/usuarios/login`, {
            method: 'POST',
            body: JSON.stringify({usuario, pass}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if(data.status) {
            sessionStorage.setItem('userData', JSON.stringify(data))                
            window.location.href = "./home.html"
        } else {
            error.textContent = "Error en los datos ingresados."
        }
    } catch (error) {
        error.textContent = "Error al validar usuario."
        return {
            status: false
        }
    }
}