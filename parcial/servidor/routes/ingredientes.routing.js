import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const router = Router();

const getData = async() => {
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
        res.sendStatus(500)
    }
})

router.get('/id/:id', async (req, res) => {
    const id = req.params.id
    const result = await getData()
    const data = result.find(e => e.id === id)
    console.log(data)
    try{
        if(data) {
            res.status(200).json(data.nombre)
        } else {
            data = [];
            res.status(400).json({status:false, data})
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

export default router;