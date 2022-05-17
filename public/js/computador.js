function cadastrarComputador() {

    var patrimonio = iptPatrimonio.value;
    var hostname = iptHostname.value;

    if (patrimonio == "") {
        alert("Insira seus dados!")
    }

    fetch('/usuarios/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patrimonioServer: patrimonio,
            hostnameServer: hostname
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