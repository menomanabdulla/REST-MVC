
module.exports.getallController =  (req,res,next)=>{
    res.json({
        message: 'all movie get route from controller'
    })
}
module.exports.getSingleController = (req,res,next)=>{
    res.json({
        message: 'single movie get route from controller'
    })
}
module.exports.postController = (req,res,next)=>{
    res.json({
        message: 'single movie post route from controller'
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