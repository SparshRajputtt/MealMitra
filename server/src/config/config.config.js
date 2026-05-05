import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

if(!process.env.MONGO_URI){
    throw new Error('MONGO_URI is not defined in the environment variables');
}

if(!process.env.PORT){
    throw new Error('PORT is not defined in the environment variables. Defaulting to 5000.');
}

if(!process.env.JWT_SECRET){
    throw new Error('JWT_SECRET is not defined in the environment variables');
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT || 5000,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config;