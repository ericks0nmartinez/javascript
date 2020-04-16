var adicionar = document.querySelector("#adicionar-paciente");

adicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var pacienteForm = obtemInformacoesForm(form);
    console.log(pacienteForm)

    var pacienteTr = montaTr(pacienteForm);

   if( !validaPaciente(paciente)){
       console.log("Paciente invalido");
       return;
   }

    var tablePaciente = document.querySelector("#tabela-pacientes");
    
    tablePaciente.appendChild(pacienteTr);
    form.reset();
});


function obtemInformacoesForm(form) {
  
    return paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
   }
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild( montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado,classe) {
    
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}