const express = require('express')
const app = new express()
const storeBookmarkController = require('./storeBookmark')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(express.static('public'))
app.use(express.static('./'))

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.post('/bookmarks/store', storeBookmarkController)
app.post('/bookamrks/store', (req, res) => {
    console.log(req.link)
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.listen(4000, () => {
    console.log('App listening on port 4000')
})