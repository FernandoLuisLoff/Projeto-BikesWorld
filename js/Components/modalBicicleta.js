function modalBicicleta(index, bicicleta) {
    const modalBicicleta = `<div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-3">
                <div class="d-flex">
                    <img class="img-fluid mx-auto d-block w-75" src="../../img/` + bicicleta.img + `"
                        alt="` + bicicleta.nome + `">
                    <div class="w-100">
                        <div class="d-flex w-100">
                            <button type="button" id="btn-tam-bicibleta-P" value="P" class="btn btn-tam-bicicleta rounded m-2">P</button>
                            <button type="button" id="btn-tam-bicibleta-M" value="M" class="btn btn-tam-bicicleta rounded m-2 active">M</button>
                            <button type="button" id="btn-tam-bicibleta-G" value="G" class="btn btn-tam-bicicleta rounded m-2">G</button>
                        </div>
                        <div class="text-center">
                            <h3 class="mt-2">` + bicicleta.valorAvista() + `</h2> 
                            <h4 class="parcelas">ou ` + bicicleta.parcelamento() + `</h2>
                        </div>
                        <button id="btn-add-carrinho" value="`+ index +`" type="button" class="btn btn-add-carrinho mx-auto d-block w-75 mt-3">Adicionar ao Carrinho</button>
                    </div>
                </div>
                <div class="text-center mt-2">
                    <h2>` + bicicleta.nome + `</h2>
                    <p>` + bicicleta.descricao + `</p>
                </div>
            </div>
        </div>
    </div>`;

    return modalBicicleta;
}

export { modalBicicleta }