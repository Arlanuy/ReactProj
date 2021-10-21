var express = require('express');
var router = express.Router();

router.use(express.static('public'));

router.get('/employee/:empId', function(req, res){
    let empId = req.params.empId;
    req.setEncoding('Content-Type: ', 'text/json');

    if (empId = 1000) {
        res.json({
            empId: 1000,
            empName: 'Jack'
        })
    }

    else {
        res.json({
            empId: 2000,
            empName: 'Marty'
        })
    }
})

router.post('/register', function (req, res) {
    let input = req.body
    console.log("The ID is ", input.name, " and age is ", input.age)
    res.json({message: 'success'})
})

router.get('/dummy', function(req, res){
    res.status(500).send({msg: 'Some validation failed'})

})