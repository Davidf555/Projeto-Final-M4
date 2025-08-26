function validarDenuncia(req, res, next) {
    const { id, caso, especie, local, data, descricao } = req.body;

    if (!id || !caso || !descricao || !especie || !data || !local) {
        return res.status(400).json({
            erro: "Todos os campos obrigatórios devem ser preenchidos!"
        });
    }

    next();
}

module.exports = { validarDenuncia };