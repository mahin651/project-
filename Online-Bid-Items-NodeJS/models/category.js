const mongoose = require('./db.js');
    const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type:String, required: true, default: 'default'}
},
{ collection: 'categories' });

let Categories = mongoose.model('categories', categorySchema);

module.exports = Categories;