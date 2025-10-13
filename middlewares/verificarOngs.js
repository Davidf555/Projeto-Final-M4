function validarOng(req, res, next) {
    const { nome, descricao, site } = req.body;

    if (!nome || !descricao || !site) {
        return res.status(400).json({
            erro: "Todos os campos obrigatórios devem ser preenchidos!"
        });
    }

    next();
}

module.exports = validarOng;