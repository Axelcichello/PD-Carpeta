const express = require("express") //traigo el modulo de express
const router = express.Router()
const path = require("path")

router.use("/", express.static(path.join(__dirname, "../../public"))) 

router.get("/*", (req, res) => {
    res.sendFile(path.join(path.join(__dirname, "../../public")))
})

module.exports={
    router
}
