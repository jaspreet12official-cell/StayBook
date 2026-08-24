# StayBook 🏨

**Hotel Room Booking & Management REST API**

StayBook is a backend-only REST API for managing hotel rooms and bookings. It handles room availability, booking creation, date validation, price calculation, and booking cancellation.

## 🚀 Features

* Room management
* Room availability by check-in/check-out dates
* Booking creation
* Double-booking prevention
* Automatic price calculation
* Booking details with room information
* Booking cancellation
* Input validation & error handling
* MongoDB with Mongoose

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

## 📌 Main APIs

```text
POST   /api/rooms
GET    /api/rooms
GET    /api/rooms/available

POST   /api/bookings
GET    /api/bookings
GET    /api/bookings/:id
PATCH  /api/bookings/:id/cancel
```

## ⚙️ Setup

```bash
npm install
npm run dev
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

## 🎯 Core Booking Flow

```text
Search Available Rooms
        ↓
Select Room
        ↓
Enter Dates
        ↓
Check Availability
        ↓
Calculate Price
        ↓
Create Booking
        ↓
Confirm Booking
```

## 👩‍💻 Author

**Jaspreet Kaur**
