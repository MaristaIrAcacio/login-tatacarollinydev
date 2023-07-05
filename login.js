//Bloco de verificação de preenchimento de campos

function Verificar(){
    let user = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    if(!user || !senha){
        alert("Campos de preenchimento obrigatorio. Favor preencher!");
    } else{
        window.location.href = "aula2.html";
    }

}

var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
    
        criaLista()
    }
}

function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome usuario</th><th>Ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success'onclick=''>Editar</button><button class='btn btn-danger'onclick=''>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    };
}; 