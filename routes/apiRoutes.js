const router = require("express").Router()
const { v4: uuidv4 } = require("uuid")
const { readFromFile, readAndAppend, readAndDelete } = require("../utils/helpers")

router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
})

router.post("/notes", (req, res) => {
    const note = req.body;
    note.id = uuidv4();
    readAndAppend(note, "./db/db.json")
    res.json(note)
})

router.delete("/notes/:id", (req, res) => {
    readAndDelete(req.params.id, "./db/db.json")
    res.json(true)
})

module.exports = router;