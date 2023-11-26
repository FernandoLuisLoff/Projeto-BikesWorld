// Click menu tipos de bicicleta
import { headerComponent } from "./Components/header.js";
import { footerComponent } from "./Components/footer.js";
import { cardBicicleta } from "./Components/cardBicicleta.js";
import { modalBicicleta } from "./Components/modalBicicleta.js";
import { arrayBicicletas } from "./bicicletas.js";
import { addItem } from "./carrinho.js";
import { preencheDadosUsuario } from "./usuario.js";

window.onload = () => {
    // Carrega o header da tela
    document.querySelector('#appHeader').innerHTML = headerComponent;
    // Carrega o footer da tela
    document.querySelector('#appFooter').innerHTML = footerComponent;

    // Carrega na tela os cads das bicicletas do array
    inicializarCardsBicicletas(arrayBicicletas);

    // Preenche o dados do usuario
    preencheDadosUsuario();
    
    // Carrega o datatable com os produtos 
    listarCarrinho();
}

function inicializarCardsBicicletas(bicicletas) {
    for (let i=0; i<bicicletas.length; i++) {
        if (bicicletas[i].tipo == "URBANA") {
            document.querySelector('#card-urbana').innerHTML += cardBicicleta(i, bicicletas[i]);
        } else if (bicicletas[i].tipo == "MONTANHA") {
            document.querySelector('#card-montanha').innerHTML += cardBicicleta(i, bicicletas[i]);
        }
    }

    // Adiciona o evento no botão comprar para abrir o motal do produto 
    document.querySelectorAll(".btn-comprar").forEach(function(element) {
        element.addEventListener("click", function(event) {
            const indexbicicleta = event.target.value;

            document.querySelector('#modal-bicicleta').innerHTML = modalBicicleta(indexbicicleta, bicicletas[indexbicicleta]);

            $('.btn-tam-bicicleta').click(function() {
                // Remove a classe 'active' de todos os botões
                $('.btn-tam-bicicleta').removeClass('active');
                
                // Adiciona a classe 'active' ao botão clicado
                $(this).addClass('active');
            });

            document.querySelectorAll(".btn-add-carrinho").forEach(function(element) {
                element.addEventListener("click", function(event) {
                    addItem(event.target.value);
                });
            });

            $('#modal-bicicleta').modal('show');
        });
    });
}