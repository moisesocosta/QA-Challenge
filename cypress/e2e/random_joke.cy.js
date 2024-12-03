describe('Endpoint /random_joke', () => {
  it('Deve retornar uma piada válida', () => {
    cy.api('/random_joke').then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.have.all.keys('type', 'setup', 'punchline', 'id');
      expect(body.type).to.be.a('string');
      expect(body.setup).to.be.a('string');
      expect(body.punchline).to.be.a('string');
      expect(body.id).to.be.a('number');
    });
  });

  //Teste de Carga
  it('Simula 10 requisições simultâneas', () => {
    const requests = Cypress._.times(10, () => cy.api('/random_joke'));
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
  it('Valida os tipos de dados de uma única piada', () => {
    cy.api('/random_joke').then(({ body }) => {
      expect(body.id).to.be.a('number');
      expect(body.type).to.match(/^(general|programming|knock-knock)$/);
      expect(body.setup).to.be.a('string').and.not.be.empty;
      expect(body.punchline).to.be.a('string').and.not.be.empty;
    });
  });

  //Teste de Limites
  it('Garante que nenhuma piada tem campos vazios', () => {
    cy.api('/random_joke').then(({ body }) => {
      expect(body.setup.trim()).to.not.be.empty;
      expect(body.punchline.trim()).to.not.be.empty;
    });
  });

  //Teste de Consistência
  it('Verifica se retorna dados consistentes', () => {
    cy.api('/random_joke').then(({ body: joke1 }) => {
      cy.api('/jokes/random').then(({ body: joke2 }) => {
        expect(joke1).to.deep.equal(joke2);
      });
    });
  });

  //Distribuição Estatística
  it('Verifica a distribuição dos tipos de piada', () => {
    const counts = { general: 0, programming: 0, 'knock-knock': 0 };
  
    Cypress._.times(100, (i) => {
      cy.wait(50 * i);
      cy.api('/random_joke').then(({ body }) => {
        counts[body.type] += 1;
      });
    });
  
    cy.wrap(null).then(() => {
      cy.log('Distribuição:', counts);
      expect(Object.values(counts)).to.satisfy((arr) => arr.some((count) => count > 0));
    });
  });
    
});
