/// <reference types="cypress-xpath" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Dafiti } from "../PageObject/Dafiti.js";

const dafiti = new Dafiti();

Given("I am on the Dafiti webpage", () => {
  cy.visit("/");
});

When("I am looking for a product", () => {
  cy.on("fail", (err, runable) => {
    console.log(err.message);
    return false;
  });
  dafiti.getTxtSearchBar().type("Zapatos{enter}");
  dafiti.getZapato().click();
  dafiti.getSlcSize().click();
});

Then("I validate that the product is in the cart", () => {});
