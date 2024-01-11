const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {    
        type: String,
        required: true,
        trim:true,
        min: 3,
        max: 50,
    },
    email: { 
        type: String,
        required: true,
        trim:true,
        min: 3,
        max: 20,
    },
    name: {
        type: String,
        trim:true,
        max: 50,
    },
    password: {
        type: String,
       
        trim:true,
        min: 6,
        
    },
    avatar: {
        type: String,
        default: "",
    },
    friends: [{}],

    favorites: [{}],

    library: [{}],
    
    dateCreated: {
        type: Date,
        default: Date.now
      }
},
{
    toJSON: {
      virtuals: true,
      timestamp: true,
    },
    id: false,
  }
);





module.exports = mongoose.model("User", UserSchema)