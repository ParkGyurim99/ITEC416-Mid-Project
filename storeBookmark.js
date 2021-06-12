const mongoose = require('mongoose');
const bookmark = require('./bookmark');
const path = require('path');
mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("bookmark go")).catch(err=>console.log(err));

module.exports = (req, res) => {
    console.log(req.body.link)
    console.log(req.session)
    bookmark.create({
        link : req.body.link
    }, (error, bookmark) => {
        console.log(error, bookmark);
        res.redirect('/');
    })
    
}