import app from './src/app.js';
import { connectDB } from './src/config/config.database.js';
import config from './src/config/config.config.js';

const PORT = config.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

