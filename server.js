
const express = require('express')
const app  = express()
const PORT = process.env.PORT||3000

const mongoose = require('mongoose')

//db connection
mongoose.connect('mongodb://localhost/rest-mvc');
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('err',err=>{
    console.log(err)
})
db.once('open',()=>console.log('Database Conncected'))
//custom module import
const moviesRouter = require('./api/route/moviesRoute')

//middlewire
app.use('/api/movies',moviesRouter)


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.json({
        message: 'hello world'
    })
})