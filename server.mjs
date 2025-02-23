import express from "express";
import mongoose from "mongoose";
import User from "./userSchema.js";

const myserverapp = express(); // Creating an instance of express application.

// Middleware for parsing JSON data in POST requests.
myserverapp.use(express.json());

const PORT = 6900;

// Start server on PORT 6900.
myserverapp.listen(PORT, () => {
    console.log(`MyServer listening on PORT:${PORT}`);
});

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("Connected to MongoDB-RESTful-API"))
    .catch((err) => console.error("Could not connect to MongoDB", err));

// Validation middleware
const validateUser = (req, res, next) => {
    const { firstName, lastName, hobby } = req.body;
    if (!firstName || !lastName || !hobby) {
        return res.status(400).json({ error: "Missing Required Fields" });
    }
    next();
};

// CRUD Operations

// Fetch the list of all users - GET /users
myserverapp.get('/users', (req, res, next) => {
    User.find().then(data => {
        if (!data) {
            return res.status(404).json({ error: "No users found" });
        }
        res.json(data);
        next();
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
});

// Fetch details of a specific user by ID - GET /users/:id
myserverapp.get('/users/:id', (req, res, next) => {
    User.findById(req.params.id).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
});

// Add a new user - POST /users
myserverapp.post('/users', validateUser, (req, res, next) => {
    const newUser = new User(req.body);
    newUser.save().then(data => {
        if (!data) {
            return res.status(696).json({ message: "Not Found deadend" });
        }
        res.status(201).json(data);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
});

// Update details of an existing user - PUT /users/:id
myserverapp.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
});

// Delete a user by ID - DELETE /users/:id
myserverapp.delete('/users/:id', (req, res, next) => {
    User.findByIdAndDelete(req.params.id).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
});