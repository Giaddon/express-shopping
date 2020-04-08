const express = require("express");
const router = new express.Router();
const items = require("./fakeDb.js")

// GET "/items"
router.get("/", (req, res) => {
    return res.json(items);
});


// POST "/items"
router.post("/", (req, res) => {
    let newItem = req.body;

    items.push(newItem);

    return res.json({"added":newItem})
});

// GET "/items/:name"
router.get("/:name", (req, res) => {
    
   let targetItem = items.find(item => item.name.toLowerCase() === 
   req.params.name.toLowerCase())
    
    if (targetItem) {
        return res.json(targetItem)
    } else {
        return res.json({"error": `${req.params.name} not found`})
    }
});

// PATCH "/items/:name"
router.patch("/:name", (req, res) => {

    let updatedItem = req.body;

    let targetIndex = items.findIndex(item => item.name.toLowerCase() === 
    req.params.name.toLowerCase());
    
    if (targetIndex) {
        items[targetIndex].name = updatedItem.name || items[targetIndex].name;
        items[targetIndex].price = updatedItem.price || items[targetIndex].price;
    
        return res.json({"updated": updatedItem})
    } else {
        return res.json({"error": `${req.params.name} not found`})
    }
})

// DELETE "/items/:name"
router.delete("/:name", (req, res) => {

    let targetIndex = items.findIndex(item => item.name.toLowerCase() === 
    req.params.name.toLowerCase());
    
    if (targetIndex) {
        items.splice(targetIndex, 1);
    
        return res.json({"message": "Deleted"})
    } else {
        return res.json({"error": `${req.params.name} not found`})
    }
})



module.exports = router