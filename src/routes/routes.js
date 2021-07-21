const express = require('express');
const router = express.Router();

const carController = require('../controller/controller');
const validation = require('../middlewares/validation');

router.post('/', validation, carController.create);
router.put('/update/:id', carController.update);
router.delete('/delete/:id', carController.delete);

router.get('/fetch', carController.fetchAll);
router.get('/fetch/:id', carController.fetchOne);
router.get('/filter', carController.filteredFetch);


module.exports = router;