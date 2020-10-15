const Express = require("express");

const applicationSequelizeObject = require("./db");
const ApplicationControllers = require("./controllers/index");

const expressApplicationObject = new Express();

expressApplicationObject.use("/test", ApplicationControllers.test);
expressApplicationObject.use("/users", ApplicationControllers.users);

expressApplicationObject.get('/',(request, response) =>{
    console.log('[server]: Root GET request received');
    console.log('TYPE:', request.method);
    console.log("URL:", request.url);
    console.log("[server]: Response being dipatched ->");
    response.send("Root Route Hit, helo fromo the todo server");

});

// Challenge: Recieve a POST request at the route "/challenge"
// Takes 2 values inside of the body:
// Name -> A string for a name
// Age -> A number for the age
// Respond with this message:
// If the user is 18 and older, the message will be:
//    "<name>, you are an adult!"
// Otherwise the message will be:
//    "<name>, you will be an adult soon!"

// JSON in a request is a STRING
expressApplicationObject.use(Express.json());

expressApplicationObject.post("/challenge", (request, response) => {
    let data = request.body;
    let message = 
        data.age >= 17 
            ? `${data.name}, you are an adult!` 
            : `${data.name}, you will be an adult eventually!`;
    

    response.send(message);

});






// Startup Procedure:
// Verfiy the connection to the Postgres DB
// Synchronize our Database with our Models
// Listen on our specified port

applicationSequelizeObject.authenticate()
    .then(() => applicationSequelizeObject.sync())
    .then(() => {
        expressApplicationObject.listen(9001,() => {
            console.log("[server]: App is listening on port 9001");
        });
    })
    .catch((err) => {
        console.log(err);
    })

