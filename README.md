# Form-Generator

Esse projeto foi construído utilizando Vue 2, Vuex, SCSS e Cypress para testes E2E

O objetivo é construir um formulário dinâmico baseado com os dados retornados de uma API, onde são informados nome, descrição e até as cores a serem utilizadas.

Optei por não usar uma lib de validação para o formulário, então implementei as validações na mão.

![image](https://github.com/user-attachments/assets/af09684d-9ee7-4c61-8402-01c8ed1f7204)
![image](https://github.com/user-attachments/assets/93d6fa2b-71de-4686-a387-e6f939733049)
![image](https://github.com/user-attachments/assets/1cc1b8b6-0078-4a1d-91c2-562b6f90a302)
![image](https://github.com/user-attachments/assets/1de32097-cab4-4922-8623-1698dd7ea30b)


Para acessar a versão no ar, [clique aqui ](https://thiago-saraiva-form-generator.netlify.app/)

## Rodando o projeto
Para iniciar o projeto, é necessário ter o node instalado, recomendo a versão 20.10
Após a instalação do node, basta fazer um clone no projeto

```
git clone https://github.com/ThiagoMartinsSaraiva/form-generator
```
Após o clone, é necessário instalar as dependências recomendo usar o NPM devido aos conflitos de lib

```
npm install --force
```
Após instalar as dependências, podemos iniciar a aplicação ou rodar os testes

Para iniciar a aplicação

```
npm run serve
```

Para rodar os testes

```
npm run test:e2e
```

