const course = require('../models/course')
const {mutipleMongooseToObject }= require('../../util/mongose')
class MeeController {

  //[GET ] /me//store/courses
  storeCourses(req, res,next) {
    course.find({})
    .then(courses =>  res.render('me/stored-courses', {
      courses: mutipleMongooseToObject(courses)
  }))
   .catch(next)
  }

  
  //[GET] /me/trash/courses
  trashCourses(req, res, next){
    course.findWithDeleted({deleted:true})
    .then(courses =>  res.render('me/trash-courses', {
      courses: mutipleMongooseToObject(courses)
  }))
   .catch(next)
}


}



module.exports = new MeeController();
