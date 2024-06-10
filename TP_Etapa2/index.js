import express from "express";
import {readFile, writeFile} from 'fs/promises';
import usuarioRouter from './routes/usuarios.routing.js';
import productoRouter from './routes/productos.routing.js';
import categoriaRouter from './routes/categorias.routing.js';
import ventaRouter from './routes/ventas.routing.js';

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}`)
});

app.use('/usuarios', usuarioRouter);
app.use('/productos', productoRouter);
app.use('/categorias', categoriaRouter);
app.use('/ventas', ventaRouter);