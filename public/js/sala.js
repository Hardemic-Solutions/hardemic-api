function cadastrarSala() {

    var nomeSalaVar = iptNomeSala.value;

    if (nomeSalaVar == "") {
        alert("Insira seus dados!")
    }

    fetch('/usuarios/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeSalaServer: nomeSalaVar
        })
    }).then(function (resposta) {
        let button = document.querySelector(".cadastrar");
        button.disabled = true;
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro da sala realizado com sucesso!");
            button.disabled = true;
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro da sala!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;   
}