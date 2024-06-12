import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

//const file = await readFile('.servidor/data/data_categorias.json', 'utf-8');
//const categoriaData = JSON.parse(file);

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/data_categorias.json', 'utf-8')
    return JSON.parse(file)
}

router.get('/nombre/:nombre', async (req, res) => {
    const nombre = req.params.nombre
    const result = await getData()
    const data = result.find(e => e.categoria === nombre)
    
    try {
        if(data){
            res.status(200).json(data.categoria)
        }else{
            res.status(400).json({status:false})
        } 
    } catch (error) {
        res.send(500).json('Error al buscar categoría.')
    }   
})

router.get('/destacado', async (req, res) => {
    const result = await getData()  
    
    try {
        if(result){
            res.status(200).json(result)
        }else{
            res.status(400).json({status:false})
        } 
    } catch (error) {
        res.send(500).json('Error al buscar producto destacado.')
    }   
})

export default router;