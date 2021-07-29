const userControl={};
const db=require("./database.js")
const userControl={}

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
    db.query("SELECT * FROM usuario WHERE id="+req.params.id, (err, result, fields)=>{
        if(err){
            res.status(500).send(err);
            console.log(err);
            return;
        }
        res.json(result)
    })
}

module.exports=userControl;
