
const express = require('express')
const app  = express()
const PORT = process.env.PORT||3000

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