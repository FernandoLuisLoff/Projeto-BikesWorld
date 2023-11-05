document.querySelectorAll(".type-bicycle").forEach(function(element) {
    element.addEventListener("click", function(event) {
        changeTypeBicycle(event.target.id);
    });
});

function changeTypeBicycle(idButton) {
    // Remove a classe active de todos os botões que possuam classe type-bicycle
    let typesBicycleForClass = document.querySelectorAll(".type-bicycle");
    typesBicycleForClass.forEach(function(element) {
        element.classList.remove("active");
    });

    // Atribui a classe active ao botão que possui o id igual ao idButton
    let typeBicycleForId = document.getElementById(idButton);
    typeBicycleForId.classList.add("active");

    // Remove a classe active de todos os containers que possuam classe type-bicycle
    let typesBicycleContainerForClass = document.querySelectorAll(".type-bicycle-container");
    typesBicycleContainerForClass.forEach(function(element) {
        element.classList.remove("active");
    });

    // Atribui a classe active ao container que possui a classe igual a type-bicycle- + idButton
    let typeBicycleContainer = document.querySelectorAll(".type-bicycle-"+idButton);
    typeBicycleContainer.forEach(function(element) {
        element.classList.add("active");
    });
}