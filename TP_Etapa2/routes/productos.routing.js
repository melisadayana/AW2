import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const file = await readFile('./privado/data_productos.json', 'utf-8');
const productoData = JSON.parse(file);

const router = Router();

router.post('/xCategoria', (req, res) => {
    let idCategoria = req.body.id; 
    let result = productoData.filter(e => e.idcategoria === idCategoria) //Busca en el json objetos y compara el campo name con el valor de obj. Equivale a hacer un bucle para realizar la búsqueda.
    
    if(result.length > 0) {
        res.status(200).json(result)
    } else {
        res.status(400).json(`Error al encontrar productos de la categoría ${idCategoria}`)
    }
})

export default router;