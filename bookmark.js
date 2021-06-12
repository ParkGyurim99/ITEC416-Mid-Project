const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    // link : String
    link : {
        type : String,
        required : true
    }
});

const bookmark = mongoose.model('bookmark', bookmarkSchema);
module.exports = bookmark;