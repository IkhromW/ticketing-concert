const router = require("express").Router()
const registerController = require("../controllers/registerController")
router.get("/", (req, res) => {
    res.render("home")
})

router.get("/register", registerController.register)
router.post("/register", registerController.submit)
router.get("/register/data", registerController.data)
router.get("/register/data/edit/:customerId", registerController.editForm)
router.post("/register/data/edit/:customerId", registerController.updated)




module.exports = router