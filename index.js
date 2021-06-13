const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const expressSession = require('express-session');

const bookmark = require('./bookmark.js');
const storeBookmarkController = require('./storeBookmark');
const storeUserController = require('./storeUser');
const loginController = require('./login');
const loginUserController = require('./loginUser');
const logoutController = require('./logout');

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://parkgyurim:parkgyurim99@cluster0.bpisw.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.static('./'));
app.use(express.static('public'));
app.use(express.static('pages'));
app.use(express.static('views'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(expressSession({
    secret : 'keyboard cat'
}))

global.loggedIn = null;
app.use("*", (req, res, next)=> {
    loggedIn = req.session.userId;
    next()
})

app.get('/', (req,res) => {
    // res.sendFile(path.resolve(__dirname, 'views/index.html'))
    res.render('index');
})
app.get('/login', (req,res) => {
    res.render('login');
})
app.get('/register', (req,res) => {
    res.render('register');
})
app.get('/bookmark', async (req, res) => {
    const bookmarks = await bookmark.find({}) //.populate('userid'); -> db load fail with this.
    res.render('bookmark', { bookmarks });
})
app.get('/login', loginController);
app.get('/logout', logoutController);

// store bookmark
app.post('/bookmarks/store', storeBookmarkController);
// app.post('/bookamrks/store', (req, res) => {
//     console.log(req.link)
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
//     // res.render('index')
// })

// app.post('/bookamrks/store', async (req, res) => {
//     console.log(req.link); 
//     await bookmark.create(req.body, (error, bookmark) => {
//         //res.sendFile(path.resolve(__dirname, '/'));
//         res.render('/')
//     })
// })

// sign up
app.post('/users/register', storeUserController);

// sign in 
app.post('/users/login', loginUserController);

app.listen(4000, () => {
    console.log('App listening on port 4000');
})