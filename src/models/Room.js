import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["Delux", "Standard", "Suite"],
  },
  pricePerNight: {
    type: Number,
    required: true,
    min: 0,
  },
  capacity: {
    type: Number,
    required: true,
    min: 1,
  },
  isActive: {
    type: Boolean,
    default: true,
  },

},
 {
    timestamps: true,
  });

  const Room = mongoose.model("Room" ,roomSchema );
  export default Room