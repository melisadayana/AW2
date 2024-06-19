import { API } from './api.js';

export const getRecetas = async() => {
    try {
        const res = await fetch(`${API}/recetas`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error("No existen recetas.")            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener recetas. ", error)        
    }
}