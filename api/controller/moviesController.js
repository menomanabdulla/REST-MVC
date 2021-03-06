const Movie  = require('../module/movieModel')

module.exports.getallController =  (req,res,next)=>{
    Movie.find()
    .then(data=>{
        res.json({
            msg: 'All Moview List',
            lenght: data.length,
            data
        })
    })
    .catch(err=>{
        res.json({
            msg: 'error occured'
        })
    })
}
module.exports.getSingleController = (req,res,next)=>{
    const id = req.params.id
    Movie.findOne({_id:id})
    .then(data=>{
        res.json({
            msh: 'Single Movie List',
            data
        })
    })
    .catch(err=>{
        res.json({
            msg : 'Error Occured'
        })
    })
}
module.exports.postController = (req,res,next)=>{
   const movie = new Movie({
    name: req.body.name,
    year: req.body.year,
    director: req.body.director,
    catagory: req.body.catagory,
    duration: req.body.duration
   })
   movie.save()
   .then(data=>{
       console.log(data)
       res.status(201).json({
           msg: 'Successfully added',
           movie: data
       })
   })
   .catch(err=>{
       condole.log(err)
       rest.status(500).josn({
           msg: 'Error occired'
       })
   })

}
module.exports.patchController = (req,res,next)=>{
   const  id =  req.params.id
   Movie.findByIdAndUpdate(id,{$set:{
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        catagory: req.body.catagory,
        duration: req.body.duration
   }})
   .then(data=>{
       console.log(data)
       res.json(data)
   })
   .catch(err=>{
       console.log(err)
       res.json({
           err
       })
   })

}
module.exports.deleteController = (req,res,next)=>{
    res.json({
        message: 'single movie delete route from controller'
    })
    
}