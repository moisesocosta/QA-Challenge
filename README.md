# QA-Challenge: Testando a API de Piadas

## Sobre o Projeto
Sua missão é testar a API de piadas que a equipe de desenvolvimento acaba de lançar. Essa API fornece piadas aleatórias com um setup e uma punchline. Sua tarefa é garantir que tudo esteja funcionando corretamente.

### Endpoint Base: 
https://official-joke-api.appspot.com/random_joke
### Exemplo de Resposta:
```json
{
  "type": "general",
  "setup": "How good are you at Power Point?",
  "punchline": "I Excel at it.",
  "id": 128
}
```


## O que você precisa fazer

### Planejamento dos Testes
- Escreva um plano de testes considerando os principais aspectos que precisam ser verificados, como o formato da resposta, tipos de dados, performance, etc.
- Identifique casos de teste importantes, como validar os campos da resposta, testar limites, verificar a unicidade dos IDs.

### Automação e Execução
- Crie uma suíte de testes automatizados que faça 100 requisições e verifique se todos os IDs são únicos, se os tipos de dados estão corretos, se nenhum campo está vazio.
- Desenvolva testes de carga simulando 10 usuários fazendo requisições simultâneas. Meça o tempo de resposta e valide a consistência das respostas.
- Implemente validações adicionais, como verificar o formato JSON correto e a presença de todos os campos obrigatórios.

### Documentação e Relatórios
- Documente os bugs encontrados, incluindo descrição detalhada, passos de reprodução, evidências e severidade.
- Crie um relatório de teste com métricas coletadas, como tempo médio de resposta, taxa de sucesso, distribuição dos tipos de piadas e tamanho médio das respostas.
- Analise os resultados, identifique padrões, aponte possíveis melhorias e riscos.

## O que você precisa saber
- Utilize uma ferramenta de automação de testes de API, como Postman, REST Assured ou Python Requests.
- Implemente logs adequados para acompanhar a execução dos testes.
- Gere relatórios automatizados para facilitar a análise.

## O que vamos Avaliar
- Sua capacidade de planejar testes abrangentes.
- A qualidade do código de automação.
- Sua habilidade em identificar problemas na API.
- A análise detalhada dos resultados dos testes.
- A clareza e organização da documentação.

## Entregáveis
1. Código fonte dos testes automatizados.
2. Relatório de execução dos testes.
3. Documentação dos casos de teste.
4. Análise dos resultados.
5. Arquivo README com instruções, dependências e premissas.

Espero que esse desafio ajude você a mostrar suas habilidades de QA. Fique à vontade para me perguntar qualquer coisa no email leonardo.hably@devvo.com.br
