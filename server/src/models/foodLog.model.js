import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User ID is required"],
    },

    foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
        required: [true, "Food ID is required"],
    },

    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [0, "Quantity must be a positive number"],
    },

    totalProtein: {
        type: Number,
        required: [true, "Total protein is required"],
        min: [0, "Total protein must be a positive number"],
    },

    date: {
        type: Date,
        default: () => new Date().setHours(0 ,0, 0, 0),
    },
}, {
    timestamps: true,
});

const foodLogModel = mongoose.models.FoodLog || mongoose.model("FoodLog", userSchema);

export default foodLogModel;