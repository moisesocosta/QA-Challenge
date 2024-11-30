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
});

