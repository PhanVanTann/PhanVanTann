const course = require('../models/course')
const {mongooseToObject}= require('../../util/mongose')
class CourseController {
  
  //
  show(req, res, next) {
    course.findOne({slug: req.params.slug})
    .then(course=>{
      res.render('courses/show',{course:mongooseToObject(course) })
   
    }
    )
    .catch(next)
  }

  //
  create(req, res, next) {
    res.render('courses/create')
  
}

//  edit ra project /courses/:id/edit
edit(req,res,next){
  course.findById(req.params.id)

      .then(course =>res.render('courses/edit', {
          course: mongooseToObject(course)
      }))
      .catch(next)
}
// PUT project
update(req, res,next) {
  course.updateOne({_id:req.params.id},req.body)
      .then(()=>res.redirect('/me/stored/courses'))

      .catch(next)
}
// delete project
delete(req, res,next) {
  course.delete({_id:req.params.id})
      .then(()=>res.redirect('back'))
      .catch(next)
}


//[Post] courses/store
store(req, res, next) {
  
  req.body.img=`https://i.ytimg.com/vi/${req.body.videoID}/maxresdefault.jpg`
 const courses=new course(req.body)
 courses.save()
.then(() =>res.redirect('/me/stored/courses'))
.catch(error=>{
})
}

//[Post] courses/:id/restore
restore(req,res,next){
  course.restore({_id:req.params.id})
      .then(()=>res.redirect('back'))
      .catch(next)
}

//[Deleted] courses/:id/force
forcedelete(req,res,next){
  course.deleteOne({_id:req.params.id})
      .then(()=>res.redirect('back'))
      .catch(next)
}

deletedall(req, res,next) {
  course.delete({_id:{$in: req.body.courseIds}})
      .then(()=>res.redirect('back'))
      .catch(next)
  
}


}
module.exports = new CourseController();
  


