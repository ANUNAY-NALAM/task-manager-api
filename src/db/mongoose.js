const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: false
})
// const mongoose =require('mongoose')
// const validator=require('validator')
// mongoose.connect(process.env.MONGODB_URL,{
//    useNewUrlParser:true,
//    useCreateIndex:true,
//    useUnifiedTopology:true,
//    useFindAndModify:false
// })



