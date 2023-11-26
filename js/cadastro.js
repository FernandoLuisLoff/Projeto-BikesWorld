import { preencheDadosUsuario } from "./usuario.js";

const form = document.querySelector('#form-cadastro');
//console.log(form);

const inputs = document.querySelectorAll('.required'); //nodelist
console.log(inputs);

const spanErrors = document.querySelectorAll('.error-message');
//console.log(spanError);

const messages = {
    emptyfield: "Preencha o campo {field}",
    shortName: "O campo nome deve ter no mínimo 2 caracteres",
    invalidEmail: "Informe um endereço de email válido. "
}


function validateInput(input, spanError){
    let error = false;
    let message;
    if(input.value.trim() === ''){
        error=true;
        message = messages.emptyfield.replace('{field}', input.name)
    }else if(input.name==='nome' && input.value.length<2){
        error=true;
        message = messages.shortName;
    }else if(input.name==='email' && !/\S+@\S+\.\S+/.test(input.value)){
        error=true;
        message=messages.invalidEmail;
    }

    if (error) {//se o formulário contém erros
        spanError.textContent = message;
        spanError.style.display='block';
        spanError.classList.add('errofont');
        input.classList.add('erroinput');
        return true;
    } else {
        spanError.textContent = '';
        spanError.style.display='none';
        input.classList.remove('erroinput');
        return false;
    }
}

form.addEventListener('submit', (e)=>{
    debugger;
    let erros = 0;
    e.preventDefault();
    inputs.forEach(function(input, index){
        console.log(index);
        if(index < spanErrors.length){
            if (validateInput(input, spanErrors[index])) {
                erros++;                
            }
        }
    })
    if (erros == 0) {
        localStorage.setItem('usuario', JSON.stringify({
            "nome": document.querySelector('#name').value,
            "cpf": document.querySelector('#cpf').value,
            "email": document.querySelector('#email').value,
            "telefone": document.querySelector('#telefone').value,
            "cidade": document.querySelector('#cidade').value,
            "estado": document.querySelector('#estado').value,
            "rua": document.querySelector('#rua').value,
            "numero": document.querySelector('#numero').value,
            "bairro": document.querySelector('#bairro').value
        }));

        preencheDadosUsuario();

        $('#modal-cadastro').modal('hide');
        $("#btn-usuario").attr("data-bs-target", "#modal-usuario");
    }
})

inputs.forEach((input)=>{
    input.addEventListener('blur', function(){
        const errorMessage = input.nextElementSibling;
        validateInput(input, errorMessage);
    })
})