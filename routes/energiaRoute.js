const express = require('express');
const router = express.Router();

const { criarCasosEnergia, listarCasosEnergia, deletarCasosEnergia, editarCasosEnergia } = require('../controllers/energiaController.js');

const validarCasosEnergia = require('../middlewares/verificarEnergia.js');

router.post('/criar-energia', validarCasosEnergia, criarCasosEnergia);

router.get('/listar-energia', listarCasosEnergia);

router.delete('/deletar-energia/:id', deletarCasosEnergia);

router.put('/editar-energia/:id', editarCasosEnergia);

module.exports = router;