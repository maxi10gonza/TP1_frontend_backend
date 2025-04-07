const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

app.get('/saludo/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    res.send(`Hola, ${nombre}!`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
