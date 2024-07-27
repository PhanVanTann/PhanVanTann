const course = require('../models/course')
const {mutipleMongooseToObject }= require('../../util/mongose')
class SitesController {
  //[GET ] /home
  index(req, res,next) {

    course.find({}) 
    .then(courses =>{

      res.render('home',{courses: mutipleMongooseToObject(courses)})
    }) 
    .catch(next)
   // res.render('home');
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SitesController();
