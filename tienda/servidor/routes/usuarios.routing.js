import {Router} from "express";
import {readFile, writeFile} from 'fs/promises';

const router = Router();

const getData = async() => {
    const file = await readFile('./servidor/data/data_usuarios.json', 'utf-8')
    return JSON.parse(file)
}

router.post('/login', async (req, res) => {    
    const usrNombre = req.body.usuario; 
    const usrPass = req.body.pass;
    const data = await getData()
    const result = data.find(e => e.usuario == usrNombre && e.pass == usrPass);
    
    try {
        if(result) {
            const data = {
                nombre: result.nombre,
                apellido: result.apellido,
                usuario: result.usuario,
                foto: result.foto,
                email: result.email,
                status:true
            }
            res.status(200).json(data)
        } else {
            res.status(400).json({status:false})
        }
    } catch (error) {
        res.send(500).json('Error al validar usuario.')
    }    
})

/*router.get('/id/:id', (req, res) => {
    res.status(200).json(usuarioData)
});*/

/*router.put('/foto/update/:userID', (req,res) => {
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
});*/

/*router.delete('/delete/:userID', (req,res) => {
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
});*/

export default router;