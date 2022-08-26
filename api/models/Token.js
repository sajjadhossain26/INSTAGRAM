

import mongoose from 'mongoose';

const tokenSchema = mongoose.Schema({
 userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
 },
 token: {
    type: String,
    required: true
 }
    
},{
    timestamps: true
}) 

export default mongoose.model('Token', tokenSchema)