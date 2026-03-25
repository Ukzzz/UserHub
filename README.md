# UserHub | Professional CRUD Application

**UserHub** is a modern, responsive, and full-featured User Management system built with Node.js, Express, and MongoDB. It features a premium design system, an MVC architecture, and a seamless user experience.

![UserHub Logo](https://img.shields.io/badge/UserHub-Professional-indigo)
![Node.js](https://img.shields.io/badge/Node.js-v16+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38b2ac)

## ✨ Features

- 🎨 **Premium UI/UX**: Sophisticated Design System using Tailwind CSS and Outfit typography.
- 🌓 **Dynamic Themes**: Built-in Light and Dark modes with seamless transitions.
- 🏗️ **MVC Architecture**: Clean separation of concerns with dedicated Controllers and Models.
- 🧩 **Modular Components**: Reusable EJS partials for high maintainability.
- ⚡ **Full CRUD**: Create, Read, Update, and Delete users with real-time feedback.
- 🛡️ **Robust Validation**: Schema-level validation and professional error handling.
- 🖼️ **Avatar Support**: Dynamic profile image handling with fallbacks.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account (Atlas or local)

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   API_KEY=your_mongodb_connection_string
   PORT=3001
   ```
4. Start the application:
   ```bash
   npm start
   ```

## 📁 Project Structure

```text
├── controllers/       # Business logic for routes
├── models/            # Mongoose schemas (User)
├── public/            # Static assets
│   ├── css/          # Modern Design System (style.css)
│   └── js/           # Centralized theme logic (main.js)
├── views/             # EJS templates
│   ├── partials/     # Reusable UI components (navbar, footer, etc.)
│   ├── home.ejs      # Registration Page
│   ├── read.ejs      # User Database
│   └── edit.ejs      # User Update Page
├── app.js             # Application entry point
├── db.js              # Database connection logic
└── package.json       # Project dependencies
```

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB & Mongoose
- **Frontend**: EJS, Tailwind CSS, Lucide Icons
- **Design**: Google Fonts (Outfit), Custom Glassmorphism CSS

## 📝 License
This project is licensed under the MIT License.
