// Purpose:
// Crud for LISTs
// Crud for ITEMS
// Crud for USERS

const { request } = require("express");

// index.js is the collection point for all controllers
// index.js is the outlet point for all controllers

//Current Goal: Test Controller

const TestController = require("./TestController");
const UsersController = require("./UsersController");


module.exports = {
    test: TestController,
    users: UsersController,
};

