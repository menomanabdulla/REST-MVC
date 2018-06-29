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
    res.json({
        message: 'single movie get route from controller'
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
    res.json({
        message: 'single movie patch route from controller'
    })
}
module.exports.deleteController = (req,res,next)=>{
    res.json({
        message: 'single movie delete route from controller'
    })
}