const AWS = require('aws-sdk');
const rotinaModel = require('../models/rotinaModel')
const promisify = require('util').promisify;
const fs = require('fs');
const path = require('path')

module.exports = {
  async index(req, res) {
    const idEmpresa = req.params.idEmpresa;

    if (!idEmpresa) {
      res.status(400).send('Empresa não informada')
    } else {
      rotinaModel.index(idEmpresa).then(
        function (resultado) {
          res.json(resultado.map(({ id_rotina, nome_rotina, nome_arquivo, caminho_rotina, descricao }) => ({
            id: id_rotina,
            nome_rotina,
            descricao: descricao ?? '',
            nome_arquivo,
            caminho_rotina: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${caminho_rotina}`,
          })));
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o listar! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );


    }
  },
  async show(req, res) {
    const idEmpresa = req.params.idEmpresa;
    const idRotina = req.params.idRotina;

    if (!idEmpresa) {
      res.status(400).send('Empresa não informada')
    } else if (!idRotina) {
      res.status(400).send('Rotina não informada')
    } else {
      rotinaModel.show(idEmpresa, idRotina).then(
        function (resultado) {
          res.json(
            resultado.map(({ id_rotina, nome_rotina, caminho_rotina, descricao, nome_arquivo }) => ({
              id: id_rotina,
              nome_rotina,
              descricao: descricao ?? '',
              nome_arquivo,
              caminho_rotina: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${caminho_rotina}`
            })
            )[0]
          );
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o listar! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );


    }
  },
  async store(req, res) {
    //console.log(req.file)
    const idEmpresa = req.params.idEmpresa;
    const nome = req.body.nome;
    const descricao = req.body.descricao;

    if (!req.file.originalname) {
      res.status(400).send('Por favor informe um nome para o script')
    } else if (!req.file.key) {
      res.status(400).send('Não foi possível definir o caminho para o seu arquivo')
    } else if (!idEmpresa) {
      res.status(400).send('Empresa não informada')
    } else {
      rotinaModel.store(nome, req.file.key, idEmpresa, descricao, req.file.originalname).then(
        function (resultado) {
          console.log('req.file', req.file)
          if (process.env.STORAGE_TYPE === 's3') {
            res.json({
              nome_rotina: nome,
              descricao: descricao ?? '',
              nome_arquivo: req.file.originalname,
              caminho_rotina: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${req.file.key}`
            });
          } else {
            res.json({
              nome_rotina: nome,
              descricao: descricao ?? '',
              nome_arquivo: req.file.originalname,
              caminho_rotina: `${process.env.APP_URL}/files/${req.file.key}`
            });
          }

        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
    }


    // const fileName = req.files.fileName;
    // const s3 = new AWS.S3({ apiVersion: '2006-03-01', region: process.env.AWS_REGION });
    // const fileContent = fs.readFileSync(filePath);

    // const params = {
    //   Bucket: process.env.AWS_S3_BUCKET,
    //   Key: fileName,
    //   Body: fileContent,
    //   //ContentType: mimeType//geralmente se acha sozinho
    // };

    // const data = await s3.upload(params).promise();
    // return data.Location;
  },
  async update(req, res) {
    const idEmpresa = req.params.idEmpresa;
    const idRotina = req.params.idRotina;
    const nome = req.body.nome;
    const descricao = req.body.descricao;

    if (!idEmpresa) {
      res.status(400).send('Empresa não informada')
    } else if (!idRotina) {
      res.status(400).send('Rotina não informada')
    } else {
      rotinaModel.show(idEmpresa, idRotina).then(resultado => {
        if (resultado.length > 0) {
          if (process.env.STORAGE_TYPE === "s3") {
            const s3 = new AWS.S3();
            return s3
              .deleteObject({
                Bucket: process.env.AWS_S3_BUCKET,
                Key: resultado[0].caminho_rotina,
              })
              .promise()
              .then(() => {
                rotinaModel.update(nome, req.file.key, idEmpresa, descricao, req.file.originalname, idRotina).then(() => {
                  res.json({
                    nome_rotina: nome,
                    descricao: descricao ?? '',
                    nome_arquivo: req.file.originalname,
                    caminho_rotina: req.file.location
                  })
                }
                ).catch(
                  function (erro) {
                    console.log(erro);
                    console.log(
                      "\nHouve um erro ao deletar rotina! Erro: ",
                      erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                  }
                );
              })
              .catch((erro) => {
                console.error(erro)
                res.status(400).send('Erro ao Atualizar script')
              });
          } else {
            promisify(fs.unlink)(
              path.resolve(__dirname, "..", "..", "tmp", "uploads", resultado[0].caminho_rotina)
            );

            rotinaModel.update(nome, req.file.key, idEmpresa, descricao, req.file.originalname, idRotina).then(() =>
              res.json({
                nome_rotina: nome,
                descricao: descricao ?? '',
                nome_arquivo: req.file.originalname,
                caminho_rotina: 'http://localhost:3333/files/' + resultado[0].caminho_rotina
              })
            ).catch(
              function (erro) {
                console.log(erro);
                console.log(
                  "\nHouve um erro ao deletar rotina! Erro: ",
                  erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
              }
            );
          }

        } else {
          res.status(400).send("Rotina não encontrada!")
        }
      }).catch(erro => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao atualizar rotina! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      })


    }


  },
  async delete(req, res) {
    const idEmpresa = req.params.idEmpresa;
    const idRotina = req.params.idRotina;

    if (!idEmpresa) {
      res.status(400).send('Empresa não informada')
    } else if (!idRotina) {
      res.status(400).send('Rotina não informada')
    } else {

      rotinaModel.show(idEmpresa, idRotina).then(resultado => {
        if (resultado.length > 0) {
          const s3 = new AWS.S3();
          if (process.env.STORAGE_TYPE === "s3") {
            return s3
              .deleteObject({
                Bucket: process.env.AWS_S3_BUCKET,
                Key: resultado[0].caminho_rotina,
              })
              .promise()
              .then((response) => {
                rotinaModel.delete(idEmpresa, idRotina).then(() =>
                  res.status(204).send()
                ).catch(
                  function (erro) {
                    console.log(erro);
                    console.log(
                      "\nHouve um erro ao deletar rotina! Erro: ",
                      erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                  }
                );
              })
              .catch((response) => {
                res.status(400).send('Erro ao deletar script')
              });
          } else {
            return promisify(fs.unlink)(
              path.resolve(__dirname, "..", "..", "tmp", "uploads", resultado[0].caminho_rotina)
            );
          }

        } else {
          res.status(400).send("Rotina não encontrada!")
        }
      }).catch(erro => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao deletar rotina! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      })
    }

  }
}