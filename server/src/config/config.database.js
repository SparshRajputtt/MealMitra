import mongoose from 'mongoose';
import config from './config.config.js';
import foodModel from '../models/food.model.js';

const seedFoods = async () => {
  const count = await foodModel.countDocuments();
  if (count > 0) return;

  const foodItems = [
    { name: "1 Egg", protein: 6, unit: "per egg" },
    { name: "1 Bowl Dal", protein: 8, unit: "per 250ml bowl" },
    { name: "2 Roti", protein: 6, unit: "per 2 rotis" },
    { name: "100g Paneer", protein: 18, unit: "per 100g" },
    { name: "1 Glass Milk", protein: 8, unit: "per 250ml glass" },
    { name: "100g Chicken Breast", protein: 31, unit: "per 100g" },
    { name: "1 Cup Curd", protein: 11, unit: "per 200g cup" },
    { name: "1 Bowl Rajma", protein: 9, unit: "per 250ml bowl" },
    { name: "1 Bowl Chhole", protein: 9, unit: "per 250ml bowl" },
    { name: "1 Scoop Whey Protein", protein: 25, unit: "per scoop" },
    { name: "100g Soya Chunks", protein: 52, unit: "per 100g dry" },
    { name: "2 Bread Slices", protein: 5, unit: "per 2 slices" },
  ];

  await foodModel.insertMany(foodItems);
  console.log('Food data seeded successfully.');
};

export const connectDB = async () => {
    try{
        await mongoose.connect(config.MONGO_URI);
        console.log('MongoDB is connected...');
        await seedFoods();
    } catch(err){
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // Exit process with failure
    }
}