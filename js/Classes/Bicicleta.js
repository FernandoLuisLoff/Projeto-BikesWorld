class Bicicleta {
    constructor(nome, descricao, img, tipo, valor) {
        this.nome = nome;
        this.descricao = descricao;
        this.img = img;
        this.tipo = tipo;
        this.valor = valor;
    }

    valorAvista() {
        return "R$ " + formatValue(this.valor);  
    }

    parcelamento() {
        let valorComJuros = this.valor+(this.valor*0.15);
        let parcela = valorComJuros/12;
        return "R$ " + formatValue(parcela) + " X12";
    }
    
    valorAvistaXQuantidide(qtd) {
        return "R$ " + formatValue(this.valor*qtd);  
    }
}

function formatValue(value) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    });
}

export { Bicicleta }