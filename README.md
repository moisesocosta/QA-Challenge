# QA-Challenge: Testando a API de Piadas

## Sobre o projeto

Este projeto tem como objetivo testar a API pública de piadas Official Joke API. Essa API fornece piadas aleatórias com `setup` (introdução) e `punchline` (desfecho).

Os testes realizados aqui garantem que a API funciona corretamente, validando aspectos como:

- Formato das respostas.
- Consistência de dados.
- Desempenho sob carga.
- Conformidade com os requisitos esperados.

**Endpoints:**

- /random_joke: Retorna uma única piada aleatória.
- /random_ten: Retorna uma lista de 10 piadas aleatórias.
- /jokes/random: Retorna uma única piada aleatória (mesma funcionalidade que /random_joke).
- /jokes/ten: Retorna uma lista de 10 piadas aleatórias (mesma funcionalidade que /random_ten).

## Pré-requisitos

É necessário ter o Node.js e o npm instalados para executar este projeto.

> Eu usei as versões `v20.14.0` e `10.8.1` do Node.js e do npm, respectivamente. Sugiro que você use as mesmas versões ou versões posteriores.

## Instalação

Execute o `npm install` (ou `npm i` para a versão curta) para instalar as dependências do desenvolvimento.

## Testes Implementados

1. Validação de Respostas: Verificação da presença dos campos obrigatórios (type, setup, punchline, id) e confirmação dos tipos de dados retornados.

2. Testes de Carga: Simulação de 10 conexões simultâneas para avaliar o desempenho da API.

3. Consistência de Dados: Comparação entre os endpoints /random_joke e /jokes/random.

4. Testes de Limites: Validação de dados malformados ou ausentes.

## Testes

Execute `npm test` (ou `npm t` para a versão curta) para executar o teste no modo headless.

Ou execute `npm start` para abrir o Cypress no modo interativo.
