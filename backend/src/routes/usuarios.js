const { Router } = require('express');
const router = Router();

const { getUsuarios, getUsuario, postUsuario, deleteUsuario } = require('../controllers/usuariosControl.js');

router.route('/').get(getUsuarios)
    .post(postUsuario);
router.route('/:id').get(getUsuario) //cambiar
    .delete(deleteUsuario);

module.exports = router
