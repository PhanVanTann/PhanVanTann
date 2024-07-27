const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongoosedelete = require('mongoose-delete')


const Schema = mongoose.Schema
const course = new Schema({
    name: {type: String ,required: true},
    description: {type: String },
    img: {type: String },
    slug: { type: String, slug: 'name', unique: true },
    videoID:{type: String,required: true },
    lever:{type: String}
  },
{timestamps:true});

mongoose.plugin(slug)
course.plugin(mongoosedelete,{
  deletedAt: true,
  overrideMethods: 'all',
})
module.exports=mongoose.model('course',course)