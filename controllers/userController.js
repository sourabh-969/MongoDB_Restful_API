import User from "../models/userModel.js";



// GET /users - Fetch all users
export function getUsers(req, res) {
    User.find().then(data => {
        if (!data) {
            return res.status(400).send("Something went wrong");
        }
        res.status(200).json(data);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
}

// GET /users/:id - Fetch a specific user
export function getUserById(req, res) {
    User.findById(req.params.id).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
}

// POST /users - Create a new user
export function createUser(req, res) {
    const newUser = new User(req.body);
    newUser.save().then(data => {
        if (!data) {
            return res.status(696).json({ message: "Not Found deadend" });
        }
        res.status(201).json(data);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
}

// PUT /users/:id - Update a user
export function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
}

// DELETE /users/:id - Delete a user
export function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.id).then(user => {
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    }).catch(err => {
        res.status(500).json({ message: "Internal Server error" });
    });
}
