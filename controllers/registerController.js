const {Customer} = require("../models/index")
const bcrypt = require("bcryptjs")

class registerController {
    static register(req, res) {
        res.render("register")
    }
    static submit(req, res) {
        let password = req.body.password
        
        bcrypt.genSalt(10 , function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                // Store hash in your password DB.
                console.log(hash, "ini pasword hash")
                let newCust = {
                    "username": req.body.username,
                    "password": hash,
                    "email": req.body.email,
                    "gender": req.body.gender
                }
                Customer.create(newCust)
                .then(instanceCust => {
                    res.redirect("/")
                })
                .catch(err => {
                    res.send(err)
                })
            });
        });
    }
    static data(req, res) {
        Customer.findAll({
            order: [["createAt", "ASC"]]
        })
        .then(instCust => {
            res.render("data", {customers : instCust})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static editForm(req, res) {
        let customerId = req.params.customerId

        Customer.findByPk(customerId)
            .then(instCust => {
                res.render("editData", {customer : instCust})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static updated(req ,res) {
       let updatedData = {
        "username": req.body.username,
        "email": req.body.email,
        "gender": req.body.gender,
        "role": req.body.role
       }
       let customerId = req.params.customerId

       Customer.update(updatedData, {
           where: {
               id: customerId
           }
       })
       .then(() => {
           res.redirect("/register/data")
       })
       .catch(err => {
           res.send(err)
       })
    }
}

module.exports = registerController