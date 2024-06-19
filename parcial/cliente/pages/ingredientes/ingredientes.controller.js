
import {getIngredientes} from '../../api/ing.api.js';

const btnCreate = document.getElementById("create")


btnCreate.addEventListener('click',()=>{
    const name = document.getElementById("name").value
    
})

window.addEventListener('load', async function() {   
    /*Llenar lista con los ingredientes existentes*/
    const datos = await getIngredientes()
    const listaIngredientes = document.getElementById('list');
    datos.forEach((e) => {
        const li = document.createElement('li')
        li.textContent = `${e.nombre}`
        listaIngredientes.appendChild(li)
    });    
})