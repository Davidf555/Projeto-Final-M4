
class Denuncia {
    constructor(id, descricao,especie,data, local, disqueAjuda = "Disque 181") {
        this.id = id;
        this.descricao = descricao; 
        this.disqueAjuda = disqueAjuda; 
        this.especie = especie;
        this.data = data
        this.local = local
        
    }
}

module.exports = Denuncia;
