const express = require('express');
const router = express.Router();
const Count = require('../models/count.model');

// Route to save count
router.post('/save', async (req, res) => {
    try {
        const count = new Count({
            count: req.body.count
        });
        await count.save();
        res.status(201).json({ message: 'Count saved successfully', data: count });
    } catch (error) {
        res.status(500).json({ message: 'Error saving count', error: error.message });
    }
})

router.get('/history', async (req, res) => {
    try {
        const counts = await Count.find().sort({ time: -1 });
        res.json(counts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching history', error: error.message });
    }
})

router.delete('/delete/:id',async (req,res) =>{
    try{
         const {id} = req.params;
         await Count.findByIdAndDelete(id);
         res.status(200).json({message: 'Count deleted successfully'});
    }
    catch(error){
        res.status(500).json({message: 'Error deleting count', error: error.message});
    }
})

module.exports = router;