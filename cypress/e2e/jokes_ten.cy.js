describe('Endpoint /jokes/ten', () => {
  it('Deve retornar exatamente 10 piadas', () => {
    cy.api('/jokes/ten').then(({ status, body }) => {
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
});
