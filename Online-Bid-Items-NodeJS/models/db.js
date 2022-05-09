const mongoose = require('mongoose');
try {
    (async ()=>{
        await mongoose.connect('mongodb+srv://new:mahin651@cluster0.ivduc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
}catch(err){
    console.log(err);
}


module.exports = mongoose;