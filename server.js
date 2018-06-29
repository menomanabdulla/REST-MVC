
const express = require('express')
const app  = express()
const PORT = process.env.PORT||3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://menomanabdulla:noman123321BAPPY@ds121861.mlab.com:21861/rest-mvc')
  .then(res => console.log(`DB Connected`))
  .catch(err=>console.log(err))
  //.catch(err => console.log(`${err}`))
  //mongodb://<dbuser>:<dbpassword>@ds121861.mlab.com:21861/rest-mvc
//custom module import
const moviesRouter = require('./api/route/moviesRoute')

//middlewire
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/movies',moviesRouter)


app.post('/',(req,res)=>{
    const person = {
        "name": req.body.name,
        "email": req.body.email
    }

    res.status(201).json({
        msg: 'Data Recived Successfully',
        data: {
            person
        }
    })

})
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.json({
        message: 'hello world'
    })
})