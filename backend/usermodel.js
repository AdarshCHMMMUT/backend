import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String,required: false,trim: true,},
  firebaseUid: {type: String,required: true, unique: true,},
  email: {type: String,required: false,lowercase: true,unique: true, trim: true,},
  phone: {type: Number,required: true,unique: true,},
  dob: {type: String,required: false, },
  anniversary: {type: String,required: false,},
}, {timestamps: true,
});

const userModel =  mongoose.models.user || mongoose.model('user',customerSchema);

export default userModel;
