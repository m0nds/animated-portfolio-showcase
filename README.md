# Monds. | Portfolio

A modern, animated portfolio website showcasing my work as a Software Engineer. Built with React, TypeScript, and Three.js, featuring smooth animations, 3D elements, and an interactive user experience.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)

## ✨ Features

- **3D Hero Section** - Interactive 3D scene built with Three.js and React Three Fiber
- **Animated Sections** - Smooth scroll-triggered animations using Framer Motion
- **Custom Cursor** - Unique cursor experience that follows user interaction
- **Spotify Integration** - Live Spotify widget displaying currently playing track
- **Project Showcase** - Organized display of professional projects and personal projects with tabs
- **Responsive Design** - Fully responsive layout optimized for all devices
- **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- **Smooth Navigation** - Smooth scrolling navigation with active section highlighting
- **Resume Download** - Direct download functionality for resume PDF

## 🚀 Tech Stack

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server

### 3D & Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Framer Motion** - Animation library
- **GSAP** - Advanced animation library

### Additional Libraries
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Spotify Web API** - Spotify integration
- **Lucide React** - Icon library

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd animated-portfolio-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
animated-portfolio-showcase/
├── public/
│   ├── monds.png          # Portfolio image/icon
│   ├── favicon.ico        # Favicon
│   └── robots.txt         # SEO robots file
├── src/
│   ├── assets/            # Static assets (resume, music, etc.)
│   ├── components/        # React components
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── CustomCursor.tsx # Custom cursor component
│   │   ├── Hero3D.tsx     # 3D hero section
│   │   ├── Navigation.tsx # Navigation bar
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── SpotifyWidget.tsx # Spotify integration
│   │   └── ui/            # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎨 Key Components

### Hero3D
Interactive 3D hero section featuring Three.js animations and particle effects.

### Projects
Tabbed interface displaying:
- **Projects** - Professional work and contributions
- **Personal Projects** - Personal side projects with live and GitHub links

### About
Personal introduction and expertise showcase with animated text effects.

### Contact
Contact information, social links, and resume download functionality.

### SpotifyWidget
Real-time Spotify integration showing currently playing track (requires Spotify API setup).

## 🔧 Configuration

### Spotify Integration (Optional)

To enable Spotify widget, you'll need to:
1. Create a Spotify app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Configure environment variables (if needed)
3. Update the SpotifyWidget component with your credentials

### Customization

- **Colors & Theme**: Edit `tailwind.config.ts` for theme customization
- **Content**: Update component files in `src/components/` to modify content
- **Projects**: Edit project data in `Projects.tsx`
- **Resume**: Replace `src/assets/RAY RESUME.pdf` with your resume

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder will contain the production-ready files.

### Deploy to Vercel/Netlify

1. Push your code to GitHub
2. Import the repository to Vercel/Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

### Environment Variables

No environment variables are required for basic functionality. Add them if you need Spotify integration or other API services.

## 📝 License

This project is private and personal. All rights reserved.

## 👤 Author

**Raymond Elegbede**

- Portfolio: [monds-portfolio.netlify.app](https://monds-portfolio.netlify.app)
- GitHub: [@m0nds](https://github.com/m0nds)
- LinkedIn: [raymond-elegbede](https://www.linkedin.com/in/raymond-elegbede-40a446195/)
- Twitter: [@m0nds_](https://twitter.com/m0nds_)
- Email: elegbede.raymond@gmail.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Three.js](https://threejs.org/) for 3D graphics capabilities
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Vite](https://vitejs.dev/) for the excellent development experience

---

⭐ If you like this portfolio, feel free to star the repository!
