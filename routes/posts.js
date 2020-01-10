const express = require('express');
const router = express.Router();

/* GET posts index */
router.get('/', (req, res, next) => {
  res.send('INDEX /posts');
});

/* GET posts new */
router.get('/new', (req, res, next) => {
    res.send('NEW /posts/new');
});

/* POST posts create */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts');
});

/* GET posts show */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /posts/:id');
});

/* GET posts edit */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/edit');
});

/* PUT posts update */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});

/* DELETE posts destroy */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
});

module.exports = router;

