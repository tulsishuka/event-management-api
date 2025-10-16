const express = require('express'); 
const cors = require('cors');       

const app = express();

// Middleware
app.use(cors());         
app.use(express.json());   

// Import route handlers
const userRoutes = require('./routes/users');     
const eventRoutes = require('./routes/events');   

// Route middlewares
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

