# Gamefication QA (bootcamp)

## Como rodar os teste de Api e Contrato
1. Atualizando o projeto, execute o comando:
```
npm install --safe
```
2. Vamos instalar o servidor Json-server:
```
npm install -g json-server
```
3. Agora vamos rodar o servidor Json-Server:
```
json-server --watch info.json
```
O resultado será esse :
```
\{^_^}/ hi!

  Loading info.json
  Done

  Resources
  http://localhost:3000/users

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```
## Executando os testes

Abra uma nova aba e digite o comando abaixo:
```
npm run test
```

## Usando lint no código
```
npm run lint
```

