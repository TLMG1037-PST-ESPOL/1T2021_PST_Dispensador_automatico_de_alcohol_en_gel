const { Router } = require('express');
const router = Router();

const { getDispensadores, getDispensador, postDispensador, putDispensador, deleteDispensador } = require('../controllers/dispensadorControl.js');

router.route('/').get(getDispensadores)
    .post(postDispensador);
router.route('/:id').get(getDispensador).put(putDispensador) //cambiar
    .delete(deleteDispensador);

module.exports = router