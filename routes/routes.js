const express = require('express');

const clienteController = require('../controllers/clientes')
const userController = require('../controllers/user')
var authenticate = require('../middleware/authenticate')
var route = express.Router();

//Cliente Routes
route.get('/cli/:id',clienteController.get)
route.get('/cli', clienteController.getAll)
route.post('/cli',clienteController.store)
route.delete('/cli/:id',clienteController.delete)
route.get('/rem',clienteController.remove)
route.patch('/cli/:id', clienteController.update)

//User Routes
route.post('/usr', userController.store)
route.get('/usr/me', authenticate, userController.showme)

module.exports = route