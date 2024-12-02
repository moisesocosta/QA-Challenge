describe('Endpoint /jokes/random', () => {
  it('Deve retornar uma piada válida', () => {
    cy.api('/jokes/random').then(({ status, body }) => {
      expect(status).to.eq(200);
      expect(body).to.have.all.keys('type', 'setup', 'punchline', 'id');
      expect(body.type).to.be.a('string');
      expect(body.setup).to.be.a('string');
      expect(body.punchline).to.be.a('string');
      expect(body.id).to.be.a('number');
    });
  });

  //Validação de tipos e formatos
  it('Valida os tipos de dados em todas as piadas da lista', () => {
    cy.api('/jokes/random').then(({ body }) => {
      expect(body.id).to.be.a('number');
      expect(body.type).to.be.a('string').and.not.be.empty;
      expect(body.setup).to.be.a('string').and.not.be.empty;
      expect(body.punchline).to.be.a('string').and.not.be.empty;
    });
  });
});
