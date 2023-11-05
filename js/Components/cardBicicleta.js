function cardBicicleta(index, bicicleta) {
    const cardBicicleta = `<div class="col-sm-12 col-md-6">
        <div class="card mx-auto d-block w-75 p-3 rounded">
            <img class="img-fluid mx-auto d-block w-75"
                src="../../img/` + bicicleta.img + `"
                alt="` + bicicleta.nome + `">
            <div class="text-center">
                <h1>` + bicicleta.nome + `</h1>
                <h3 class="mt-2">R$ ` + formatValue(bicicleta.valor) + `</h2>
                <h4 class="parcelas">ou R$ ` + formatValue(bicicleta.valorParcela) + ` X12</h2>
            </div>
            <button id="bicicleta-` + index + `" type="button" class="btn btn-comprar mx-auto d-block w-75 mt-3"
                data-bs-toggle="modal" data-bs-target="#modal-bicicleta-` + index + `">Comprar</button>
        </div>
    </div>`;

    return cardBicicleta;
}

function formatValue(value) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    });
}

export { cardBicicleta }