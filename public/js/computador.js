function cadastrarComputador() {

    const patrimonioServer = iptPatrimonio.value;
    const hostnameServer = iptHostname.value;
    // const salaServer = iptSala.value;


    if (patrimonioServer == "" || hostnameServer == "") {
        alert("Insira seus dados!")
    }

    fetch('/instituicao/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patrimonioServer,
            hostnameServer
            // salaServer
        })
    }).then(function (resposta) {
        let button = document.querySelector(".cadastrar");
        button.disabled = true;
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro do computador realizado com sucesso!");
            button.disabled = true;
        } else {
            throw ("Houve um erro ao tentar realizar o cadastro do computador!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;   
}
function alterarMaquina() {
    const patrimonioNovoServer = iptPatrimonioNovo.value;
    const hostnameNovoServer = iptHostnameNovo.value;
    // const salaNovaServer = iptSalaNova.value;


    fetch("/instituicao/alterarMaquina/" + sessionStorage.ID_COMPUTADOR, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            patrimonioNovoServer,
            hostnameNovoServer
            // salaNovaServer
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                alert("Computador alterado com sucesso!")


            });

        } else {

            console.log("Houve um erro ao tentar alterar a Computador");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;

}

function deletarComputador() {

    fetch("/instituicao/" + sessionStorage.ID_COMPUTADOR, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO deletar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                alert("Computador deletado com sucesso! ")


            });

        } else {

            console.log("Houve um erro ao tentar deletar o computador");

            resposta.text().then(texto => {
                console.error(texto);
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}