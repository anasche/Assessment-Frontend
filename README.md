# UAE President Cup - Frontend Assessment

A modern, responsive website for the UAE President Cup horse racing series, built with React, TypeScript, and Tailwind CSS.

## 🚀 How to Run the Project

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/anasche/Assessment-Frontend.git
   cd Assessment-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components (Home, About, etc.)
├── widgets/            # Feature-specific components
│   ├── Home/           # Home page sections
│   ├── About/          # About page sections
│   ├── News/           # News page sections
│   └── ...
├── assets/             # Images and static assets
└── main.tsx           # Application entry point
```

## 🎯 Key Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: 
  - YouTube video integration with custom controls
  - Image galleries with lightbox functionality
  - Interactive sliders and carousels
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router DOM for navigation
- **Icons**: Lucide React for consistent iconography
- **Animations**: GSAP for smooth animations
- **Sliders**: Swiper.js for touch-friendly carousels

## 📋 Development Assumptions

### Design Implementation
- **Pixel-perfect accuracy**: All components match the provided design specifications exactly
- **Typography**: Used Syne font family for headings and DM Sans for body text as specified
- **Color scheme**: Implemented exact color values from design (e.g., #141473, #3C3CB6)
- **Border radius**: Applied 50px border radius for major containers as per design

### Layout & Spacing
- **Overlapping sections**: Implemented complex overlapping layouts in About page using absolute positioning
- **Responsive breakpoints**: Used standard Tailwind breakpoints (sm: 640px, md: 768px, lg: 1024px)
- **Container widths**: Used specific pixel values for desktop (994px, 807px) with responsive fallbacks

### Interactive Elements
- **Video player**: Implemented custom YouTube integration with poster images and play controls
- **Navigation**: Assumed standard web navigation patterns with hover states
- **Buttons**: Replaced standard buttons with gradient "ExploreLink" components as requested

### Content & Assets
- **Static content**: Used placeholder content for demonstration purposes
- **Images**: Assumed all images are optimized and properly sized for web delivery
- **Icons**: Used Lucide React icons for consistency and performance

### Browser Support
- **Modern browsers**: Optimized for Chrome, Firefox, Safari, and Edge (latest versions)
- **CSS features**: Used modern CSS features like CSS Grid, Flexbox, and custom properties
- **JavaScript**: Assumed ES6+ support in target browsers

### Performance Considerations
- **Code splitting**: Implemented component-based architecture for better bundle splitting
- **Image optimization**: Assumed images are properly optimized (WebP format recommended)
- **Lazy loading**: Components load efficiently with React's built-in optimizations

## 🎨 Design System

### Colors
- Primary Blue: `#141473`
- Secondary Blue: `#3C3CB6`
- Background Gray: `#f8f9fa`
- Text Gray: `#666666`

### Typography
- **Headings**: Syne font family
- **Body text**: DM Sans font family
- **Font sizes**: Responsive scaling from mobile to desktop

### Components
- **Buttons**: Gradient background with animated arrows
- **Cards**: Rounded corners (30px-50px) with subtle shadows
- **Containers**: Maximum width constraints with proper padding

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

Each component adapts its layout, typography, and spacing for optimal viewing on all devices.

## 🚀 Deployment

The project is ready for deployment to any static hosting service:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront

## 📞 Support

For any questions or issues, please refer to the project documentation or contact the development team.
