Simplificar o Respondi
O formulário deve possuir 3 tipos de campos, mas pode ter inúmeras perguntas
- Campo de texto simples
- Campo de e-mail
- Campo de múltipla escolha

Estilização
- Font do Google Fonts
- Ícones do Font Awesome
- Frutas são Emoji

API
Os dados do form vem da API:
 GET | https://65665153eb8bb4b70ef3297d.mockapi.io/api/forms

 Envio da Resposta
 O Respondi salva preenchimentos abandonados, por isso, 
 você deve enviar um POST com os dados da resposta a cada campo preenchido. 
 Você pode criar uma URL de testes no site https://webhook.site/ e enviar os dados pra lá.

Requisitos
- Vue2 ou Nuxt2
- Criar um repositório público sem referências ao Respondi
- Adicionar um ReadMe no projeto com instruções pra rodar pela primeira vez
- Desenvolver parte visual do zero, sem libs de componententes prontas
- Pode usar libs para outras funções que não sejam estilização
- Usar SCSS

Prioridades
- Funcionar

Avaliado em Ordem
- Funcionalidades dos campos de pergunta/finais
- Funcionalidade das lógicas
- Validação de dados
- Responsividade da interface
- Organização do Projeto
- Fidelidade visual com layout base

Perfil Pleno ou Sênior
Se você procura uma vaga nesse perfil, foque em demostrar
que a arquitetura do projeto consegue evoluir bem no futuro. 
Como seu projeto vai se comportar quando forem 50 tipos de campos diferentes, 
com validações customizadas, e cada formulário tiver centenas de perguntas? 
- Dica: Nos mostre através de uma documentação simples como evoluir o projeto no futuro.

O que não vamos avaliar
- Componentes secundários (barra de progresso e navegação)
- Tratamentos de erros genéricos da API
- Conteúdo das chamadas de POST/PUT das respostas (mas envie algo de exemplo)
- Pixel Perfect na UI

Diferenciais
- Testes automatizados (nós usamos o Cypress)
- Documentação
- Deploy em uma infraestrutura de sua preferência (Heroku, Netlify, etc)


Consumindo a API
fields: tem os dados dos campos
- Campo de múltipla escolha
- - Possui items, cada item representa uma escolha possível
- - Possui logic, que determina e salva todas as opções de lógica possível baseado no id que a pessoa vai pular
- - Estrutura -> logic.actions[0].data.enter, logic.actions[0].data.exit

- Campo de thankyou
- - parear o logic.actions[0].data.exit com o slug do thankyou

style: cores relacionadas ao formulário
- bgColor -> cor de fundo dos input
- color -> cor do formulário (botões)
- questionColor -> cor da pergunta