const app = require("./app");
const http = require("http");
const Server = require("socket.io").Server;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let socketconectados = 0;
let javasockets = [];
io.on("connection", function (socket) {
  console.log(`socket conectado: ${socket.id}`);

  socket.on("dadosAtualizados", () => {
    io.emit("dadosAtualizados", javasockets);
  })

  socket.on("pegar_dados", (dados) => {
    javasockets.push({ ...dados, id: socket.id });

    socketconectados++;
    socket.broadcast.emit("followjava", dados);
    console.log("Device " + dados.hostname + " conectado!")
    socket.broadcast.emit("exibirDadosConectados", javasockets);
    console.log(`quantidade de sockets conectados:${javasockets.length || 0}`);
  });
  io.emit("exibirDadosConectados", javasockets);
  console.log(`quantidade de sockets conectados:${javasockets.length || 0}`);

  socket.on("problema", function (problema) {
    console.log("problema", problema);
    socket.broadcast.emit("problema", problema); //update do banco e chamada do banco(talvez uma model)
  });

  socket.on("disconnect", function (desmatch) {
    console.log(`socket: ${socket.id} desconectado!`)

    const device = javasockets.find(javasocket => {
      return javasocket.id === socket.id
    })

    console.log('device', device)

    if (device) {
      io.emit("unfollowjava", device.hostname);

      console.log(`o device ${device.hostname} desconectado`)
      javasockets = javasockets.filter(javasocket => {
        return javasocket.id !== socket.id
      })

      console.log(`quantidade de sockets conectados:${javasockets.length}`);

      io.emit("exibirDadosConectados", javasockets);
    }


  });

});

module.exports = httpServer;
