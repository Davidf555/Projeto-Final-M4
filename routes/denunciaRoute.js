const express = require('express');
const router = express.Router();

<<<<<<< HEAD:routes/denunciaRoute.js
const { criarDenuncia, listarDenuncia, deletarDenuncia, editarDenuncia} = require('../controllers/denunciaController.js');
=======
const { criarDenuncia, listarDenuncias, deletarDenuncia, editarDenuncia} = require('../controllers/controller.js');

const verificarDenuncia = require('../middlewares/midlle.js')
>>>>>>> 91f7a7dffa6a3a2324feadcee817fdb58334a2c6:routes/route.js

router.post('/criar-denuncia', criarDenuncia);

router.get('/listar-denuncia', listarDenuncias);

router.delete('/deletar-denuncia', deletarDenuncia);

router.put('/editar-denuncia', editarDenuncia);

module.exports = router;