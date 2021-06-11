const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');

const bookmark = require('./bookmark.js');
const storeBookmarkController = require('./storeBookmark');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('./'));
app.use(express.static('public'));
app.use(express.static('pages'));
app.use(express.static('views'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req,res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'))
    res.render('index');
})

app.get('/bookmark', async (req, res) => {
    const bookmarks = await bookmark.find({})
    res.render('bookmark', { bookmarks });
})

app.post('/bookmarks/store', storeBookmarkController);
// app.post('/bookamrks/store', (req, res) => {
//     console.log(req.link)
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
//     // res.render('index')
// })

app.post('/bookamrks/store', async (req, res) => {
    console.log(req.link);
    await bookmark.create(req.body, (error, bookmark) => {
        //res.sendFile(path.resolve(__dirname, '/'));
        res.render('/')
    })
})

app.listen(4000, () => {
    console.log('App listening on port 4000');
})