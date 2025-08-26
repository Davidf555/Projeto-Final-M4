const express = require('express');
const app = express();

const denunciaRotas = require('./routes/denunciaRoute.js');
const energiaRotas = require('./routes/energiaRoute.js');

app.use(express.json());

app.use('/casos-denuncia-animais', denunciaRotas);
app.use('/casos-energia', energiaRotas);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
