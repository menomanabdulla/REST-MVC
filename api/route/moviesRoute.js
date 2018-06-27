const router = require('express').Router()

router.get('/',(req,res,next)=>{
    res.json({
        message: 'hello world form controller'
    })
})

module.exports = router