import express from "express";

import {
  createRoom,
  getRooms,
  getAvailableRooms,
} from "../controllers/roomController.js";


const router = express.Router();

router.post("/", createRoom);
router.get("/", getRooms);
router.get("/available", getAvailableRooms);

export default router;