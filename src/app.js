import express from "express";
import roomRoutes from "./routes/roomRoutes.js"

const app = express();

app.use(express.json());

app.use("/api/rooms", roomRoutes);
app.get("/" , (req,res) => {
     res.json({
    success: true,
    message: "DropBox API is running 🚀"
  });
})
export default app