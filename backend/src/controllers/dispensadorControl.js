const dispensadorControl={};
const db=require("./database.js")

dispensadorControl.getDispensadores=(req,res)=>{
    db.query("Select * FROM dispensador", (err,result,fields)=>{
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
dispensadorControl.getDispensador=(req, res)=>{
    console.log(req.params.id)
      db.query("SELECT * FROM dispensador WHERE id_dispensador= '"+req.params.id+"'",(err, result, fields)=>{
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
dispensadorControl.postDispensador=(req,res)=>{
    console.log(req.body);
    const {id_dispensador, no_usos, nivel_bajo, id_ubicacion, id_usuario}=req.body;
    if(!id_dispensador || !no_usos || !nivel_bajo || !id_ubicacion || !id_usuario){
        res.status(400).send("Datos incompletos");
        console.log("dispensador no registrado")
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
    
    SQLbody={id_dispensador, no_usos, nivel_bajo, id_ubicacion, id_usuario};
    
    db.query("INSERT INTO dispensador SET ?",[SQLbody],
    (err,result)=>{
        if(err){
            res.status(500).send(err);
            console.log("error");
            return;
        }
        res.send("dispensador ingresado")
    });
}

//eliminar inf de la DB
dispensadorControl.deleteDispensador=(req,res)=>{
    db.query("DELETE FROM dispensador WHERE id_dispensador="+req.params.id,
    (err, result)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.send("Dispensador eliminado")
    })
}
module.exports=dispensadorControl;