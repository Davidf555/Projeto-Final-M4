const e = require('express');
const Denuncia = require('../models/model.js')

const denuncias = [
    {
        caso: "Manchinha",
        especie: "Cachorro (SRD)",
        local: "Osasco - SP",
        data: "2018-11",
        descricao: "Cachorro abandonado em estacionamento de hipermercado Carrefour foi envenenado e espancado por segurança. Morreu pouco depois. Caso teve grande repercussão e levou à criação da Lei 14.064/2020."
    },

    {
        caso: "Costela",
        especie: "Cachorro (Buldogue)",
        local: "Rio Grande - RS",
        data: "2022-01",
        descricao: "Servidor público matou a pauladas o cão Costela. Condenado a 6 anos, 3 meses e 18 dias de reclusão."
    },

    {
        caso: "Nina",
        especie: "Gata",
        local: "Rio de Janeiro - RJ",
        data: "2019-08",
        descricao: "Gata pisou no pé de uma funcionária de segurança que, em seguida, a matou com violência. Autora foi presa e multada; supermercado também recebeu multa milionária."
    },

    {
        caso: "Búfalos de Brotas",
        especie: "Búfalos e cavalos",
        local: "Brotas - SP",
        data: "2021-11",
        descricao: "Mais de 1.000 búfalos e dezenas de cavalos foram encontrados sem comida e água em fazenda. Proprietário preso; penalidades podem somar centenas de anos de prisão e milhões em multas."
    },

    {
        caso: "Sansão",
        especie: "Cachorro (Pit bull)",
        local: "Confins - MG",
        data: "2020-07",
        descricao: "Pit bull teve as duas patas traseiras decepadas com foice por dois homens. Caso levou à mobilização nacional e aumento da pena na Lei de Crimes Ambientais."
    },

    {
        caso: "Três onças-pintadas abatidas",
        especie: "Onça-pintada",
        local: "Cáceres - MT",
        data: "2023",
        descricao: "Caçadores mataram e decapitaram três onças-pintadas, registrando em vídeo. Responsáveis foram presos, mas soltos durante processo."
    },
    {
        caso: "Canil clandestino de Curitiba",
        especie: "Cães (várias raças)",
        local: "Curitiba - PR",
        data: "2019",
        descricao: "Após denúncia, 36 cães foram resgatados de canil insalubre. Responsáveis multados em R$ 18 mil; animais encaminhados a ONG."
    },
    {
        caso: "50 gatos em condições insalubres",
        especie: "Gatos",
        local: "São Paulo - SP",
        data: "2019",
        descricao: "Mulher mantinha 50 gatos sem água, comida ou higiene adequada. Multa de R$ 150 mil; parte dos animais foi resgatada por voluntários."
    },
    {
        caso: "Linguiça com carne de cães e gatos",
        especie: "Cães e gatos",
        local: "Viana - ES",
        data: "2019",
        descricao: "Residência abatia cães e gatos para produção de linguiça. Responsáveis presos por maus-tratos, crime contra o consumo e crime ambiental."
    },
    {
        caso: "Rinha de cães em Mairiporã",
        especie: "Cães (Pit bulls)",
        local: "Mairiporã - SP",
        data: "2019-12",
        descricao: "Polícia fechou rinha de cães e resgatou 33 pit bulls, alguns mutilados. Várias prisões realizadas."
    },
    {
        caso: "Chico e Guerreiro",
        especie: "Cães",
        local: "Petrópolis - RJ",
        data: "2024",
        descricao: "Dois cães gravemente feridos e desnutridos foram resgatados por ativistas após denúncia; receberam tratamento e foram encaminhados para adoção."
    },
    {
        caso: "Cativeiro de silvestres em Mongaguá",
        especie: "Aves e lagarto",
        local: "Mongaguá - SP",
        data: "2020",
        descricao: "46 animais silvestres encontrados em cativeiro irregular e precário. Responsáveis autuados e animais enviados para reabilitação."
    }
]

const criarDenuncia = (req, res) => {
    const { caso, especie, local, data, descricao } = req.body;
    const novaDenuncia = new Denuncia(caso, especie, local, data, descricao);
    denuncias.push(novaDenuncia);
    res.status(201).json(novaDenuncia);
}

const listarDenuncias = (req, res) => {
    res.json(denuncias)
}

const deletarDenuncia = (req, res) => {
    const { id } = req.params;

    const index = denuncias.findIndex(p => p.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagens: "Denuncia não encontrado" });
    }
    denuncias.splice(index, 1);
    res.json({ mensagens: "Denuncia removida com sucesso" });
}

const editarDenuncia = (req, res) => {
    const { id } = req.params;
    const { caso, especie, local, data, descricao } = req.body;

    const index = denuncias.findIndex(p => p.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagens: "Denuncia não encontrado" });
    }

    denuncias[index] = { ...denuncias[index], caso, especie, local, data, descricao }
    res.json({ mensagens: "Denuncia removida e editada com sucesso" });
}

module.exports = { criarDenuncia, listarDenuncias, deletarDenuncia, editarDenuncia };