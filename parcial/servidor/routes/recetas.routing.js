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
    const result = await getData()

    try{
        if(result) {
            res.status(200).json(result)
        } else {
            result = [];
            res.status(400).json({status:false, result})
        }
    } catch (error) {
        res.send(500).json('Error al obtener recetas.')
    }
})

router.get('/xCategoria/:nomCategoria', async (req, res) => {
    const nomCat = req.params.nomCategoria
    const resCat = await getCat()
    const result = await getData()
    const categoria = resCat.find(e => e.categoria === nomCat)
    const data = result.filter(e => e.idcategoria === categoria.id)
    
    try {
        if(data.length > 0) {
            res.status(200).json(data)
        } else {
            res.status(400).json({status:false})
        }
    } catch (error) {
        res.send(500).json('Error al obtener productos.')
    }
})

export default router;