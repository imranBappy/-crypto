const { currencyPostController, currencyGetController } = require('../controllers/currencyController')

const router = require('express').Router()
router.post('/', currencyPostController);
router.get('/', currencyGetController);

module.exports = router;