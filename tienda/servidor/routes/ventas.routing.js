import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

//const file = await readFile('.servidor/data/data_ventas.json', 'utf-8');
//const ventaData = JSON.parse(file);

const router = Router();

const getData = async() => {
    const file = await readFile('.servidor/data/data_ventas.json', 'utf-8')
    return JSON.parse(file)
}

router.get('/all', (req, res) => {
    res.status(200).json(ventaData)
});

router.delete('/delete/:ventaID', (req,res) => {
    const venta_id = req.params.ventaID

    try {
        const index = ventaData.findIndex(e => e.id == venta_id)
        if(index != -1) {
            ventaData.splice(index, 1)
            writeFile('./privado/data_ventas.json', JSON.stringify(ventaData, null, 2));
            res.status(200).json('Venta eliminada correctamente.')
        } else {
            res.status(400).json('Venta no encontrada.')
        }
    } catch (error) {
        res.send(500).json('Error al eliminar venta.')
    }
});

export default router;