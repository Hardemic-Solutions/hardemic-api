window.onload = function () {
  buscarChamadosBanco();
};

moment.tz.setDefault("America/Sao_Paulo");
var momentData = moment().diff(moment(dataLogs));

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

function alterarTicket(idChamado) {
  fetch("/empresa/" + sessionStorage.ID_EMPRESA + "/chamados/" + idChamado, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: selectTicket.value
    })
  })
    .then(function (res) {
      if (res.ok) {
        location.reload();
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });
}

function renderizarChamados(chamados) {
  const rowDevices = document.querySelector(".tb_tickets");

  chamados.forEach((item, indice) => {

    if (item.status == "PENDENTE") {

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
                ${item.nome_sala}
              </h3>
            </div>
            <div class="box_info_devices">
              <h3>
                ${item.descricao}
              </h3>
            </div>
            <div class="box_info_devices">
              <select id="selectTicket" onchange="alterarTicket(${item.id_chamado})">
                <option selected="selected" value="PENDENTE">Pendente</option>
                <option value="PROGRESSO">Progresso</option>
                <option value="CONCLUIDO">Concluído</option>
              </select>
            </div>
            <div onclick="buscarInfoHardware(${item.id_computador}, ${item.fk_sala})" class="box_info_devices">
              <h3>
                Detalhes
              </h3>
              <i class="fi fi-rr-info"></i>
            </div>
          </div>
            `;
    } else if (item.status == "PROGRESSO") {

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
                ${item.nome_sala}
              </h3>
            </div>
            <div class="box_info_devices">
              <h3>
                ${item.descricao}
              </h3>
            </div>
            <div class="box_info_devices">
              <select id="selectTicket" onchange="alterarTicket(${item.id_chamado})">
                <option selected="selected" value="PROGRESSO">Progresso</option>
                <option value="PENDENTE">Pendente</option>
                <option value="CONCLUIDO">Concluído</option>
              </select>
            </div>
            <div onclick="buscarInfoHardware(${item.id_computador}, ${item.fk_sala})" class="box_info_devices">
              <h3>
                Detalhes
              </h3>
              <i class="fi fi-rr-info"></i>
            </div>
          </div>
            `;
    } else if (item.status == "CONCLUIDO") {

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
                ${item.nome_sala}
              </h3>
            </div>
            <div class="box_info_devices">
              <h3>
                ${item.descricao}
              </h3>
            </div>
            <div class="box_info_devices">
              <select id="selectTicket" onchange="alterarTicket(${item.id_chamado})">
                <option selected="selected" value="CONCLUIDO">Concluído</option>
                <option value="PROGRESSO">Progresso</option>
                <option value="PENDENTE">Pendente</option>
              </select>
            </div>
            <div onclick="buscarInfoHardware(${item.id_computador}, ${item.fk_sala})" class="box_info_devices">
              <h3>
                Detalhes
              </h3>
              <i class="fi fi-rr-info"></i>
            </div>
          </div>
            `;
    }
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

  fetch("http://localhost:3333/empresa/logs/" + InfoHardware[0].fk_computador)
    .then(res => {
      res.json().then(json => {
        console.log("JSON", json)
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
          Local <h3>${InfoHardware[0].nome_sala} </h3>
        </div>
        <div class="column_left">
          SO <h3>${InfoHardware[0].SO} </h3>
        </div>
        <div class="column_left">
          Ram <h3>${InfoHardware[0].ram + "MB"} </h3>
        </div>
        <div class="column_left">
          Disco <h3>${InfoHardware[0].armazenamento + "MB"} </h3>
        </div>
      </div>
        <div class="desc_right">
          <div class="tittle_right">Logs</div>
          <div class="logs_device">
          
           </div>
        </div>
    `;
        json.forEach(log => {
          console.log('log', log)
          document.querySelector('.logs_device').innerHTML += `
                <div>
                  <div>[${moment(log.data_log).format('DD/MM/YYYY h:mm:ss')}] RAM: ${log.ram}MB disponível</div>
                  <div>[${moment(log.data_log).format('DD/MM/YYYY h:mm:ss')}] CPU: ${log.cpu}%</div>
                  <div>[${moment(log.data_log).format('DD/MM/YYYY h:mm:ss')}] DISCO: ${log.disco}MB disponível</div>
                </div>
                `
        })
      })
    })





}