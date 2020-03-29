module.exports = app=>{
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://localhost/node-vue-moba',{useNewUrlParser: true,useUnifiedTopology: true})

    require('require-all')(__dirname+'/../models')

    
}