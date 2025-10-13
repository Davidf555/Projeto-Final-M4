const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const ongRotas = require('./routes/ongRoute.js');
const energiaRotas = require('./routes/energiaRoute.js');

app.use(express.json());

app.use('/ongs', ongRotas);
app.use('/casos-energia', energiaRotas);

app.get("/", (req, res)=>{
  res.send("A API está online")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta 3000");
});
