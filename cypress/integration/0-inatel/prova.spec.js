/// <reference types="Cypress" />

describe("XYZ Bank suite test 01", () => {
  it("deve ser possível realizar o login com o usuário Harry Potter", () => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.get(".borderM > :nth-child(1) > .btn").click();
    cy.get("#userSelect").select("Harry Potter");
    cy.get("form.ng-valid > .btn").click();
  });
});
describe("XYZ Bank suite test 02", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
    cy.get(".borderM > :nth-child(1) > .btn").click();
    cy.get("#userSelect").select("Harry Potter");
    cy.get("form.ng-valid > .btn").click();
  });

  it("dado que o usuário Harry Potter esteja logado deve-se tentar retirar um valor maior do que tem na conta e receber uma mensagem de erro!", () => {
    cy.get('[ng-class="btnClass3"]').click();
    cy.get(".form-control").type(generateRandomInteger());
    cy.get("form.ng-dirty > .btn").click();
    cy.get(".error").should(
      "contain",
      "Transaction Failed. You can not withdraw amount more than the balance."
    );
  });

  it("dado que o usuário Harry Potter esteja logado ele deve poder realizar um depósito em sua conta", () => {
    cy.get('[ng-class="btnClass2"]').click();
    let valor = generateRandomInteger();
    cy.get(".form-control").type(valor);
    cy.get("form.ng-dirty > .btn").click();
    cy.get(".borderM > :nth-child(3) > :nth-child(2)").should("contain", valor);
  });

  it("dado que o usuário Harry Potter esteja logado e tenha depositado $500 ele poderá retirar todo o saldo.", () => {
    cy.get('[ng-class="btnClass2"]').click();
    cy.get(".form-control").type(500);
    cy.get("form.ng-dirty > .btn").click();
    cy.get(".borderM > :nth-child(3) > :nth-child(2)").should("contain", 500);

    cy.get('[ng-class="btnClass3"]').click();

    cy.wait(1000);
    cy.get(".form-control").type("500");
    cy.get("form.ng-dirty > .btn").click();
    cy.get(".borderM > :nth-child(3) > :nth-child(2)").should("contain", 0);
  });
});

function generateRandomInteger() {
  const randomInteger =
    Number.parseFloat(Math.random() * 10000).toFixed(0) + 100;
  return randomInteger;
}

var array = [];
