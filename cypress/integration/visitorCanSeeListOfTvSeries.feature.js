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
  it("visitor can see first tv show", () => {
    cy.get("[data-cy=image]").should("be_visible")
  })
})