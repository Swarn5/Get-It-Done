const mongoose = require('mongoose')

// String, Number, Boolean => JavaScript Datatypes

const Todo = new mongoose.Schema({
        record : {type: String, required : true},
        date : {type: Number, default:Date.now()},
})

// TodoModel -> todomodel + 's'
const model = mongoose.model('TodoModel',Todo)

module.exports=model