const express = require('express');
const router = express.Router();


const { criarDenuncia, listarDenuncias, deletarDenuncia, editarDenuncia} = require('../controllers/denunciaController.js');

const verificarDenuncia = require('../middlewares/midlle.js')

router.post('/criar-denuncia', verificarDenuncia, criarDenuncia);

router.get('/listar-denuncia', listarDenuncias);

router.delete('/deletar-denuncia', deletarDenuncia);

router.put('/editar-denuncia', editarDenuncia);

module.exports = router;