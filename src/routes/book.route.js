const { Router } = require('express');
const {getAll, addBook} = require('../controllers/book.controller');

const router = Router();

router.get('/book', getAll);
router.post('/book', addBook);

module.exports = router;