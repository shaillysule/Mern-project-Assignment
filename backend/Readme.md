# MERN Project - Backend API

RESTful API backend for portfolio/agency website built with Node.js, Express, MongoDB, and Multer for image uploads with automatic cropping.

## Live Demo

**Backend API:** [https://your-backend.onrender.com](https://your-backend.onrender.com)

## Features

-  RESTful API endpoints
-  MongoDB database integration
-  Image upload with automatic cropping (Sharp)
-  Projects management (CRUD)
-  Client testimonials management
-  Contact form submissions
-  Newsletter subscriptions
-  CORS enabled for frontend integration
-  Environment variables configuration

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Image Processing:** Multer + Sharp
- **File Upload:** Multipart form-data
- **CORS:** Cross-origin resource sharing enabled

##  Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   ├── clientController.js
│   │   ├── projectController.js
│   │   ├── contactController.js
│   │   └── newsletterController.js
│   ├── models/
│   │   ├── Client.js
│   │   ├── Project.js
│   │   ├── Contact.js
│   │   └── Subscriber.js
│   ├── routes/
│   │   ├── clientRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── contactRoutes.js
│   │   └── newsletterRoutes.js
│   ├── middlewares/
│   │   └── uploadMiddleware.js
│   ├── uploads/               (auto-generated)
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mern-backend.git
cd mern-backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
PORT=5000
```

4. **Start development server**
```bash
npm run dev
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Projects

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Create new project (with image) |
| DELETE | `/api/projects/:id` | Delete project by ID |

**POST Request (Form-data):**
```
name: Project Name
description: Project Description
image: [File upload]
```

**Response:**
```json
{
  "_id": "...",
  "name": "Dashboard Analytics",
  "description": "Real-time data visualization",
  "image": "/uploads/project-1234567890.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### Clients

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/clients` | Get all clients |
| POST | `/api/clients` | Create new client (with image) |

**POST Request (Form-data):**
```
name: Client Name
designation: CEO, Company Inc
description: Testimonial text
image: [File upload]
```

### Contacts

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/contacts` | Get all contact submissions |
| POST | `/api/contacts` | Submit contact form |

**POST Request (JSON):**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "city": "Mumbai"
}
```

### Newsletter

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/newsletter` | Get all subscribers |
| POST | `/api/newsletter` | Subscribe to newsletter |

**POST Request (JSON):**
```json
{
  "email": "user@example.com"
}
```

##  Image Processing

### Automatic Cropping

**Projects:** Images are automatically cropped to **700x450** (16:9 aspect ratio)
**Clients:** Images are automatically cropped to **500x500** (square)

Implementation uses **Sharp** library for high-quality image processing.

## Deployment

### Deploy on Render

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Create Web Service on Render**
- Connect GitHub repository
- Build Command: `npm install`
- Start Command: `npm start`
- Add environment variables

3. **Environment Variables on Render**
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `PORT` | Server port number | `5000` |

## Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^9.0.1",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "multer": "^1.4.5-lts.1",
  "sharp": "^0.33.1",
  "nodemon": "^3.1.11"
}
```

## 🔧 Scripts

```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
```

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify connection string format
- Check database user credentials
- Ensure IP whitelist includes `0.0.0.0/0` on MongoDB Atlas

### Image Upload Issues
- Verify `uploads/` directory exists
- Check file size limits (5MB default)
- Ensure correct `Content-Type: multipart/form-data`

### CORS Issues
- Add frontend URL to CORS whitelist in `server.js`
- Restart server after changes

## 📄 License

MIT License

## 👤 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

##  Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!
