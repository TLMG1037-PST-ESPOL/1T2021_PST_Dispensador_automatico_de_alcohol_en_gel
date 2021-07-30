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
    console.log(req.params.id)
      //const {nombre_usuario, contraseña}=req.body;
       db.query("SELECT * FROM usuario WHERE nombre_usuario= '"+req.params.id+"'",(err, result, fields)=>{
        console.log(result);
        if(err){
            res.status(500).send(err);
            console.log("error");
            return;
        }
        res.json(result)
    })
}

//agregar informacion a la DB
userControl.postUsuario=(req,res)=>{
    console.log(req.body)
    const {id_rol_usuario, nombre_usuario, correo_electronico, contraseña}=req.body;
    if(!id_rol_usuario || !nombre_usuario || !correo_electronico || !contraseña){
        res.status(400).send("Datos incompletos");
        return;
    }
/**
    db.query("SELECT * FROM usuario WHERE nombre_usuario= '"+nombre_usuario+"'",(err, result, fields)=>{
        console.log(result)
        if(result){
            res.status(400).send(err);
            console.log("Usuario ya existe");
            return;
        }
    })*/
    
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
