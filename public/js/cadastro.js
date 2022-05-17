function cadastrar() {

    var nomeVar = iptNome.value;
    var emailVar = iptEmail.value;
    var senhaVar = iptSenha.value;
    var confirmacaoSenhaVar = iptConfirmaSenha.value;

    if (emailVar == "" || senhaVar == "" || nomeVar == "") {
        alert("Insira seus dados!")
    } else if (!emailVar.includes("@") || !emailVar.includes(".com") || emailVar == "@.com") {      
        alert("Insira um email válido")
    } else if(!senhaVar.length >= 7){
        alert("A senha deve ter no mínimo 7 caracteres")
    }else if(senhaVar !== confirmacaoSenhaVar){
        alert("As senhas não coincidem")
    }

    fetch('/usuarios/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        })
    }).then(function (resposta) {
        let button = document.querySelector(".cadastrar");
        button.disabled = true;
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "../login.html";
            button.disabled = true;
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;   
}