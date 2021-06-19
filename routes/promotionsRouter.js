const express = require('express');
const promotionsRouter = express.Router();

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotion to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionsRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send promotion ${req.params.promotionId} to you`);
})
.post((req, res) => {
    res.end('Post operation not supported on /promotions/:promotionId');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Will update campsite ${req.params.promotionId}`);
})
.delete((req, res) => {
    res.end(`Deleting all campsite ${req.params.promotionId}`);
});

module.exports = promotionsRouter;