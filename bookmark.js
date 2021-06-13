const mongoose = require('mongoose')
const user = require('./users');
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    userid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    // link : String
    link : {
        type : String,
        required : true
    }
});

const bookmark = mongoose.model('bookmark', bookmarkSchema);
module.exports = bookmark;