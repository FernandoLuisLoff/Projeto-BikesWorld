document.querySelectorAll(".btn-desconectar").forEach(function(element) {
    element.addEventListener("click", function() {
        localStorage.removeItem('usuario');
        $('#modal-usuario').modal('hide');
        $("#btn-usuario").attr("data-bs-target", "#modal-cadastro");
    })
})

function preencheDadosUsuario() {
    if (localStorage.getItem('usuario') != null) {
        const usuario = JSON.parse(localStorage.getItem('usuario'));

        document.querySelector('#nome-usuario').innerHTML = usuario.nome;
        document.querySelector('#cpf-usuario').innerHTML = usuario.cpf;
        document.querySelector('#email-usuario').innerHTML = usuario.email;
        document.querySelector('#telefone-usuario').innerHTML = usuario.telefone;
        document.querySelector('#cidade-usuario').innerHTML = usuario.cidade;
        document.querySelector('#estado-usuario').innerHTML = usuario.estado;
        document.querySelector('#rua-usuario').innerHTML = usuario.rua;
        document.querySelector('#numero-usuario').innerHTML = usuario.numero;
        document.querySelector('#bairro-usuario').innerHTML = usuario.bairro;
    }
}

export { preencheDadosUsuario }