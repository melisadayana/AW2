import express from "express";
import usuarioRouter from './servidor/routes/usuarios.routing.js';
import productoRouter from './servidor/routes/productos.routing.js';
import categoriaRouter from './servidor/routes/categorias.routing.js';
import ventaRouter from './servidor/routes/ventas.routing.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('./cliente'));

/*app.use(cors({
    origin:'http://127.0.0.1:5500'
}))*/

app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}`)
});

app.use('/usuarios', usuarioRouter);
app.use('/productos', productoRouter);
app.use('/categorias', categoriaRouter);
app.use('/ventas', ventaRouter);