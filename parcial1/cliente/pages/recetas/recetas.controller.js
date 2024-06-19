import { getRecetas } from "../../api/recipe.api.js"
import { getIngredientesNombre } from "../../api/ing.api.js"
import { recipe } from "../../components/recipe.js"

const btnAdd = document.getElementById("add")
const btnCancel = document.getElementById("cancel")
const btnCreate = document.getElementById('create')

const arrIng = []

btnCreate.addEventListener('click',()=>{
    const name = document.getElementById("name").value
    /*Se debe añadir la receta creada al servidor */
})

btnAdd.addEventListener('click',()=>{
    const quantity = document.getElementById("quantity").value
    const ing = document.getElementById("ing").value
    const li = document.createElement('li')


    arrIng.push({quantity, ing})
    li.textContent = `${ing}: ${quantity}`
    document.getElementById('list').appendChild(li)
})


btnCancel.addEventListener('click',()=>{
    arrIng.splice(0,arrIng.length)
    document.getElementById('list').innerHTML = ''
})

window.addEventListener('load', async function() {
    /*Llenar lista con las recetas existentes
        Se debe usar el componente recipe que recibe dos parametros, title y un array con los ingredientes de la receta llamado ing
    */
    const listaIngredientes = document.getElementById('list');
    const recetas = await getRecetas()
    const recipes = ''
    recetas.forEach((receta) => {            
        recipes += recipe(receta.nombre, receta.ingredientes)            
    });
    document.getElementById('listRecipe').innerHTML = recipes
    //document.getElementById('listRecipe').innerHTML = recipe("Pizza", [{name:"Queso", quantity:120}, {name:"Salsa", quantity:150}])
})