window.onload = function () {
  buscarChamadosBanco();
};

function showTickets() {
  screen_tickets.style.display = 'flex';
  screen_desc.style.display = 'none';
}

function meuPerfil() {
  window.location = 'perfil.html';
}

function buscarChamadosBanco() {

  fetch("/empresa/" + sessionStorage.ID_EMPRESA + "/chamados", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })

    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then((json) => {
          let chamados = []
          chamados = json
          renderizarChamados(chamados)
        });
      } else {
        console.log("Houve um erro ao tentar realizar a obtencao de dados!");
        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}

function renderizarChamados(chamados) {
  const rowDevices = document.querySelector(".tb_tickets");

  chamados.forEach((item, indice) => {

    rowDevices.innerHTML += `
          <div class="rows_devices">
            <div class="box_info_devices">
              <h3>
                ${item.id_chamado}
              </h3>
            </div>
            <div class="box_info_devices">
              <h3>
                ${item.hostname}
              </h3>
            </div>
            <div class="box_info_devices">
              <h3>
                ${item.descricao}
              </h3>
            </div>
            <div class="box_info_devices">
              <h3>
                ${item.status}
              </h3>
            </div>
            <div onclick="buscarInfoHardware(${item.id_computador}, ${item.fk_sala})" class="box_info_devices">
              <h3>
                Detalhes
              </h3>
              <i class="fi fi-rr-info"></i>
            </div>
          </div>
            `;
  });
};

function buscarInfoHardware(idComputador, local) {

  screen_tickets.style.display = 'none';
  screen_desc.style.display = 'flex';

  fetch("/empresa/computadores/info/" + idComputador, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })

    .then(function (resposta) {
      if (resposta.ok) {
        resposta.json().then((json) => {
          console.log(json)
          let InfoHardware
          InfoHardware = json
          renderizarInfoHardware(InfoHardware, local)
        });
      } else {
        console.log("Houve um erro ao tentar realizar a obtencao de dados!");
        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
};

function renderizarInfoHardware(InfoHardware, local) {
  const boxDesc = document.querySelector(".box_desc_device");

    boxDesc.innerHTML = `
      <div class="desc_header">
        <i onclick="showTickets()" class="fi fi-rr-arrow-left"></i>
        <h1>${InfoHardware[0].hostname}
        </h1>
        <h3>Device ${InfoHardware[0].fk_computador} </h3>
      </div>
      <div class="desc_left">
        <div class="column_left">
          Tipo <h3>Computador </h3>
        </div>
        <div class="column_left">
          Local <h3>${local} </h3>
        </div>
        <div class="column_left">
          SO <h3>${InfoHardware[0].SO} </h3>
        </div>
        <div class="column_left">
          CPU <h3>${InfoHardware[0].SO} </h3>
        </div>
        <div class="column_left">
          Ram <h3>${InfoHardware[0].ram} </h3>
        </div>
        <div class="column_left">
          Disco <h3>${InfoHardware[0].armazenamento} </h3>
        </div>
      </div>
        <div class="desc_right">
          <div class="tittle_right">Logs</div>
          <div class="logs_device">
        </div>
      </div>
    `;

}