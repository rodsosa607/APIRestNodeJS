const express = require('express');
const router = express.Router();
const { tokenSign } = require('../utils/handleJwt');
const {encrypt, compare} = require('../utils/handlePassword');
const {usersModel} = require('../models');
const { validatorRegister, validatorLogin } = require('../validators/auth');
const { matchedData } = require('express-validator');

/**
 * Register y login
 */
//TODO: http://localhost:3001/api/auth/login
//TODO: http://localhost:3001/api/auth/register
router.post("/register",validatorRegister,( async (req, res) =>{
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = {...req, password};

    const dataUser = await usersModel.create(body);
    console.log('**data user***');
    console.log(body);
    dataUser.set('password',undefined, {strict: false});

    const data = {
        token: await tokenSign(dataUser),
        user: dataUser
    }

    res.send({data});
} ));

router.post("/login",validatorLogin,(req, res)=>{

} );

module.exports = router;