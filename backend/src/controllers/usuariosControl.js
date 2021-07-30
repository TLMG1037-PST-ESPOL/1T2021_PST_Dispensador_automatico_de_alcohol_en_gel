const userControl={};
const db=require("./database.js")

userControl.getUsuarios=(req,res)=>{
    db.query("Select * FROM usuario", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result);
    });
}

// obtener informacion de la DB
userControl.getUsuario=(req, res)=>{
    if(isNaN(req.params.id)){
        res.status(400).send("Id no valido");
        return;
    }
    db.query("SELECT * FROM usuario WHERE id_usuario="+req.params.id, (err, result, fields)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result)
    })
}

//agregar informacion a la DB
userControl.postUsuario=(req,res)=>{
    const {id_usuario, id_rol_usuario, nombre_usuario, correo_electronico, contraseña}=req.body;
    if(!id_rol_usuario || !nombre_usuario || !correo_electronico || !contraseña){
        res.status(400).send("Datos incompletos");
        return;
    }
    let SQLbody={}
    if (!id_usuario){
        SQLbody={id_rol_usuario, nombre_usuario, correo_electronico, contraseña};
    }else{
        SQLbody={id_usuario, id_rol_usuario, nombre_usuario, correo_electronico, contraseña};
    }
    db.query("INSERT INTO usuario SET ?",[SQLbody],
    (err,result)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send("Usuario ingresado")
    });
}

//eliminar inf de la DB
userControl.deleteUsuario=(req,res)=>{
    db.query("DELETE FROM usuario WHERE id_usuario="+req.params.id,
    (err, result)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send("Usuario eliminado")
    })
}
module.exports=userControl;
