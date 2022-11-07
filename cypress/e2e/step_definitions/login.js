import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  const loginPage = require("../../pages/LoginPage");

  
Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
  });