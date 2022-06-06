const modalDash = {
    open(fk_computador, hostname) {
        document.querySelector(".modal_dash").classList.add("active");
        tittle_modal.innerHTML = `HOSTNAME: ${hostname}`
        dashTop.style.display = 'flex'
        dashBottom.style.display = 'flex'
        dashAdd.style.display = 'none'
        modalDev.style.maxWidth = '75%'
        modalDev.style.maxHeight = '90%'
        counterIndex = 0;
        window?.chart1 && window.chart1.destroy();
        window?.chart2 && window.chart2.destroy();
        window?.chart3 && window.chart3.destroy();
        renderizarGraficoCpu(fk_computador);
        renderizarGraficoRam(fk_computador);
        renderizarGraficoDisco(fk_computador);
    },
    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_dash").classList.remove("active");
    },
    buscaDevices(idEmpresa) {
        document.querySelector(".modal_dash").classList.add("active");
        tittle_modal.innerHTML = "ADICIONAR DEVICE"
        dashTop.style.display = 'none'
        dashBottom.style.display = 'none'
        dashAdd.style.display = 'flex'
        modalDev.style.maxWidth = '50%'
        modalDev.style.maxHeight = '57%'

        fetch("/empresa/computadores/" + idEmpresa, {
            method: "GET"
        }).then(function (resposta) {

            if (resposta.ok) {
                resposta.json().then((json) => {
                    console.log(json);
                    devicesFuncAdicionar = json
                });
            } else {
                console.log("Houve um erro ao tentar realizar a obtencao de dados!");
                resposta.text().then((texto) => {
                    console.error(texto);
                });
            }

        }).catch(

            (erro) => {
                console.log(erro);
                alert('Erro ao adicionar device')
            }

        )

    },
    verificaSeAdiciona(patrimonioAdd, hostnameAdd, salaAdd, devicesAdd) {

        if (patrimonioAdd != null && hostnameAdd != null) {
            const deviceJaExiste = devicesAdd.find(elemento =>
                elemento.patrimonio == patrimonioAdd && elemento.hostname == hostnameAdd
            );
            if (deviceJaExiste) {
                fetch("/empresa/computador/reativardevice/", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        patrimonioDeviceServer: patrimonioAdd,
                        hostnameDeviceServer: hostnameAdd,
                    })
                }).then(function (resposta) {
                    if (resposta.ok) {
                        alert("Computador adicionado com sucesso!")
                        window.location.reload()
                    } else {
                        console.log("Houve um erro ao tentar adicionar a Computador");
                        resposta.text().then(texto => {
                            console.error(texto);
                        });
                    }
                }).catch(function (erro) {
                    console.log(erro);
                })
            } else {
                fetch('/empresa/computador/adicionardevice', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        patrimonioServer: patrimonioAdd,
                        hostnameServer: hostnameAdd,
                        salaServer: salaAdd,
                        empresaServer: sessionStorage.ID_EMPRESA,
                    })
                }).then(function (resposta) {
                    if (resposta.ok) {
                        window.alert("Cadastro realizado com sucesso!");
                        window.location.reload()
                    } else {
                        throw ("Houve um erro ao tentar adicionar o device!");
                    }
                }).catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });

            }
        } else {
            alert('Dados incorretos!')
        }
    }
};

const modalEdit = {
    open(idComputador, patrimônio, hostname) {
        //Open modal;
        // add class active to modal;
        idComputadorFuncAlterar = idComputador
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = `Editar Device ${hostname}`;
        icone_modal.innerHTML = '<i class="fi fi-rs-computer"></i>';

        container1.innerHTML = `
        <h2>Patrimônio</h2>
        <h3>${patrimônio}</h3>
        `

        container2.innerHTML = `
        <h2>Hostname</h2>
        <h3>${hostname}</h3>
        `

        btn_edit.style.display = 'block';
        btn_delete.style.display = 'none';
        btn_addSala.style.display = 'none';
        btn_deleteSala.style.display = 'none';
    },

    alterarSala(idComputador, idSala) {
        fetch("/empresa/computador/alterarsala/" + idComputador, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                salaServer: +idSala,
            })
        }).then(
            (res) => {
                if (res.ok) {
                    alert('Sala alterada com sucesso')
                } else {
                    alert('Falha ao alterar sala')
                }
            }
        ).catch(
            (erro) => {
                console.log(erro);
                alert('Erro ao alterar sala')
            }
        )
    },

    openDelete() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = "Excluir Device";
        icone_modal.innerHTML = '<i class="fi fi-rs-computer"></i>';
        container1.innerHTML = `<h2>Patrimônio</h2>
        <input placeholder="Digite o patrimônio da máquina" type="text" />`
        container2.innerHTML = ``
        container3.innerHTML = ``


        btn_edit.style.display = 'none';
        btn_delete.style.display = 'block';
        btn_addSala.style.display = 'none';
        btn_deleteSala.style.display = 'none';
    },

    openAddSala() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = "Adicionar Sala";
        icone_modal.innerHTML = '<i class="fi fi-rr-school"></i>';
        container1.innerHTML = `<h2>Nome da Sala</h2>
        <input placeholder="Nome" type="text" />`
        container2.innerHTML = `<h2>Andar</h2>
        <select name="" id="">
                                <option value="null">Escolha um andar</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                </select>`
        container3.innerHTML = ``

        btn_edit.style.display = 'none';
        btn_delete.style.display = 'none';
        btn_addSala.style.display = 'block';
        btn_deleteSala.style.display = 'none';
    },

    openDeleteSala() {
        //Open modal;
        // add class active to modal;
        document.querySelector(".modal_edit").classList.add("active");
        tittle_modal_edit.innerHTML = "Excluir Sala"
        icone_modal.innerHTML = '<i class="fi fi-rr-school"></i>';
        container1.innerHTML = `<h2>Nome da Sala</h2>
        <input placeholder="Nome" type="text" />`
        container2.innerHTML = ``
        container3.innerHTML = ``

        btn_edit.style.display = 'none';
        btn_delete.style.display = 'none';
        btn_addSala.style.display = 'none';
        btn_deleteSala.style.display = 'block';
    },

    close() {
        //Close modal;
        //remove class active to modal;
        document.querySelector(".modal_edit").classList.remove("active");
    },
};

function deleteDevice(idComputador) {
    const resposta = window.confirm('Deseja deletar esse device?')
    if (resposta) {
        fetch("/empresa/computador/" + idComputador, {
            method: "DELETE"
        }).then(
            (res) => {
                if (res.ok) {
                    alert('Device deletado com sucesso')
                    window.location.reload()
                } else {
                    alert('Falha ao deletar device')
                }
            }
        ).catch(
            (erro) => {
                console.log(erro);
                alert('Falha ao deletar device')
            }
        )
    }
}