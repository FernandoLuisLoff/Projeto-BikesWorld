// Click menu tipos de bicicleta
import { headerComponent } from "./Components/header.js";
import { footerComponent } from "./Components/footer.js";
import { cardBicicleta } from "./Components/cardBicicleta.js";
import { modalBicicleta } from "./Components/modalBicicleta.js";
import { Bicicleta } from "./Classes/Bicibleta.js";

window.onload = () => {
    debugger;
    document.querySelector('#appHeader').innerHTML = headerComponent;
    document.querySelector('#appFooter').innerHTML = footerComponent;

    let bicicletas = inicializarBicicletas();
    inicializarCardsBicicletas(bicicletas);
    inicializarModalsBicicletas(bicicletas);
}

function inicializarCardsBicicletas(bicicletas) {
    debugger;
    for (let i=0; i<bicicletas.length; i++) {
        if (bicicletas[i].tipo == "URBANA") {
            document.querySelector('#card-urbana').innerHTML += cardBicicleta(i, bicicletas[i]);
        } else if (bicicletas[i].tipo == "MONTANHA") {
            document.querySelector('#card-montanha').innerHTML += cardBicicleta(i, bicicletas[i]);
        }
    }
}

function inicializarModalsBicicletas(bicicletas) {
    for (let i=0; i<bicicletas.length; i++) {
        document.querySelector('#modal-bicicletas').innerHTML += modalBicicleta(i, bicicletas[i]);
    }
}

function inicializarBicicletas() {
    let bicicletas = [];

    bicicletas.push(new Bicicleta(
        "BICICLETA SPECIALIZED TURBO TERO 3.0",
        "A nova Turbo Tero é uma mountain bike elétrica equipada para os deslocamentos do dia a dia."
        +"Uma mountain bike para seus deslocamentos. O meio de transporte que você pode usar para"
        +"passear. Uma a bike de passeio com a qual você consegue transportar mercadorias. O que você"
        +"precisar, para onde quiser ir. Verdadeira super faz tudo, a Tero combina utilidade variada"
        +"com DNA de mountain bike de Campeã Mundial e assistência elétrica líder na categoria.",
        "BICICLETA SPECIALIZED TURBO TERO 3.0.png",
        "URBANA",
        32990.00
    ));

    bicicletas.push(new Bicicleta(
        "BICICLETA SPECIALIZED TURBO TERO X 4.0",
        "O Turbo Tero X significa uma coisa: você vai precisar de um mapa maior. Com autonomia para"
        +"andar em qualquer lugar, esta bicicleta elétrica com suspensão total é o nosso veículo para"
        +"ir a qualquer lugar, sobre qualquer coisa, com tudo. Além disso, com espaço de armazenamento"
        +"suficiente para acomodar alguns confortos do interior, você descobrirá novas aventuras com"
        +"mais facilidade do que nunca.",
        "BICICLETA SPECIALIZED TURBO TERO X 4.0.png",
        "URBANA",
        45990.00
    ));

    bicicletas.push(new Bicicleta(
        "BICICLETA SPECIALIZED EPIC PRO",
        "O que você ganha quando abre as torneiras da tecnologia trickle-down? Esse seria o Epic Pro."
        +"Uma cascata de desempenho que desce diretamente do Monte S-Works, o Epic Pro se beneficia do"
        +"design de suspensão mais eficiente que já criamos, sem mencionar um quadro que é tão leve"
        +"quanto o S-Works da geração anterior, ao mesmo tempo que oferece o mesmo incrivelmente"
        +"transferência eficiente de energia da atual nata da safra da Copa do Mundo.",
        "BICICLETA SPECIALIZED EPIC PRO.png",
        "MONTANHA",
        71990.00
    ));

    bicicletas.push(new Bicicleta(
        "BICICLETA SPECIALIZED EPIC S-WORKS WORLD CUP",
        "A Epic World Cup é a bicicleta de corrida XC mais rápida do mundo em percursos suaves a"
        +"moderadamente técnicos, graças à sua combinação incomparável de eficiência, controle e"
        +"leveza. O campeão mundial Christopher Blevins disse melhor: Esta coisa me dá tudo o que eu"
        +"poderia desejar de uma hardtail, além do controle e capacidade de suspensão total”. Para"
        +"criar esta máquina de velocidade, bastou uma abordagem de desenvolvimento totalmente"
        +"integrada, a invenção de um novo amortecedor radical e quatro décadas de experiência"
        +"vencedora em todo-o-terreno.",
        "BICICLETA SPECIALIZED EPIC S-WORKS WORLD CUP.png",
        "MONTANHA",
        114900.00
    ));

    return bicicletas;
}