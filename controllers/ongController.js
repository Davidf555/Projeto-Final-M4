const Ong = require('../models/ongModel.js');

const ongs = [
    {
        "id": 1,
        "nome": "Greennova Hub",
        "descricao": "Cluster brasileiro de tecnologia limpa sem fins lucrativos que atua fomentando a transição verde e promovendo inovação em áreas como energia renovável, saneamento e economia circular.",
        "site": "https://greennovahub.com.br"
    },
    {
        "id": 2,
        "nome": "IDEAAS (Instituto para o Desenvolvimento de Energias Alternativas e da Auto Sustentabilidade)",
        "descricao": "ONG brasileira fundada em 1997 que conecta energia limpa a direitos humanos essenciais. Atua com eletrificação rural, energia solar fotovoltaica e tecnologias sociais de acesso à energia.",
        "site": "https://www.ideaas.org.br"
    },
    {
        "id": 3,
        "nome": "Empower Brasil",
        "descricao": "Organização que instala sistemas solares em comunidades carentes e organizações sociais no Brasil, promovendo sustentabilidade e redução de custos com energia.",
        "site": "https://empowerbrasil.org"
    },
    {
        "id": 4,
        "nome": "ABENS — Associação Brasileira de Energia Solar",
        "descricao": "Associação fundada em 1978 que promove divulgação, incentivo e estudos da energia solar no Brasil, apoiando a integração entre pesquisa, indústria e governo.",
        "site": "https://www.abens.org.br"
    },
    {
        "id": 5,
        "nome": "Duo Energy",
        "descricao": "Associação sem fins lucrativos que promove o uso de energia solar sustentável, conectando geradores e consumidores através de projetos colaborativos.",
        "site": "https://duoenergy.ong.br"
    },
    {
        "id": 6,
        "nome": "ABREER — Associação Brasileira de Eficientização e Energia Renovável",
        "descricao": "Entidade que promove eficiência energética e incentivo às energias renováveis no Brasil, com foco em estudos técnicos e articulação institucional.",
        "site": "https://www.abreer.org.br"
    },
    {
        "id": 7,
        "nome": "ABEEólica — Associação Brasileira de Energia Eólica",
        "descricao": "Associação que representa e articula o setor de energia eólica no Brasil, promovendo políticas públicas, inovação e sustentabilidade no uso dos ventos como fonte energética.",
        "site": "https://abeeolica.org.br"
    },
    {
        "id": 8,
        "nome": "ABSOLAR — Associação Brasileira de Energia Solar Fotovoltaica",
        "descricao": "Associação nacional que representa empresas e instituições do setor solar fotovoltaico, promovendo políticas de incentivo e disseminação da energia solar no Brasil.",
        "site": "https://absolar.org.br"
    }
];

const criarOng = (req, res) => {
    const { nome, descricao, site } = req.body;
    const novaOng = { id: ongs.length + 1, nome, descricao, site };
    ongs.push(novaOng);
    res.status(201).json(novaOng);
};

const listarOngs = (req, res) => {
    res.json(ongs);
};

const editarOng = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, site } = req.body;

    const index = ongs.findIndex(o => o.id == id);
    if (index === -1) {
        return res.status(404).json({ mensagem: "ONG não encontrada" });
    }

    ongs[index] = { ...ongs[index], nome, descricao, site };
    res.json({ mensagem: "ONG editada com sucesso", ong: ongs[index] });
};

const deletarOng = (req, res) => {
    const { id } = req.params;

    const index = ongs.findIndex(o => o.id == id);
    if (index === -1) {
        return res.status(404).json({ mensagem: "ONG não encontrada" });
    }

    ongs.splice(index, 1);
    res.json({ mensagem: "ONG removida com sucesso" });
};

module.exports = { criarOng, listarOngs, editarOng, deletarOng };
