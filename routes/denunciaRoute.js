const express = require('express');
const router = express.Router();

const { criarDenuncia, listarDenuncia, deletarDenuncia, editarDenuncia} = require('../controllers/denunciaController.js');

router.post('/criar-denuncia', criarDenuncia);

router.get('/listar-denuncia', listarDenuncia);

router.delete('/deletar-denuncia', deletarDenuncia);

router.put('/editar-denuncia', editarDenuncia);

// método put, método delete

module.exports = router;