const express = require('express');
const router = express.Router();

const MenuItem = require('../models/menuItem');

router.post('/', async (req, res) => {
    try {
        const menudata = req.body;
        const newMenu = new MenuItem(menudata);
        const response = await newMenu.save();
        console.log('Menu data saved');
        res.status(200).json(response);
    }
    catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Duplicate key error' });
        } else {
            console.error('Error saving menu item:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
})

router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste;
        if(taste==='sweet' || taste=== 'spicy' || taste=== 'sour'){
           const menuData = await MenuItem.find({taste: taste});
           console.log(menuData);
           res.status(200).json({menuData});
        }
        else {
            res.status(400).json({error: "Invalid Parameters"});
        }
    }
    catch (err) {
        console.error('Error saving menu item:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.get('/', async (req, res) => {
    try {
        const menuData = await MenuItem.find();
        console.log("Menu data Fetched");
        res.status(200).json(menuData);
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
})

module.exports = router;