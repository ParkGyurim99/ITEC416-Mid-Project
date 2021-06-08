const mongoose = require('mongoose');
const bookmark = require('./bookmark')

mongoose.connect('mongodb://localhost/itec416', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("mongo go")).catch(err=>console.log(err));

bookmark.create({
    link : 'youtubeLink3'
}, (error, bookmark) => {
    console.log(error, bookmark)
})

// bookmark.find({
//     // link : /youtube/
// }, (error, bookmark) => {
//     console.log(error, bookmark)
// })

// bookmark.findByIdAndDelete("60bfc51b54727934a0d6187c", (error, bookmark) => {
//     console.log(error, bookmark)
// })