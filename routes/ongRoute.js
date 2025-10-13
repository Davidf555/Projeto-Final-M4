const express = require('express');
const router = express.Router();

const { criarOng, listarOngs, deletarOng, editarOng } = require('../controllers/ongController.js');
const validarOng = require('../middlewares/verificarOngs.js');

router.post('/criar-ong', validarOng, criarOng);

router.get('/listar-ongs', listarOngs);

router.put('/editar-ong/:id', validarOng, editarOng);

router.delete('/deletar-ong/:id', deletarOng);

module.exports = router;
