/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

describe("Invertus Task", () => {
  const email = chance.email();
  const name = "testName";
  const lastName = "testLastName";

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Has title?", () => {
    cy.contains("The most awesome ");
  });

  it("Do user list exists?", () => {
    cy.get('[data-testid="user-list"]').children();
  });

  it("Add user", () => {
    cy.get(`[data-testid="Add_user"]`).click();
    cy.contains("Add new user");

    cy.get("input[name=email]").type(email);
    cy.get("input[name=firstName]").type(name);
    cy.get("input[name=lastName]").type(lastName);

    cy.get("button[type=submit]").click();
  });

  it("Edit user", () => {
    cy.get(`[data-testid="Edit_user1"]`).click();
    cy.contains("Edit user");

    cy.get("input[name=email1]").should("have.value", "george.bluth@reqres.in");
    cy.get("input[name=firstName1]").should("have.value", "George");
    cy.get("input[name=lastName1]").should("have.value", "Bluth");

    cy.get("input[name=email1]").type(email);
    cy.get("input[name=firstName1]").type(name);
    cy.get("input[name=lastName1]").type(lastName);

    cy.get("button[type=submit]").click();
  });

  it("Delete user", () => {
    cy.get(`[data-testid="Delete_user1"]`).click();
    cy.contains("Are you sure you want to delete");

    cy.get(`[data-testid="no"]`).click();

    cy.get(`[data-testid="Delete_user1"]`).click();

    cy.get(`[data-testid="yes"]`).click();
  });
});
