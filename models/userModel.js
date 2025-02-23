import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Name is required"],
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    age:{
        type: Number,
        min:[18, "Age must be at least 18"],
        max:[100, "Age cannot exceed 100"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("User",userSchema);

export default User;