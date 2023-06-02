const { Router } = require('express');
const {addCategory, findByCategory} = require('../controllers/category.controller');

const router = Router();

router.post('/category', addCategory);
router.get('/categoryFind', findByCategory);

module.exports = router;