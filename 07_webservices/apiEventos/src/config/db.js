const mongoose = require("mongoose")
module.exports = mongoose.connect(
    'mongodb+srv://henrique:14367496@cluster0.9idgy.mongodb.net/henrique?retryWrites=true&w=majority',{
   useNewUrlParser:true,
   useUnifiedTopology: true
});