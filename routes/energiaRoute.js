const express = require('express');
const router = express.Router();

const { criarCasosEnergia, listarCasosEnergia, deletarCasosEnergia, editarCasosEnergia } = require('../controllers/energiaController.js');

const verificarEnergia = require('../middlewares/verificarEnergia.js');

router.post('/criar-energia', verificarEnergia, criarCasosEnergia);

router.get('/listar-energia', listarCasosEnergia);

router.delete('/deletar-energia/:id', deletarCasosEnergia);

router.put('/editar-energia/:id', editarCasosEnergia);

module.exports = router;