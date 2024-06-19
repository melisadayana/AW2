import { API } from './api.js';

export const getIngredientes = async() => {
    try {
        const res = await fetch(`${API}/ingredientes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error("No existen ingredientes.")            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener ingredientes. ", error)        
    }
}