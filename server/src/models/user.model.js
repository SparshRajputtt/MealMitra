import mongoose from 'mongoose';

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [regex, "Please enter a valid email address"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
        trim: true,
        select: false,
    },

    weight: {
        type: Number,
        required: [true, "Weight is required"],
        min: [0, "Weight must be a positive number"],
    },

    height: {
        type: Number,
        required: [true, "Height is required"],
        min: [0, "Height must be a positive number"],
    },

    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [0, "Age must be a positive number"],
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        default: "Male",
        trim: true,
    },

    dietType: {
        type: String,
        required: [true, "Diet type is required"],
        enum: ["Vegetarian", "Non-Vegetarian", "Vegan"],
        default: "Vegetarian",
        trim: true,
    },

    proteinGoal: {
        type: Number,
        required: [true, "Protein goal is required"],
        min: [0, "Protein goal must be a positive number"],
    },

    activityLevel: {
        type: String,
        required: [true, "Activity level is required"],
        enum: ["Sedentary", "Lightly Active", "Moderately Active", "Very Active", "Extra Active"],
        default: "Sedentary",
        trim: true,
    }
}, {
    timestamps: true,
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;