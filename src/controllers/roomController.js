
import Room from "../models/Room.js";

export const createRoom = async(req, res) => {
try{
 const room = await Room.create(req.body);
   res.status(201).json({
      success: true,
      message: "Room created successfully",
      room,
    });
}
catch(error){
    res.status(500).json({
      success: false,
      message: error.message,
    }); 
}
}
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAvailableRooms = async (req, res) => {
  try {
    const rooms = await Room.find({
      isActive: true,
    });

    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};