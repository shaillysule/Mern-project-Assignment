# MERN Project - Frontend

Modern, responsive portfolio/agency website built with React.js featuring dynamic content management, image uploads, and a full-featured admin panel.

##  Live Demo

**Website:** [https://your-frontend.vercel.app](https://your-frontend.vercel.app)  
**Admin Panel:** [https://your-frontend.vercel.app/admin](https://your-frontend.vercel.app/admin)

## Features

### Landing Page
-  Modern hero section with gradient background
-  Dynamic projects showcase
-  Client testimonials with reviews
-  Contact form with validation
-  Newsletter subscription
-  Responsive design (mobile, tablet, desktop)
-  Smooth animations and hover effects

### Admin Panel
-  Add/Manage projects with image upload
-  Add client testimonials with profile pictures
-  View contact form submissions
-  View newsletter subscribers
-  Delete projects functionality
-  Image preview before upload
-  Success/Error notifications

##  Tech Stack

- **Framework:** React.js (Create React App)
- **HTTP Client:** Axios
- **Styling:** Inline CSS with modern design patterns
- **Routing:** React Router DOM
- **State Management:** React Hooks (useState, useEffect)
- **Form Handling:** Controlled components

##  Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── admin/
│   │   │   ├── AddProject.jsx
│   │   │   ├── AddClient.jsx
│   │   │   ├── ManageProjects.jsx
│   │   │   ├── ViewContacts.jsx
│   │   │   └── ViewSubscribers.jsx
│   │   ├── ProjectSection.jsx
│   │   ├── ClientsSection.jsx
│   │   ├── ContactForm.jsx
│   │   └── NewsletterSection.jsx
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   └── AdminPanel.jsx
│   ├── config.js
│   ├── App.js
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary:** `#7C3AED` (Purple)
- **Secondary:** `#EC4899` (Pink)
- **Dark:** `#1F2937`
- **Light:** `#F9FAFB`

### Typography
- **Headings:** Bold, modern sans-serif
- **Body:** Clean, readable text
- **Spacing:** Consistent padding and margins

### Components
- Gradient backgrounds
- Card-based layouts
- Hover animations
- Shadow effects
- Rounded corners

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/mern-frontend.git
cd mern-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Create `.env` file**
```env
REACT_APP_API_URL=http://localhost:5000
```

4. **Start development server**
```bash
npm start
```

Application will run on `http://localhost:3000`

## 🌐 Deployment

### Deploy on Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Import on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Configure:
  - Framework Preset: Create React App
  - Build Command: `npm run build`
  - Output Directory: `build`

3. **Add Environment Variable**
```
Key: REACT_APP_API_URL
Value: https://your-backend.onrender.com
```

4. **Deploy**
- Click "Deploy"
- Wait 2-3 minutes
- Your site is live!

## 📡 API Integration

### Configuration

**File:** `src/config.js`
```javascript
export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
```

### Usage Example

```javascript
import { API_URL } from '../config';
import axios from 'axios';

// Fetch projects
axios.get(`${API_URL}/api/projects`)
  .then(res => setProjects(res.data))
  .catch(err => console.log(err));

// Submit form
axios.post(`${API_URL}/api/contacts`, formData)
  .then(res => console.log('Success'))
  .catch(err => console.log('Error'));
```

## 🎯 Component Overview

### Landing Page Components

**ProjectSection.jsx**
- Displays all projects from backend
- Card layout with images
- "Read More" buttons
- Responsive grid

**ClientsSection.jsx**
- Client testimonials
- Profile pictures
- Quotes and designations
- Hover effects

**ContactForm.jsx**
- Full name, email, mobile, city
- Form validation
- Success/error messages
- API integration

**NewsletterSection.jsx**
- Email subscription
- Gradient background
- Success feedback

### Admin Panel Components

**AddProject.jsx**
- Image upload with preview
- Project name and description
- FormData handling
- Real-time feedback

**AddClient.jsx**
- Client photo upload
- Name, designation, testimonial
- Image preview (circular)
- Success notifications

**ManageProjects.jsx**
- View all projects
- Delete functionality
- Confirmation dialogs

**ViewContacts.jsx**
- Display contact submissions
- Sortable by date
- Detailed information

**ViewSubscribers.jsx**
- List newsletter subscribers
- Email addresses
- Subscription dates

## 🔐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `http://localhost:5000` |

**Note:** Environment variables must start with `REACT_APP_` in Create React App.

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "axios": "^1.6.2"
}
```

## 🔧 Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run eject      # Eject from Create React App
```

## 📱 Responsive Design

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

All components are fully responsive with flexbox and appropriate breakpoints.

## 🎨 Styling Approach

Using **inline styles** with:
- Consistent design tokens
- Reusable style objects
- Hover state handling
- Transition effects

Example:
```javascript
const cardStyle = {
  padding: '20px',
  background: '#fff',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease'
};
```

## 🐛 Troubleshooting

### API Connection Issues
- Verify `REACT_APP_API_URL` is correct
- Check backend is running
- Inspect browser console for errors
- Verify CORS is configured on backend

### Build Issues
- Clear `node_modules` and reinstall: `npm install`
- Clear cache: `npm start -- --reset-cache`
- Check for dependency conflicts

### Image Upload Issues
- Verify FormData is used correctly
- Check file size limits
- Ensure `multipart/form-data` header

## 🚀 Performance Optimization

- Lazy loading for images
- Code splitting with React.lazy
- Memoization with useMemo/useCallback
- Optimized re-renders

## 📄 License

MIT License

## 👤 Author

Your Name - [GitHub Profile](https://github.com/yourusername)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 📸 Screenshots

### Landing Page
- Hero section with gradient
- Projects showcase
- Client testimonials
- Contact form

### Admin Panel
- Project management
- Client management
- Contact submissions
- Newsletter subscribers

##  Links

- **Backend Repository:** [GitHub](https://github.com/yourusername/mern-backend)
- **Live Backend API:** [Render](https://your-backend.onrender.com)
- **Documentation:** [API Docs](https://your-backend.onrender.com/api)

##  Future Enhancements

- [ ] Authentication (JWT)
- [ ] Role-based access control
- [ ] Rich text editor for descriptions
- [ ] Image gallery/carousel
- [ ] Search and filter functionality
- [ ] Pagination for projects
- [ ] Dark mode toggle
- [ ] Analytics dashboard
