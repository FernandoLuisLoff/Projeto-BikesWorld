
function cardBicicleta(index, bicicleta) {
    const cardBicicleta = `<div class="col-sm-12 col-md-6">
        <div class="card mx-auto d-block d-flex flex-column h-100 w-75 p-3 rounded">
            <img class="img-fluid mx-auto d-block w-75"
                src="../../img/` + bicicleta.img + `"
                alt="` + bicicleta.nome + `">
            <div class="text-center mt-auto">
                <h1>` + bicicleta.nome + `</h1>
                <h3 class="mt-2">` + bicicleta.valorAvista() + `</h2>
                <h4 class="parcelas">ou ` + bicicleta.parcelamento() + `</h2>
            </div>
            <button id="btn-bicicleta-` + index + `" value="`+ index +`" type="button" class="btn btn-comprar mt-auto mx-auto d-block w-75">Comprar</button>
        </div>
    </div>`;

    return cardBicicleta;
}

export { cardBicicleta }