const userControl= require('./controllers/database.js');

userControl.getUsuarios=(req,res)=>res.send('<h1>Lista de usuarios</h1>');

module.exports=userControl;
