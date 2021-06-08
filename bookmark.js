const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
    link : String
});

const bookmark = mongoose.model('bookmark', bookmarkSchema);
module.exports = bookmark;