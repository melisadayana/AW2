import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/ingredientes.json', 'utf-8')
    return JSON.parse(file)
}

const setData = async(nuevo) => {
    const data = await getData()
    data.push(nuevo)
    await writeFile('./servidor/data/ingredientes.json', JSON.stringify(data, null, 2))
}

router.get('/', async (req, res) => {
    const result = await getData()

    try{
        if(result) {
            res.status(200).json(result)
        } else {
            res.status(400).json({status:false, result: []})
        }
    } catch (error) {
        res.send(500).json('Error al obtener ingredientes.')
    }
})

router.put('/agregar/:nombre', async (req, res) => {
    const nombre = req.params.nombre
    const result = await getData()
    const idNuevo = result.length + 1
    
    try{        
        const ingrediente = result.find(e => e.nombre == nombre)
        if(!ingrediente) {            
            const nuevoIngrediente = {
                id: idNuevo,
                nombre
            }           
            setData(nuevoIngrediente)
            res.status(201).json(result)
        } else {
            res.status(400).json("El ingrediente ya existe.")
        }
    } catch (error) {
        const status = 500
        res.sendStatus(status)
    }
})

export default router;