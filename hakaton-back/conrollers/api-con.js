const Complaints = require("../moduls/complaints")
const Users = require('../moduls/users')






// -----------------complaints----------------------


const getComplaints = (req, res) => {
    Complaints
        .find({active: true})
        .sort({_id: -1})
        .then(complaints => {
            res.json(complaints)
        })
}

const getUserComplaints = (req, res) => {
    Complaints
        .find({creater: req.params.id})
        .sort({_id: -1})
        .then(complaints => {
            res.status(200).json(complaints)
        })
}

const disactiveComplaints = async (req, res, next) => {
    await Complaints.updateOne({ _id: req.params.id }, {
        active: false
    })
    .then(() => {
        next()
    })
}

const addCompalint = (req, res) => {
    console.log(req.params)
    const complaint = new Complaints({name: req.params.name, creater: req.params.creater, category: req.params.category, text: req.params.text, img: req.params.img, active: true, feedback: req.params.feedback})
    complaint
        .save()
        .then(() => {
            res.status(200).json({
                message: 'Create a new user'
            })
        })
        .catch(() => {
            res.status(500).json({
                message: "User don't create"
            })
        })

}

const getComplaint = (req, res) => {
    Complaints
    .find({_id: req.params.id})
    .then(complaint => {
        res.json(complaint)
    })
}

// -----------------auth----------------------------

const register = (req, res) => {
    console.log(req.params)
    const user = new Users({name: req.params.name, password: req.params.password, email: req.params.email, admin: false, feedback: req.params.feedback})
    user
        .save()
        .then(() => {
            res.status(200).json({
                message: 'Create a new user'
            })
        })
        .catch(() => {
            res.status(500).json({
                message: "User don't create"
            })
        })
}

const loginig = (req, res) => {
    console.log(req.params)
    Users
        .find(req.params)
        .then(user => {
            if(user) {
                res.status(200).json(user[0])
            }else {
                res.status(200).json(user)
            }
            
        })
}

// --------------------user-------------------------

const getUser = (req, res) => {
    Users
        .find({_id: req.params.id})
        .then(user => {
            if (user.length === 0) {
                res.status(500).json({
                    message: 'Not user'
                })
            }else {
                res.status(200).json(user[0])
            }
        })
        .catch(() => {
            res.status(500).json({
                message: 'Error'
            })
        })
}

// ---------------admin-------------

const deleteAdmin = async (req, res, next) => {
    console.log(req.params)
    try {
        Users
            .find({_id: req.params.id})
            .then(user => {
                if(user) {
                    Users.updateOne({ _id: req.params.id }, {
                        admin: false
                    })
                    .then(() => {
                        res.json({message: 'Пользователь больше не имеет прав Админа'})
                    })
                    .catch(() => {
                        res.json({message: 'Ошибка'})
                    })
                }else{
                    res.json({message: 'Такого пользователя нет'})
                }
               
            })
            .catch(() => {
                res.json({message: 'Такого пользователя нет'})
            })
        
    } catch (error) {
        res.json({message: 'Ошибка'})
    }
}

const getAdmin = (req, res, next) => {
    console.log(req.params)
    try {
        Users
            .find({_id: req.params.id})
            .then(user => {
                if(user) {
                    Users.updateOne({ _id: req.params.id }, {
                        admin: true
                    })
                    .then(() => {
                        res.json({message: 'Пользователю присвоены права Админа'})
                    })
                    .catch(() => {
                        res.json({message: 'Ошибка'})
                    })
                }else{
                    res.json({message: 'Такого пользователя нет'})
                }
               
            })
            .catch(() => {
                res.json({message: 'Такого пользователя нет'})
            })
        
    } catch (error) {
        res.json({message: 'Ошибка'})
    }
    
    
}



module.exports = {
    getUser, deleteAdmin, getAdmin, register, loginig, addCompalint, getUserComplaints, getComplaints, disactiveComplaints, getComplaint
}