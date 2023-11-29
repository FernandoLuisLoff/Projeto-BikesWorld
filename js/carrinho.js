import { arrayBicicletas } from "./bicicletas.js";

const carrinhoDataTable = new DataTable('#carrinhoDataTable', {
    "responsive": true,
    "paging"    : false,
    "ordering"  : false,
    "info"      : false,
    "searching" : false,
    "language"  : {
        "zeroRecords": "Sem Produtos Adicionados",
        "infoEmpty"  : "Sem Produtos Adicionados"
    }
}).on('draw.dt', function () {
    // Evento editar item carrinho
    document.querySelectorAll(".inp-qtd-item").forEach(function(element) {
        element.addEventListener("change", function(event) {
            let codItem = event.target.id.replace('imp-qtd-', '');
            let novaQtd = event.target.value;

            if (novaQtd > 0) {
                let arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
                updateItensArray(codItem, arrayItens[codItem].codBicicleta, arrayItens[codItem].tam, novaQtd);    
            } else {
                removeItensArray(codItem);
            }

            listarCarrinho();
        });
    });

    // Evento excluir item carrinho
    document.querySelectorAll(".btn-exc-item").forEach(function(element) {
        element.addEventListener("click", function(event) {
            let codItem = event.target.id.replace('btn-exc-', '');
            removeItensArray(codItem);
            listarCarrinho();
        });
    });
});

function addItem(codBicicleta) {
    let tam = retornaTamBicicletaSelect();

    // Verifica se ja existe o item no carrinho
    if(itemInseridoNoArray(codBicicleta, tam)) {
        // Atualiza o item no carrinho adicionando 1 a quantidade
        updateItensArray(indiceItemArray(codBicicleta, tam), codBicicleta, tam, qtdItemArray(codBicicleta, tam)+1)
    } else {
        // Insere o novo item
        insertItensArray(codBicicleta, tam, 1);    
    }

    listarCarrinho();
}

// Evento limpar carrinho
document.querySelectorAll(".btn-limpar-carrinho").forEach(function(element) {
    element.addEventListener("click", function() {
        localStorage.removeItem('arrayItens');
        listarCarrinho();
    });
});

// Evento finalizar carrinho
document.querySelectorAll(".btn-finalizar-compra").forEach(function(element) {
    element.addEventListener("click", function() {
        if (localStorage.getItem('arrayItens') != null) {
            if (localStorage.getItem('usuario') != null) {
                Swal.fire({
                    text: "Compra finalizada com sucesso!",
                    icon: "success"
                });

                localStorage.removeItem('arrayItens');
                listarCarrinho();
            } else {
                Swal.fire({
                    text: "Cadastre um usuário antes de finalizar a compra!",
                    icon: "error"
                }); 
            }
        } else {
            Swal.fire({
                text: "Adicione produtos no carrinho antes de finalizar a compra!",
                icon: "error"
            });    
        }
    });
});

function insertItensArray(codBicicleta, tam, qtd) {
    let arrayItens = [];
    if (localStorage.getItem('arrayItens') != null) {
        arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
    }

    arrayItens.push({
        "codBicicleta" : codBicicleta,
        "tam" : tam,
        "qtd" : qtd    
    });

    localStorage.setItem('arrayItens', JSON.stringify(arrayItens));
}

function updateItensArray(codItem, codBicicleta, tam, qtd) {
    let arrayItens = [];
    if (localStorage.getItem('arrayItens') != null) {
        arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
    }

    arrayItens.splice(codItem, 1, {
        "codBicicleta" : codBicicleta,
        "tam" : tam,
        "qtd" : qtd    
    });

    localStorage.setItem('arrayItens', JSON.stringify(arrayItens));
}

function removeItensArray(codItem) {
    let arrayItens = [];
    if (localStorage.getItem('arrayItens') != null) {
        arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
    }

    arrayItens.splice(codItem, 1);

    localStorage.setItem('arrayItens', JSON.stringify(arrayItens));
}

function itemInseridoNoArray(codBicicleta, tam) {
    let validation = false;
    if (localStorage.getItem('arrayItens') != null) {
        let arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
        arrayItens.forEach(function(objeto) {
            if(objeto.codBicicleta == codBicicleta && objeto.tam == tam) {
                validation =  true;
            }
        });
    }
    return validation;
}

function indiceItemArray(codBicicleta, tam) {
    let index = null;
    if (localStorage.getItem('arrayItens') != null) {
        let arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
        arrayItens.forEach(function(objeto, indice) {
            if(objeto.codBicicleta == codBicicleta && objeto.tam == tam) {
                index = indice;
            }
        });
    }
    return index;
}

function qtdItemArray(codBicicleta, tam) {
    let qtd = null;
    if (localStorage.getItem('arrayItens') != null) {
        let arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
        arrayItens.forEach(function(objeto) {
            if(objeto.codBicicleta == codBicicleta && objeto.tam == tam) {
                qtd = objeto.qtd;
            }
        });
    }
    return qtd;
}

function retornaTamBicicletaSelect() {
    let value;
    document.querySelectorAll(".btn-tam-bicicleta.active").forEach(function(element) {
        value = element.value;
    });
    return value;
}

function listarCarrinho() {
    let valorTotal = 0;
    let qtdTotal = 0;

    // Limpa o datatable
    carrinhoDataTable.clear();
    
    if (localStorage.getItem('arrayItens') != null) {
        const arrayItens = JSON.parse(localStorage.getItem('arrayItens'));
        let indice = 0;

        arrayItens.forEach(function(item) {
            const bicicleta = arrayBicicletas[item.codBicicleta];
            addItemDataTable(
                indice,
                bicicleta,
                item.tam,
                item.qtd
            );
            valorTotal = valorTotal + (bicicleta.valor*item.qtd);
            qtdTotal = qtdTotal + parseInt(item.qtd);
            indice++;
        });
    }    

    // Redezenha o datatable
    carrinhoDataTable.draw();
    // Coloca o valor total no footer do datatable
    document.getElementById("totCarrinho").innerHTML = "R$ " + formatValue(valorTotal);
    // Coloca a quantidade no icone do carrinho
    document.getElementById("quantidade-badge").innerHTML = qtdTotal;
}

function addItemDataTable(codItem, bicicleta, tam, qtd) {
    carrinhoDataTable.row.add([
        imgDataTable(bicicleta),
        bicicleta.nome + " - " + tam,
        inpQtdDataTable(codItem, qtd),
        bicicleta.valorAvista(),
        bicicleta.valorAvistaXQuantidide(qtd),
        btnExcDataTable(codItem)
    ]);
}

function imgDataTable(bicicleta) {
    return `<img class="imgDataTable"
        src="../../img/` + bicicleta.img + `"
        alt="` + bicicleta.nome + `"></img>`;    
}

function inpQtdDataTable(codItem, qtd) {
    return `<input id="imp-qtd-`+codItem+`" class="form-control w-50 inp-qtd-item" type="number" value="`+qtd+`"></input>`;
}

function btnExcDataTable(codItem) {
    return `<button class="btn btn-danger btn-xs btn-exc-item" id="btn-exc-`+codItem+`">
        <span class="fa fa-trash"></span>
    </button>`;
}

function formatValue(value) {
    return value.toLocaleString('pt-BR', {
        minimumFractionDigits: 2
    });
}

export { addItem }
export { listarCarrinho }