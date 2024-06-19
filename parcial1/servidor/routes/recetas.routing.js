import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/recetas.json', 'utf-8')
    return JSON.parse(file)
}

const getDataIng = async() => {
    const file = await readFile('./servidor/data/ingredientes.json', 'utf-8')
    return JSON.parse(file)
}

router.get('/', async (req, res) => {
    const resultRec = await getData()
    const resultIng = await getDataIng()

    const data = resultRec.map(receta => {
        return {
            nombre: receta.nombre,
            ingredientes: receta.ingredientes.map(ingrediente => {
                const ingredienteInfo = resultIng.find(e => e.id === ingrediente.idIngrediente);
                return {
                    nombre: ingredienteInfo.nombre,
                    cantidad: ingrediente.cantidad
                }                
            })
        }
    })
    
    try{
        if(data) {
            res.status(200).json(data)
        } else {
            res.status(400).json({status:false, data: []})
        }
    } catch (error) {
        res.send(500).json('Error al obtener ingredientes.')
    }
})

export default router;