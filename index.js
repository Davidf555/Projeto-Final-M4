const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const denunciaRotas = require('./routes/denunciaRoute.js');
const energiaRotas = require('./routes/energiaRoute.js');

app.use(cors());
app.use(express.json());

app.use('/casos-denuncia-animais', denunciaRotas);
app.use('/casos-energia', energiaRotas);

app.get("/", (req, res)=>{
  res.send("A API está online")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
});
