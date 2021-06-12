const mongoose = require('mongoose');
const User = require('./users');
const path = require('path');
mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("user go")).catch(err=>console.log(err));

module.exports = (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    User.create({
        username : req.body.username,
        password : req.body.password
    }, (error, user) => {
        console.log(error, user);
        res.redirect('/register');
    })
}

