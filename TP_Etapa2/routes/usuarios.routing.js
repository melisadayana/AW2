import {Router} from "express";
import {readFile, writeFile} from 'fs/promises';

const file = await readFile('./privado/data_usuarios.json', 'utf-8');
const usuarioData = JSON.parse(file);

const router = Router();

router.post('/login', (req, res) => {    
    let usrNombre = req.body.usuario; 
    let usrPass = req.body.pass;

    const result = usuarioData.find(e => e.usuario == usrNombre && e.pass == usrPass);
    
    if(result) {
        res.status(200).json(`Bienvenido ${result.nombre}`)
    } else {
        res.status(400).json(`El usuario ${usrNombre} no se encuentra`)
    }
})

router.get('/id/:id', (req, res) => {
    res.status(200).json(usuarioData)
});

router.put('/foto/update/:userID', (req,res) => {
    const user_id = req.params.userID
    const new_foto = req.body.foto

    try {
        const index = usuarioData.findIndex(e => e.id == user_id)
        if(index != -1) {
            usuarioData[index].foto = new_foto
            writeFile('./privado/data_usuarios.json', JSON.stringify(usuarioData, null, 2));
            res.status(200).json('Foto actualizada correctamente.')
        } else {
            res.status(400).json('Usuario no encontrado.')
        }
    } catch (error) {
        res.send(500).json('Error al actualizar foto.')
    }
});

router.delete('/delete/:userID', (req,res) => {
    const user_id = req.params.userID

    try {
        const index = usuarioData.findIndex(e => e.id == user_id)
        if(index != -1) {
            usuarioData.splice(index, 1)
            writeFile('./privado/data_usuarios.json', JSON.stringify(usuarioData, null, 2));
            res.status(200).json('Foto eliminada correctamente.')
        } else {
            res.status(400).json('Usuario no encontrado.')
        }
    } catch (error) {
        res.send(500).json('Error al eliminar foto.')
    }
});

export default router;