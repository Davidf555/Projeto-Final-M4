function validarCasosEnergia(req, res, next) {
    const { caso, local, descricao, impacto } = req.body;

    if (!caso || !local || !descricao || !impacto) {
        return res.status(400).json({
            erro: "Todos os campos obrigatórios devem ser preenchidos!"
        });
    }

    next();
}

module.exports = { validarCasosEnergia };