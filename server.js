import express from "express"
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"

const app = express()
const PORT = 3000 // Hardcoded PORT number
const MONGODB_URI = "mongodb://localhost:27017/" // Hardcoded MongoDB connection string

// Middleware
app.use(express.json())

// Routes
app.use("/api", userRoutes)

// Error handling middleware
app.use(errorHandler)

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
app.use((req, res, next) => {
    console.log(req.method);
    next();
})
