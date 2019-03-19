const controller = require('./controllers');
module.exports = (app) => {
    app
        .get('/api/rate', controller.getAllRate)
        .get('/api/rate/:id', controller.getOneRate)
        .post('/api/rate/:id', controller.createRate)
        .put('/api/rate/:id', controller.updateRate)
        .delete('/api/rate/:id', controller.deleteRate)
        ///
        .get('/api/cake', controller.getAllCake)
        .get('/api/cake/:id', controller.getOneCake)
        .post('/api/cake', controller.createCake)
        .put('/api/cake/:id', controller.updateCake)
        .delete('/api/cake/:id', controller.deleteCake)
}