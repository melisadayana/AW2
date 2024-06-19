import express from "express";
import ingredientesRouter from './servidor/routes/ingredientes.routing.js';
import recetasRouter from './servidor/routes/recetas.routing.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('./cliente'));

app.listen(port, () => {
    console.log(`Servidor levantado en puerto ${port}`)
});

app.use('/ingredientes', ingredientesRouter);
app.use('/recetas', recetasRouter);