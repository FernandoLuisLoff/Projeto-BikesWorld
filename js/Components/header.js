const headerComponent = `<header class="position-absolute top-0 start-50 translate-middle-x w-75 rounded-bottom bg-dark bg-gradient">
    <div class="d-flex flex-row text-center h-100 w-100">
        <div class="col-2">
            <img class="img-fluid" src="./img/Logo.png" alt="Logo">
        </div>
        <div class="col-8">
            <div class="input-group h-75">
                <span class="input-group-text input-search fs-2"><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></span>
                <input type="text" class="form-control input-search" placeholder="Pesquisar...">
            </div>
        </div>
        <div class="col-2">
            <button id="btn-carrinho" class="btn btn-transparent btn-icon position-relative" type="button" data-bs-toggle="modal" data-bs-target="#modal-carrinho">
                <i class="fa-solid fa-cart-shopping fs-1"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    <span id="quantidade-badge">0</span>
                </span>
            </button>
            <button id="btn-usuario" class="btn btn-transparent btn-icon" type="button" data-bs-toggle="modal" data-bs-target="`+modalUsuario()+`"><i class="fa-solid fa-user fs-1"></i></button>
        </div>
    </div>
</header>`;

function modalUsuario() {
    if (localStorage.getItem('usuario') == null) {
        return "#modal-cadastro";
    } else {
        return "#modal-usuario";
    }
}

export { headerComponent };