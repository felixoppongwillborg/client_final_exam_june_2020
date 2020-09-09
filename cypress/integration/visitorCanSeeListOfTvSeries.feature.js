describe("visitor can see list of tv series", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:series_index.json"
    })
    cy.visit("/")
  });
  it("visitor can see header", () => {
    cy.get("[data-cy=header]").should("exist")
    cy.get("[data-cy=footer]").should("exist")
  })
  it("visitor can see first tv show", () => {
    cy.get(".container").within(() => {
      cy.get("[data-cy=image]").should("exist");
    })
  })
})