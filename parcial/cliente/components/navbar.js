import { API } from '../api/api.js';

export const navBar = ()=>{

    const routes = [
        {link:`${API}/index.html`, name:"Home"},
        {link:`${API}/pages/ingredientes/`, name:"Ingredientes"},
        {link:`${API}/pages/recetas/`, name:"Recetas"}
    ]
    return `
    <div class="flex justify-center relative top-5 sticky">
        <nav class="bg-slate-50 w-2/5 rounded-xl flex items-center justify-center p-2 gap-5 backdrop-blur-3xl bg-opacity-50">
            ${
                routes.map(e=>(
                    `<a href=${e.link} class="hover:bg-slate-100 p-1 rounded-md">${e.name}</a>`
                )).join('')
            }
        </nav>
    </div>
    `
}