const express = require('express');

const clienteController = require('../controllers/clientes')
const userController = require('../controllers/user')
const loginController = require('../controllers/login')

var authenticate = require('../middleware/authenticate')
var route = express.Router();

//Cliente Routes
route.get('/cli/:id', authenticate, clienteController.get)
route.get('/cli', authenticate, clienteController.getAll)
route.post('/cli', authenticate, clienteController.store)
route.delete('/cli/:id', authenticate, clienteController.delete)
route.get('/rem',clienteController.remove)
route.patch('/cli/:id', authenticate, clienteController.update)

//User Routes
route.post('/usr', userController.store)
route.get('/usr/me', authenticate, userController.showme)

//Login Routes
route.post('/usr/login', loginController.getToken)
route.delete('/usr/logout', authenticate, loginController.delToken)

module.exports = route