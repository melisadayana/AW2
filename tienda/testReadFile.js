import fs from 'fs';
import path from 'path';

// Define la ruta al archivo
const filePath = path.resolve('data', 'data_productos.json');

// Intenta leer el archivo
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error al leer el archivo: ${err.message}`);
    } else {
        console.log('Archivo leído correctamente:');
        console.log(data);
    }
});