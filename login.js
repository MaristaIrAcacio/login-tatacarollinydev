//Bloco de verificação de preenchimento de campos

function Verificar(){
    let user = document.getElementById('Email').value;
    let senha = document.getElementById('Senha').value;

    if(!user || !senha){
        alert("Campos de preenchimento obrigatorio. Favor preencher!");
    } else{
        alert("Campos preenchidos com sucesso!");
    }
}