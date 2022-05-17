const app = require("./app");
const http = require("http");
const { emit } = require("process");
const Server = require("socket.io").Server;

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let socketconectados = 0;
const javasockets = [];
io.on("connection", function (socket) {
  // console.log(`socket conectado: ${socket.id}`);

  // socket.emit("pegar_dados");

  socket.on("pegar_dados", (hostname) => {
    javasockets.push({
      hostname,
      id: socket.id
    });
    socketconectados++;
    socket.broadcast.emit("followjava", hostname);
    socket.broadcast.emit("exibirDadosConectados", socketconectados);
    console.log(`quantidade de sockets conectados:${socketconectados}`);
  });
  io.emit("exibirDadosConectados", socketconectados);
  console.log(`quantidade de sockets conectados:${socketconectados}`);

  socket.on("problema", function (banco) {
    console.log("problema", banco);
    socket.broadcast.emit("problema", banco); //update do banco e chamada do banco(talvez uma model)
  });

  socket.on("disconnect", function (desmatch) {
    const device = javasockets.find(javasocket => {
      return javasocket.id === socket.id

    })
    console.log("device", device);
    if (device) {
      console.log(`o device: ${device.hostname} foi desconectado`)
      io.emit("unfollowjava", device.hostname);
      socketconectados--;


      console.log(`quantidade de sockets conectados:${socketconectados}`);

      io.emit("exibirDadosConectados", socketconectados);

    }


  });

});

module.exports = httpServer;
