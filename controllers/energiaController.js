const CasoEnergia = require('../models/energiaModel.js');

const energiaCasos = [
    {
        id: 1,
        caso: "Parques Eólicos no Nordeste",
        local: "Rio Grande do Norte, Bahia, Ceará, Pernambuco",
        descricao: "O Nordeste concentra mais de 85% da capacidade eólica do Brasil.",
        impacto: "Em 2022, a geração eólica evitou a emissão de 23 milhões de toneladas de CO₂ e gerou milhares de empregos."
    },
    {
        id: 2,
        caso: "Energia Solar em Minas Gerais",
        local: "Uberlândia, Belo Horizonte e interior de MG",
        descricao: "O estado é líder em geração distribuída de energia solar no Brasil.",
        impacto: "Reduziu custos de energia para famílias e empresas, além de diminuir a dependência de combustíveis fósseis."
    },
    {
        id: 3,
        caso: "Biogás em aterro sanitário",
        local: "Caieiras - SP",
        descricao: "Um dos maiores aterros da América Latina transforma metano do lixo em eletricidade para milhares de casas.",
        impacto: "Reduziu a emissão de gases de efeito estufa e transformou resíduos em fonte de energia renovável."
    },
    {
        id: 4,
        caso: "Energia Geotérmica",
        local: "Islândia",
        descricao: "A Islândia gera quase 100% da eletricidade e aquecimento com energia geotérmica e hidrelétrica.",
        impacto: "Eliminou a dependência de combustíveis fósseis e tornou o país referência em energia limpa."
    },
    {
        id: 5,
        caso: "Parque Solar Noor Ouarzazate",
        local: "Marrocos",
        descricao: "Um dos maiores complexos solares do mundo, abastece 1,3 milhão de pessoas.",
        impacto: "Evita a emissão de 760 mil toneladas de CO₂ por ano e fortalece a segurança energética do país."
    },
    {
        id: 6,
        caso: "Comunidade Babilônia – Rio de Janeiro",
        local: "Favela Babilônia, Rio de Janeiro",
        descricao: "Moradores instalaram painéis solares em telhados comunitários.",
        impacto: "Redução significativa na conta de luz e fortalecimento da autonomia energética local."
    },
    {
        id: 7,
        caso: "Parque Solar de Bom Princípio",
        local: "Bom Princípio, Piauí",
        descricao: "Instalação de um grande complexo fotovoltaico.",
        impacto: "Geração de energia limpa e criação de empregos locais."
    },
    {
        id: 8,
        caso: "Projeto de Energia Solar em Escolas – EDP Brasil",
        local: "Diversas regiões",
        descricao: "Implementação de sistemas solares em escolas públicas e organizações sociais.",
        impacto: "Redução de custos com energia e promoção de educação ambiental."
    },
    {
        id: 9,
        caso: "Usina Solar de Pirapora",
        local: "Pirapora, Minas Gerais",
        descricao: "Usina solar com capacidade de 400 MW.",
        impacto: "Fornecimento de energia limpa para milhares de residências e empresas, contribuindo para a matriz energética sustentável."
    },
    {
        id: 10,
        caso: "Projeto Solar Rural",
        local: "Diversas propriedades rurais no Paraná",
        descricao: "Implementação de sistemas fotovoltaicos em propriedades agrícolas.",
        impacto: "Redução de custos operacionais para agricultores e incentivo à adoção de práticas sustentáveis no campo."
    }
];

const criarCasosEnergia = (req, res) => {
    const { caso, local, descricao, impacto } = req.body;
    const novoCaso = new CasoEnergia(
        energiaCasos.length + 1,
        caso,
        local,
        descricao,
        impacto
    );
    energiaCasos.push(novoCaso);
    res.status(201).json(novoCaso);
}

const listarCasosEnergia = (req, res) => {
    res.json(energiaCasos);
}

const editarCasosEnergia = (req, res) => {
    const { id } = req.params;
    const { caso, local, descricao, impacto } = req.body;

    const index = energiaCasos.findIndex(e => e.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Caso de energia não encontrado" });
    }

    energiaCasos[index] = {
        ...energiaCasos[index],
        caso,
        local,
        descricao,
        impacto
    };

    res.json({ mensagem: "Caso de energia editado com sucesso" });
}

const deletarCasosEnergia = (req, res) => {
    const { id } = req.params;

    const index = energiaCasos.findIndex(e => e.id == id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Caso de energia não encontrado" });
    }

    energiaCasos.splice(index, 1);
    res.json({ mensagem: "Caso de energia removido com sucesso" });
}

module.exports = { criarCasosEnergia, listarCasosEnergia, editarCasosEnergia, deletarCasosEnergia };