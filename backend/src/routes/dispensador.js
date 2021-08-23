const { Router } = require('express');
const router = Router();

const { getDispensadores, getDispensador, postDispensador, deleteDispensador } = require('../controllers/dispensadorControl.js');

router.route('/').get(getDispensadores)
    .post(postDispensador);
router.route('/:id').get(getDispensador) //cambiar
    .delete(deleteDispensador);

module.exports = router