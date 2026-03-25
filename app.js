const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const connectDB = require('./db');
const userController = require('./controllers/userController');

// Configuration
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Database Connection
connectDB();

// Routes
app.get('/', userController.getHome);
app.post('/read', userController.createUser);
app.get('/read', userController.getUsers);
app.get('/edit/:id', userController.getEditUser);
app.put('/edit/:id', userController.updateUser);
app.delete('/read/:id', userController.deleteUser);

// Error Handling (basic)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server Initialization
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});