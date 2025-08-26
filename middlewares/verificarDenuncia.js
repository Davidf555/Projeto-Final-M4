function validarDenuncia(req, res, next) {
    const { caso, especie, local, data, descricao } = req.body;

    if (!caso || !descricao || !especie || !data || !local) {
        return res.status(400).json({
            erro: "Todos os campos obrigatórios devem ser preenchidos!"
        });
    }

    next();
}

module.exports = validarDenuncia;