const userControl={};
const db=require("./database.js")

userControl.getUsuarios=(req,res)=>{
    db.query("Select * FROM usuario", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        console.log("Hola");
        res.json(result);
    });
}

// obtener informacion de la DB
userControl.getUsuario=(req, res)=>{
    //const {nombre_usuario, contraseña}=req.body;
    console.log(req.params.id);
    /*if (!contraseña){
        res.status(400).send("Datos incompletos");
        console.log("sin clave");
        return;
    }
    if (!nombre_usuario){
        res.status(400).send("Datos incompletos");
        console.log("sin nombre");
        return;
    }*/

    db.query("SELECT * FROM usuario WHERE nombre_usuario="+req.params.id, (err, result, fields)=>{
        if(err){
            res.status(500).send(err);
            console.log("error");
            return;
        }
        res.json(result)
        res.send(result.affectedRows);
    })
}

//agregar informacion a la DB
userControl.postUsuario=(req,res)=>{
    const {id_rol_usuario, nombre_usuario, correo_electronico, contraseña}=req.body;
    if(!id_rol_usuario || !nombre_usuario || !correo_electronico || !contraseña){
        res.status(400).send("Datos incompletos");
        return;
    }
    let SQLbody={}
    
    SQLbody={id_rol_usuario, nombre_usuario, correo_electronico, contraseña};
    
    db.query("INSERT INTO usuario SET ?",[SQLbody],
    (err,result)=>{
        if(err){
            res.status(500).send(err);
            console.log("error");
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
