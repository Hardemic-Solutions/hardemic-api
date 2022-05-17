## Instruções

Execute o comando `cp .env.example .env` para criar um arquivo .env a partir do exemplo

## Uso da AWS S3 para armazenamento das rotinas

- Gere as secrets da AWS no serviço de IAM
- preencha o arquivo .env com as informações
- preencha a variável de ambiente 'STORAGE_TYPE' com o valor 's3'

## Uso do servidor local para armazenamento das rotinas

- preencha a variável de ambiente 'STORAGE_TYPE' com o valor 'local'

## Uso da aplicação

- Instale as dependências do projeto com o comando `npm install` ou `yarn`

- Execute a aplicação com o comando `npm start` ou `yarn start`

## Uso da aplicação em desenvolvimento

Execute a aplicação com o comando `npm run dev` ou `yarn dev`
