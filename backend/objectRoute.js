const express = require('express');
const router = express.Router();
const ObjectData = require('./objectModel');
 router.get('/', async function (req, res) {
    const objects = await ObjectData.find();
    res.json(objects)
});
 router.post('/',async (req,res) =>{
     const newObjectData = new ObjectData({ ...req.body });
     const insertedObjectData = await newObjectData.save();
     return res.status(201).json(insertedObjectData);
 })
module.exports = router;
