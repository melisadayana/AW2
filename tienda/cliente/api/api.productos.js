import { API } from './api.js';

export const getProductos = async() => {
    try {
        const res = await fetch(`${API}/productos`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })        
        if(!res.ok) {
            throw new Error("No existen productos.")            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener productos. ", error)        
    }
}

export const getProductosxCat = async(nomCat) => {
    try {
        const res = await fetch(`${API}/productos/xCategoria/${nomCat}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
          
        if(!res.ok) {
            throw new Error(`No existen productos para la categoría ${nomCat}.`)            
        } 
        const data = await res.json()
        return data;
    } catch (error) {
        console.error("Error al obtener productos. ", error)        
    }
}