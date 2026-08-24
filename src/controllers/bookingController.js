import Booking from "../models/Booking.js";
import Room from "../models/Room.js";

export const createBooking = async (req, res) => {
  try {
    const { room, guestName, guestEmail, checkIn, checkOut } = req.body;
    
    //1. if room is avaliable 
    const selectedRoom = await Room.findById(room)
  if (!selectedRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }
     // 2. Check if room is active
    if (!selectedRoom.isActive) {
      return res.status(400).json({
        success: false,
        message: "Room is currently unavailable",
      });
    }
      // 3. Convert dates
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
 // 4. Validate dates
    if (startDate >= endDate) {
      return res.status(400).json({
        success: false,
        message: "Check-out must be after check-in",
      });
    }
    //5. avoid overlaping
    const existingBooking = await Booking.findOne({
  room,
  status: "confirmed",
  checkIn: { $lt: endDate },
  checkOut: { $gt: startDate },
});
if (existingBooking) {
  return res.status(409).json({
    success: false,
    message: "Room is already booked for these dates",
  });
}
      // 6. Calculate number of nights
    const totalNights = Math.ceil(
      (endDate - startDate) / (1000 * 60 * 60 * 24)
    );
//7. calculate toatl price 
const totalPrice = totalNights * selectedRoom.pricePerNight

  // 8. Create booking
    const booking = await Booking.create({
      room,
      guestName,
      guestEmail,
      checkIn: startDate,
      checkOut: endDate,
      totalNights,
      totalPrice,
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("room");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("room");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};