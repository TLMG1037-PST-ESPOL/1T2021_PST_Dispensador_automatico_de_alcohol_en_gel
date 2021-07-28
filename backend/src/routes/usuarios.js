const {Router}=require('express');
const router = Router();

const {getUsuarios} = require('../controllers/usuariosControl.js');

router.route('/').get(getUsuarios)

module.exports = router
