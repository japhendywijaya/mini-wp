const mongoose = require('mongoose')
const Schema = mongoose.Schema



const articleSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: Date
})


const Article = mongoose.model('Article', articleSchema)
module.exports = Article

