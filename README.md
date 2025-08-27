# ��️ Mood Food - Match Your Mood to Your Food

A delightful web application that suggests food based on your current mood. Built with React, Node.js, and PostgreSQL, featuring a beautiful UI with dark/light theme support.

![Mood Food App](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
## images
<div align="center">
   <img width="700" height="600" alt="Screenshot from 2025-08-23 00-08-24" src="https://github.com/user-attachments/assets/73fe9240-9cf5-4c64-945d-b23faefb3472" />

<img  width="700" height="600" alt="Screenshot from 2025-08-23 00-08-05" src="https://github.com/user-attachments/assets/7905b96e-2c51-4ff4-93b0-bec594a03df8" />
</div>
---
## ✨ Features

- **Mood-Based Food Suggestions**: Select your mood and get personalized food recommendations
- **Beautiful UI/UX**: Modern, responsive design with smooth animations
- **Dark/Light Theme**: Toggle between dark and light themes
- **User Authentication**: Secure signup/signin with JWT tokens
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Real-time Feedback**: Interactive mood selection with instant food suggestions

## 🚀 Live Demo

[View Live Demo](https://eato-moji-avinash55os-projects.vercel.app/)

---


## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Router DOM 7.7.1** - Client-side routing
- **Heroicons** - Beautiful SVG icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js 5.1.0** - Web application framework
- **PostgreSQL** - Relational database
- **Postgres.js** - PostgreSQL client for Node.js
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

### Database
- **PostgreSQL** with SSL support
- **Mood-Food Mapping** system for intelligent suggestions



## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avinash55o/EatoMoji.git
   cd EatoMOji
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**

   Create `.env` file in the `server` directory:
   ```env
   PORT=4000
   DATABASE_URL=supabase url
   JWT_SECRET=your-super-secret-jwt-key-here
   ```

   Create `.env` file in the `client` directory:
   ```env
   VITE_API_URL=http://localhost:4000
   ```

4. **Set up the database**
   ```bash
   cd server
   # Run the database migration
   node scripts/run-migration.js
   ```

5. **Start the development servers**
   ```bash
   # Start backend server (from server directory)
   npm start

   # Start frontend server (from client directory)
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000

## ��️ Database Schema

The application uses the following database tables:

- **users**: User authentication and profile data
- **moods**: Available mood options
- **foods**: Food items with categories and calories
- **mood_food_mapping**: Relationship between moods and food suggestions

## �� API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/user` - Get user profile

### Core Features
- `GET /api/moods` - Get all available moods
- `GET /api/foods` - Get all food items
- `GET /api/suggestions/:mood_id` - Get food suggestions for a mood

## �� Features in Detail

### Mood Selection
- Interactive mood cards with emojis
- Real-time food suggestions
- Responsive grid layout

### Food Suggestions
- Curated food recommendations based on mood
- Food details including calories and categories
- Beautiful food cards with images

### User Experience
- Smooth animations and transitions
- Loading states and error handling
- Responsive design for all devices
- Dark/light theme toggle


### Frontend (Vercel)
The frontend is configured for Vercel deployment with client-side routing support.

### Backend (Render)
The backend  is on Render

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
---

Made with ❤️ by Avinash Boruah
