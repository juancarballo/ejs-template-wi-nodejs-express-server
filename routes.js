'use strict';

const express = require('express');
const router = express.Router();

//ruta para el homeS
router.get('/', (req, res) => {
    res.render('index.ejs');
    console.log('new home request');
})


module.exports = router;