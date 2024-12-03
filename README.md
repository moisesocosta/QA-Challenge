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

## Documentação e Planejamento de testes

Os testes deste projeto foram planejados, organizados e documentados utilizando a ferramenta Qase. Abaixo, você encontrará mais detalhes sobre o planejamento e como acessar a documentação.

**Planejamento**

Os casos de teste foram organizados em suítes correspondentes aos endpoints da API. Cada caso de teste possui os seguintes detalhes:

- Gravidade: Classificação da importância do caso de teste.
- Prioridade: Ordem de execução com base na criticidade.
- Comportamento: Classificação entre cenários positivos e negativos.
- Camada: Especifica que os testes são na camada de API.

**Acessando os Casos de Teste**

Para visualizar a documentação completa, acesse o repositório no Qase: [Documentação dos Testes no Qase](https://drive.google.com/file/d/1GnF72ECrZIi5YRKza4IXhKi18NnDMxta/view?usp=drive_link), [Relatório de execução](https://drive.google.com/file/d/1d91YmhbhYFMb3fASYlXwGEwKVPz_4d6b/view?usp=drive_link), [Defects](https://docs.google.com/spreadsheets/d/1XdUgb6gVWAD2cliHhQwt5kcQrshvi54qdFZARsPHzos/edit?usp=drive_link) e [Métricas](https://docs.google.com/spreadsheets/d/1Y7BqS2SC1De1cAdnsap0shr07LRWWy9sCNeaGo1zRrE/edit?usp=drive_link)
