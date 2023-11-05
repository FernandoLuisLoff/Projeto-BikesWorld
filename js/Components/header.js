const headerComponent = `<header class="position-absolute top-0 start-50 translate-middle-x w-75 rounded-bottom bg-dark bg-gradient">
    <div class="d-flex flex-row text-center h-100 w-100">
        <div class="col-2">
            <img class="img-fluid" src="./img/Logo.png" alt="Logo">
        </div>
        <div class="col-8">
            <div class="input-group h-75">
                <span class="input-group-text input-search fs-2"><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" class="form-control input-search" placeholder="Pesquisar...">
            </div>
        </div>
        <div class="col-2 fs-1">
            <a><i class="fa-solid fa-cart-shopping"></i></a>
            <a><i class="fa-solid fa-user"></i></a>
        </div>
    </div>
</header>`;

export { headerComponent };