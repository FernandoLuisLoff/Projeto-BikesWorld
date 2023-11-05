function modalBicicleta(index, bicicleta) {
    const modalBicicleta = `<div class="modal fade" id="modal-bicicleta-` + index + `">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-3">
                    <div class="d-flex">
                        <img class="img-fluid mx-auto d-block w-75" src="../../img/` + bicicleta.img + `"
                            alt="` + bicicleta.nome + `">
                        <div class="w-100">
                            <div class="btn-group w-100">
                                <button type="button" class="btn btn-light rounded m-2">P</button>
                                <button type="button" class="btn btn-light rounded m-2">M</button>
                                <button type="button" class="btn btn-light rounded m-2">G</button>
                            </div>
                            <div class="text-center">
                                <h3 class="mt-2">R$ ` + formatValue(bicicleta.valor) + `</h2>
                                    <h4 class="parcelas">ou R$ ` + formatValue(bicicleta.valorParcela) + ` X12</h2>
                            </div>
                            <button type="button" class="btn btn-add-carrinho mx-auto d-block w-75 mt-3">Adicionar ao
                                Carrinho</button>
                        </div>
                    </div>
                    <div class="text-center mt-2">
                        <h2>` + bicicleta.nome + `</h2>
                        <p>` + bicicleta.descricao + `</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    return modalBicicleta;
}

function formatValue(value) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    });
}

export { modalBicicleta }