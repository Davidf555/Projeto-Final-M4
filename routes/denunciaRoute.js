const express = require('express');
const router = express.Router();

const { criarDenuncia, listarDenuncias, deletarDenuncia, editarDenuncia } = require('../controllers/denunciaController.js');

const validarDenuncia = require('../middlewares/verificarDenuncia.js');

router.post('/criar-denuncia', validarDenuncia, criarDenuncia);

router.get('/listar-denuncia', listarDenuncias);

router.delete('/deletar-denuncia/:id', deletarDenuncia);

router.put('/editar-denuncia/:id', editarDenuncia);

module.exports = router;