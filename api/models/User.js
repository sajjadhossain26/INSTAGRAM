
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true   
    },
    email: {
        type: String,
        required: true,
        trim :true,
        unique: true
    },
    cell : {
        type: String,
    },
    age : {
        type: Number,
       
    },
    gender : {
        type: String
    },
    username : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        trim: true,
    },
    photo : {
        type: String,
    },
    isVerified : {
        type: Boolean,
        default: false
    },
    isAdmin : {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },
    trash: {
        type: Boolean,
        default: false
    }
    
},{
    timestamps: true
}) 

export default mongoose.model('User', userSchema)