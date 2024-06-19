
import {getIngredientes, addIngredientes} from '../../api/ing.api.js';

const btnCreate = document.getElementById("create")

const renderPage = async () => {
    const datos = await getIngredientes()
    const listaIngredientes = document.getElementById('list');
    datos.forEach((e) => {
        const li = document.createElement('li')
        li.textContent = `${e.nombre}`
        listaIngredientes.appendChild(li)
    });
}

btnCreate.addEventListener('click', async ()=>{
    const name = document.getElementById("name").value
    if(name !== "") {
        try {
            await addIngredientes(name)
            renderPage()
        } catch (error) {
            alert("Error al agregar el ingrediente. Por favor, intenta nuevamente.")
        }      
    } else {
        alert("Por favor, ingrese un nombre de ingrediente.")
    }
    
})

window.addEventListener('load', async function() {   
    /*Llenar lista con los ingredientes existentes*/
    /*const datos = await getIngredientes()
    const listaIngredientes = document.getElementById('list');
    datos.forEach((e) => {
        const li = document.createElement('li')
        li.textContent = `${e.nombre}`
        listaIngredientes.appendChild(li)
    });*/
    renderPage()
})