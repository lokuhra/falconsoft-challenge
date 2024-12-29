describe("Navigation", () => {
  const visitAndWait = () => {
    cy.visit("http://localhost:3000/")
    cy.wait(1000)
  }

  it("should navigate to the about page", () => {
    visitAndWait()
  })

  it("should display a table of users with required fields", () => {
    visitAndWait()
    cy.get("table").should("exist")
    cy.get("table").find("th").should("contain", "Name")
    cy.get("table").find("th").should("contain", "Username")
    cy.get("table").find("th").should("contain", "Phone")
    cy.get("table").find("th").should("contain", "Email")
    cy.get("table").find("th").should("contain", "City")
    cy.get("table").find("th").should("contain", "Company")
  })

  it("should filter users based on search input", () => {
    visitAndWait()
    cy.get('input[placeholder="Search..."]').type("Leanne")
    cy.get("table tbody tr").should("have.length", 1)
    cy.get("table tbody tr").first().should("contain", "Leanne")
  })

  it("should sort users by column when clicking on headers", () => {
    visitAndWait()
    cy.get("th").contains("Name").click()
    cy.get("table tbody tr").first().should("contain", "Chelsey Dietrich")
    cy.get("th").contains("Name").click()
    cy.get("table tbody tr").first().should("contain", "Patricia Lebsack")
  })

  it("should navigate to user detail when clicking on a user", () => {
    visitAndWait()
    cy.get("table tbody tr").first().click()
    cy.url().should("include", "/user/")
    cy.wait(1000)
    cy.get("h1").should("contain", "Profile of")
  })

  it("should display detailed information of the selected user", () => {
    visitAndWait()
    cy.get("table tbody tr").first().click()
    cy.wait(1000)
    cy.get(".rounded-lg.bg-card").should("be.visible")
    cy.get(".rounded-lg.bg-card").should("contain", "Leanne Graham")
    cy.get(".rounded-lg.bg-card").should("contain", "@Bret")
    cy.get(".rounded-lg.bg-card").should("contain", "Romaguera-Crona")
  })

  it("should display posts associated with the user", () => {
    visitAndWait()
    cy.get("table tbody tr").first().click()
    cy.wait(1000)
    cy.get("h2.text-2xl").should("be.visible")
    cy.get(".rounded-lg.border").should("have.length.greaterThan", 0)
    cy.get(".rounded-lg.border")
      .first()
      .should(
        "contain",
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      )
  })

  it("should navigate back to the user list when clicking the back button", () => {
    visitAndWait()
    cy.get("table tbody tr").eq(1).click()
    cy.wait(1000)
    cy.get('[data-testid="back-button"]').click()
    cy.wait(1000)
    cy.get("table").should("exist")
  })
})
