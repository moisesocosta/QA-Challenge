describe('Endpoint /random_ten', () => {
  it('Deve retornar exatamente 10 piadas', () => {
    cy.api('/random_ten').then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.be.an('array').with.length(10);
      body.forEach((joke) => {
        expect(joke).to.have.all.keys('type', 'setup', 'punchline', 'id');
        expect(joke.type).to.be.a('string');
        expect(joke.setup).to.be.a('string');
        expect(joke.punchline).to.be.a('string');
        expect(joke.id).to.be.a('number');
      });
    });
  });

  //Teste de Carga
  it('Simula 10 requisições simultâneas', () => {
    const requests = Cypress._.times(10, () => cy.api('/random_ten'));
    cy.wrap(Promise.all(requests)).then((responses) => {
      // Verifica se todas as respostas não são nulas
      responses.forEach((response, index) => {
        expect(response, `Requisição ${index + 1} falhou`).to.not.be.null;
        if (response) {
          const { status } = response;
          expect(status).to.eq(200);
        }
      });
    });  
  });

  //Validação de tipos e formatos
  it('Valida os tipos de dados em todas as piadas da lista', () => {
    cy.api('/random_ten').then(({ body }) => {
      body.forEach((joke) => {
        expect(joke.id).to.be.a('number');
        expect(joke.type).to.match(/^(general|programming|knock-knock)$/);
        expect(joke.setup).to.be.a('string').and.not.be.empty;
        expect(joke.punchline).to.be.a('string').and.not.be.empty;
      });
    });
  });

  //Teste de Limites
  it('Garante que nenhuma piada tem campos vazios', () => {
    cy.api('/random_ten').then(({ body }) => {
      body.forEach((joke) => {
        expect(joke.setup.trim()).to.not.be.empty;
        expect(joke.punchline.trim()).to.not.be.empty;
      });
    });
  });
});
