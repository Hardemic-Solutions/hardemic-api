function alterarSenha() {
    var senhaNovaServer = ipt_senha_nova.value;
    var senhaNovaConfirmServer = ipt_senha_nova_confirm.value;
    var senhaAntigaServer = ipt_senha_antiga.value;

    if (senhaNovaServer !== senhaNovaConfirmServer) {
        alert("As senhas não conferem");
        return false;
    }

    fetch("/usuarios/alterarsenha/" + sessionStorage.ID_USUARIO, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            senhaNovaServer,
            senhaAntigaServer
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO atualizar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                alert("Senha alterada com sucesso! Faça o login novamente")

                setTimeout(function () {
                    window.location = "./login.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar alterar a senha");

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

function deletar() {

    fetch("/usuarios/" + sessionStorage.ID_USUARIO, {
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

                alert("Usuário deletado com sucesso! Faça o login com outro usuário")

                setTimeout(function () {
                    window.location = "./login.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar deletar o usuário");

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


function entrar() {
    // aguardar();

    var emailVar = iptEmail.value;
    var senhaVar = iptSenha.value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    // TODO: VERIFICAR AS VALIDAÇÕES QUE ELES ESTÃO APRENDENDO EM ALGORITMOS 
    if (emailVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        return false;
    }

    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome_usuario;
                sessionStorage.ID_USUARIO = json.Id_usuario;
                sessionStorage.PERMISSAO = json.permissao
                sessionStorage.ID_EMPRESA = json.fk_empresa;

                setTimeout(function () {
                    window.location = "../dashboard.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                alert(texto)
                // finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
        alert('Erro ao realizar o login! Contate um administrador do sistema')
    })

    return false;
}
