const server = require("./socket")

const PORTA = process.env.NODE_ENV === "desenvolvimento" ? 3333 || 8080;

server.listen(PORTA, function () {
    console.log(`Servidor do site está rodando rodando: ${process.env.APP_URL} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});
