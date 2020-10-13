var express = require('express');  
var router = express.Router(); 
var sequelize = require('../db');
// const test = require('../models/test');
var TestModel  = sequelize.import('../models/test');

/*******************************
 *  Controller Method #1: Simple Response
 *******************************/

router.post('/one', function(req,res){
    res.send("Got a post request.")
});

/*******************************
 *  Controller Method #2: Persisting Data
 *******************************/
router.post('/two', function (req, res){
    let testData = "Test data for endpoint two";

    TestModel
        .create({

          testdata: testData
        }).then(dataFromDatabase => {
            res.send('Test two went through!')
        })
});



module.exports = router;