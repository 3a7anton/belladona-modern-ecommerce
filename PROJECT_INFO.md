# Belladona Farin - Smooth Scrolling React App

A modern React application built with Vite, featuring smooth scrolling animations powered by GSAP, Lenis, and Framer Motion.

## 🚀 Features

- **Smooth Scrolling**: Powered by Lenis for buttery smooth scroll experiences
- **Rich Animations**: GSAP with ScrollTrigger for scroll-based animations
- **Modern React**: Built with React 19 and TypeScript
- **Fast Development**: Vite for lightning-fast builds and hot reload
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Optimized for performance and smooth animations

## 📦 Dependencies

### Core Framework
- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server

### Animation Libraries
- **GSAP**: High-performance animations with ScrollTrigger
- **Lenis**: Smooth scrolling library
- **Locomotive Scroll**: Additional smooth scrolling capabilities
- **Framer Motion**: Declarative animations for React
- **React Intersection Observer**: Efficient scroll-based triggers

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx/css     # Hero section with parallax effects
│   └── ScrollSection.tsx/css   # Reusable scroll sections
├── hooks/
│   ├── useLenis.ts             # Lenis smooth scrolling hook
│   └── useGSAP.ts              # GSAP animation hooks
├── App.tsx                     # Main application component
├── App.css                     # Global styles
└── index.css                   # Reset and base styles
```

## 🎨 Components

### HeroSection
- Full-screen hero with animated background
- Parallax scrolling effects
- Animated title and subtitle
- Scroll indicator

### ScrollSection
- Reusable section component
- Customizable background colors
- GSAP and Framer Motion animations
- Intersection Observer integration

## 🎯 Smooth Scrolling Setup

The app uses a custom `useLenis` hook that:
- Initializes Lenis with optimized settings
- Provides smooth momentum scrolling
- Works across all devices and browsers
- Integrates seamlessly with GSAP ScrollTrigger

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
