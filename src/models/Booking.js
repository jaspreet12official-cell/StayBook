import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    room:{
        type:mongoose.Schema.Types.ObjectId,
         ref: "Room",
      required: true,
    },
     guestName: {
      type: String,
      required: true,
      trim: true,
    },

    guestEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
 checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },

    totalNights: {
      type: Number,
      required: true,
      min: 1,
    },  totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },

    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed",
    },
},
{
    timestamps: true,
  })


const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;