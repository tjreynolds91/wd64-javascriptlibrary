const { Router} = require('express');

const bcrypt = require("bcrypt");

const {user} = require('../models/index');
const User = require('../models/userModel');

const UsersControllerRouter = Router();

//CRUD-DY CODE FOR USERS
//C - Creare a user by registration (url): "/register"
//R - Read tehe user  profile       (url): "/profile", "/login"
//U - Update user info              (url): "/update"
//D - Delete the user               (url): "/terminate"

//Kinds of requests:
//POST - Create new info, insert info into db, sends info
//GET - Retrieve info, or pull info from db (give me an html doc)
//PUT - Modify existing information
//DELETE - Exterminate data from the db

UsersControllerRouter.post("/register", (request, response) => {
    // PROCESS:
    // Retrieve the data from the body of the request
    // !!!! Use that data to craft a USER
    // !!!! Save the USER to the db
    // Respond with the status of the action

    let { email, password} = request.body;
    let newUser = user.build({
        email: email,
        password: bcrypt.hashSync(password, 12),
    });

    newUser
    .save()
    .then(() => {
        console.log('[server]: The new user was created')
        return response.json({
            message:'User successfully created!'
        });
    })

    .catch(error => {
        console.log(error);
        response.status(500).json({
            message: "Failed to create user",
        });
    });

//     response.json({
//         message: "Hello from the user Resgister route!"
//     });
});

UsersControllerRouter.post('/login', (request, response) => {
    // PROCESS:
    // Retrieve the data from the body of the request
    // Verify the user exists, and the data matches what is in the record
    // If so: respond with a token
    //If not: respond with a "Get off my Lawn!!"
    response.json({
        message: "Hello from the user Login route!"
    });
});

// TODO: Implement that following routes: "profile","update", "terminate"



module.exports = UsersControllerRouter;