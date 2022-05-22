const server = require("./socket")

const PORTA = process.env.PORT || 3333;

server.use((error, req, res, next) => {
    console.log('Erro não tratado', erro);
    res.sendStatus(500);
})

server.listen(PORTA, function () {
    console.log(`Servidor do site está rodando rodando: ${process.env.APP_URL} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});