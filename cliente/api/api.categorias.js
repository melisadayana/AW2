import { API } from './api.js';

export const getCategorias = async(id) => {
    try {
        const res = await fetch(`${API}/categorias/id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error(`La categoría ${id} no existe.`)            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener categoría. ", error)        
    }
}

export const getDestacados = async() => {
    try {
        const res = await fetch(`${API}/categorias/destacado`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error("No existen productos destacados")
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener productos destacados. ", error)
    }
}