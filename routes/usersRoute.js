const express = require("express");
const router = express.Router();
const User = require("../models/userModel")
const bcrypt = require("bcrypt");


router.post("/login", async (req, res) => {

    const { username, password } = req.body
    try {
        const user = await User.findOne({ username})
        if (user) {
        const validpassword = await bcrypt.compare(password,user.password)
        const {username,email} =user
        if(validpassword)
        {
            res.status(200).json({
                data:{username,email}
            });
        }
        }
        else {
            return res.status(400).json(error);
        }
    } catch (error) {
        return res.status(400).json(error);
    }

});

router.post("/register", async (req, res) => {
    try {
        const newuser = new User(req.body, req.body.password = await bcrypt.hash(req.body.password, 12))
        console.log(newuser)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
        return res.status(400).json(error);
    }

});


module.exports = router

