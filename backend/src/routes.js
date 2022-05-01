const { Router } = require('express');

const UserController = require('./controllers/UserController')
// const SearchController = require('./controllers/SearchController')

const routes = Router();


routes.get('/users', UserController.index);

routes.get('/users/:destination', UserController.findByDestination);

routes.post('/users', UserController.store);

// routes.put('/users', UserController.attUser);

// routes.delete('/users/:id', UserController.deleteUser);


// routes.get('/search',SearchController.index)

module.exports = routes;