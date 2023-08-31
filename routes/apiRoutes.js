const router = require("express").Router()
const { readFromFile, readAndAppend, readAndDelete } = require("../utils/helpers")


router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
})

module.exports = router;