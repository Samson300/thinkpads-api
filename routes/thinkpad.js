const express = require('express');
const Router = express.Router;

const controller = require('../controllers/thinkpad');

const thinkpadRoutes = Router();

module.exports = thinkpadRoutes;


const {
    create,
    retrieveAll,
    update,
    deleteOne
} = require('../controllers/thinkpad');



// GET
thinkpadRoutes.get('/', retrieveAll);


// POST
thinkpadRoutes.post('/', create);


// PUT
thinkpadRoutes.put('/', update);


// DELETE
thinkpadRoutes.delete('/', deleteOne);