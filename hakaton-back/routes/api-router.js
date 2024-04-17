const express = require('express')
const {getUser, deleteAdmin, getAdmin, getUserComplaints, addCompalint, register, loginig, getComplaints, disactiveComplaints, getComplaint} = require('../conrollers/api-con')

const router = express.Router()

router.get('/api/user/:id', getUser)
router.get('/api/user/deleteAdmin/:id', deleteAdmin)
router.get('/api/user/getAdmin/:id', getAdmin)
router.get('/api/user/get/complaints/:id', getUserComplaints)
router.get('/api/complaints/:id', getComplaint)
router.get('/api/user/disactive/complaints/:id', disactiveComplaints)
router.get('/api/user/get/complaints', getComplaints)
router.get('/api/user/add/complaints/:name/:creater/:feedback/:category/:text/:img', addCompalint)
router.get('/api/user/register/:name/:feedback/:email/:password', register)
router.get('/api/user/logining/:name/:email/:password', loginig)



module.exports = router