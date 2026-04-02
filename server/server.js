import express from 'express';
import cors from 'cors';
import { pool } from './config/database.js';
import tripRoutes from './routes/trips.js'


// creates an express app
const app = express();

// adds express.json() middleware to parse JSON data from HTTP requests
app.use(express.json());

// adds CORS middleware to allow cross-origin requests
app.use(cors());

// /trips endpoint should use the tripRoutes router for handling requests
app.use('/trips', tripRoutes);

// creates a router handler for a GET request at / that responds with a status code 200 and an h1 element
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Welcome to On The Fly API!</h1>');
});




const PORT = process.env.port || 3001;

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Database connected successfully at:', res.rows[0].now);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
