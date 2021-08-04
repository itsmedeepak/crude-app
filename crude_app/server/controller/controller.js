const UserdB = require("../model/model");
var Userdb = require("../model/model");

//create and save new user

exports.create = (req, res) => {


    // validate
    if (!req.body) {
        res.status(400).send({ massage: "content can't be empty" });
        return;
    }

    //new user
    const user = new UserdB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    })

    user
        .save(user)
        .then(data => {
            console.log(data)
            //res.send(data)
            res.redirect("/add-user")
            
        })
        .catch(err => {
            res.status(500).send({
                massage: err.massage || "some error occur while creating user"
            });
        });


}

//retreive and return  all users

exports.find = (req, res) => {
    if (req.query.id){
        const id = req.query.id;

        UserdB.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found user with id" + id})
            }
            else{
                res.send(data)
            }

        })
        .catch(err=>{
            res.status(500).send({message:"error on retrieving with "+id})
        })
    }
    else{
        UserdB.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ massage: err.massage || "Error Occured during retrieving user information" })
        })
    }
    

}

// update a new identified
exports.update = (req, res) => {
    if (!req.body) {
        return
        res.status(400).send({ massage: "data content cant be empty" });

    }
    const id = req.params.id;
    UserdB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    massage: `can't be upadted user with ${id}. Maybe user not found`
                })
            }
            else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update usre information" })
        })
}

// Delete user

exports.delete = (req, res) => {
    const id = req.params.id;

    UserdB.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `can't be deleted user with ${id}. id not found`
                })
            }
            else {
                res.send({
                    message: "User was deletd successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                massage: "cant be delted user with id =" + id
            });
        });


}