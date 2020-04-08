const express = require("express");
const router = new express.Router();
const items = require("./fakeDb.js")

//"/items"
router.get("/", (req, res) => {
    return res.json(items);
});

router.post("/", (req, res) => {
    let newItem = req.body;

    items.push(newItem);

    console.log(items);

    return res.json({"added":newItem})

});

router.get("/:name", (req, res) => {
    
   let targetItem = items.find(item => item.name.toLowerCase() === 
   req.params.name.toLowerCase())
    
    if (targetItem) {
        return res.json(targetItem)
    } else {
        return res.json({"error": `${req.params.name} not found`})
    }
});

module.exports = router