// index.js
import express from 'express';
import connectDB from './config/db.js';
import { router as userRouter } from './routes/userRoutes.js';
import { router as quoteRouter } from './routes/quoteRoutes.js';
import todoRouter from './routes/todoRoutes.js'; // Default import for todos

import cors from 'cors';

const port = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
connectDB();  // Connect to MongoDB

// Routes
app.use('/api/users', userRouter);
app.use('/api/quotes', quoteRouter);
app.use('/api/todos', todoRouter); // <-- Add the todoRouter

// Basic endpoint to check if the server is working
app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
