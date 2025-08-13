
class Denuncia {
    constructor(id, caso, especie, local, data, descricao, disqueAjuda = "Disque 181") {
        this.id = id;
        this.descricao = descricao; 
        this.disqueAjuda = disqueAjuda; 
        this.especie = especie;
        this.data = data
        this.local = local
        this.caso = caso;
    }
}

module.exports = Denuncia;
