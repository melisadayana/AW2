import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const file = await readFile('./privado/data_categorias.json', 'utf-8');
const categoriaData = JSON.parse(file);

const router = Router();



export default router;