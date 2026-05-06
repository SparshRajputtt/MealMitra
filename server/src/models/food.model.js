import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Food name is required"],
        trim: true,
    },

    protein: {
        type: Number,
        required: [true, "Protein content is required"],
        min: [0, "Protein must be a positive number"],
    },

    unit: {
        type: String,
        default: "",
        trim: true,
    }
}, {
    timestamps: true,
});

const foodModel = mongoose.models.Food || mongoose.model("Food", foodSchema);

export default foodModel;