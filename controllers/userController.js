const User = require('../models/user');

// Render the registration page (home)
const getHome = (req, res) => {
    res.render('home');
};

// Handle user creation
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.redirect('/read');
    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
};

// List all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.render('read', { users });
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};

// Render edit form
const getEditUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.render('edit', { user });
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};

// Update user
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.redirect('/read');
    } catch (err) {
        res.status(400).send("Error: " + err.message);
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.redirect('/read');
    } catch (err) {
        res.status(500).send("Error: " + err.message);
    }
};

module.exports = {
    getHome,
    createUser,
    getUsers,
    getEditUser,
    updateUser,
    deleteUser
};
