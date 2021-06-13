const mongoose = require('mongoose');
const User = require('./users');
const path = require('path');
const { render } = require('ejs');
// mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("user go")).catch(err=>console.log(err));
mongoose.connect('mongodb+srv://parkgyurim:parkgyurim99@cluster0.bpisw.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("user go")).catch(err=>console.log(err));

module.exports = (req, res) => {
    console.log(req.body.username)
    console.log(req.body.password)
    
    // check user information 
    if (req.body.username == "" || req.body.password == "") {
        console.log("missing user information");
        res.redirect('/register');
    } else {
        User.create(req.body, (error, user)=> {
            res.redirect('/');
        })
    }
    
    // #1
    // User.create({
    //     username : req.body.username,
    //     password : req.body.password
    // }, (error, user) => {
    //     console.log(error, user);
    //     res.redirect('/register');
    // });

    // #2
    // User.create(req.body, (error, user)=> {
    //     res.redirect('/');
    // })
}