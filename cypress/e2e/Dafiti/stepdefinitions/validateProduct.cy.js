/// <reference types="cypress-xpath" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Dafiti } from "../PageObject/Dafiti.js";

const dafiti = new Dafiti();

Given("I am on the Dafiti website", () => {
  cy.visit("/");
});

When("I select a product from the Offers section", () => {
  cy.on("fail", (err, runable) => {
    console.log(err.message);
    return false;
  });
  dafiti.getBtnOfertas().click();
  dafiti.getBtnPerfume().click();
  dafiti.getBtnAddToCart().should("be.visible");
  dafiti.getImgDafiti().click();
});

Then("I'm at Dafiti's home", () => {
  cy.url().should("eq", "https://www.dafiti.com.co/");
});
