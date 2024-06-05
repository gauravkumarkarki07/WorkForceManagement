import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import AuthRoute from './routes/authRoute.js';
import AdminRoute from './routes/adminRoute.js';
import UserRoute from './routes/userRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';
import job from "./utils/cron.js";

// Load environment variables
dotenv.config();
// request every 1 mins
job.start();

const PORT = process.env.PORT || 3000;
const DbUrl = process.env.mongoUrl;

// Connect to the database
mongoose.connect(DbUrl)
    .then(() => {
        console.log('Database is connected');
    })
    .catch((error) => {
        console.log(error);
    });

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', AuthRoute);
app.use('/api/admin', AdminRoute);
app.use('/api/user', UserRoute);



// Determine __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../wfmFrontend/dist"))); 

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../wfmFrontend/dist", "index.html")); 
    });
}

// Handle undefined routes
app.use('*', (req, res) => {
    res.status(404).json({
        message: "No Routes Found"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
