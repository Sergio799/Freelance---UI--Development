# AI-Enabled Robotic Platform Solutions

A modern, responsive web application showcasing robotics and AI solutions for manufacturing automation. Built with Next.js 16, TypeScript, and Tailwind CSS, featuring smooth animations and an elegant Michigan Technological University color scheme.

## 🎯 Project Overview

This application serves as a comprehensive platform for presenting AI-enabled robotic solutions, specifically designed for the ARM (Advanced Robotics for Manufacturing) Institute RFP TEC 25-04 response. It demonstrates expertise in robotics integration, AI/ML solutions, and manufacturing automation.

## ✨ Features

### 🎨 Design & UI
- **Tech Color Scheme**: Professional black, gold, and silver palette
- **Smooth Animations**: Custom CSS animations including fade-in, slide, float, and bounce effects
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Dropdown menus with smooth transitions and hover effects

### 🤖 Core Sections
1. **Hero Section**: Eye-catching introduction with animated geometric backgrounds
2. **Service Cards**: Four key service offerings with hover animations
   - Standardized Framework Development
   - Data Curation & Management
   - Hardware-in-Loop Testing
   - Strategic Stakeholder Engagement
3. **Technical Capabilities**: Comprehensive expertise showcase across 4 domains
   - AI & Machine Learning
   - Robotics Integration
   - Manufacturing Systems
   - Software Architecture
4. **Project Approach**: 4-phase implementation timeline with detailed deliverables
5. **Chat Widget**: Interactive floating chat interface for user engagement

### 🎭 Animations
- Staggered entrance animations for sequential content reveal
- Floating geometric shapes in hero section
- Card lift and scale effects on hover
- Icon rotations and transformations
- Smooth color transitions throughout
- Pulsing call-to-action elements

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.1](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom components with [Heroicons](https://heroicons.com/)
- **React**: Version 19.2.0 with React Compiler
- **Build Tool**: Turbopack (Next.js default)

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-nextjs-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx            # Root layout component
│   │   └── page.tsx              # Home page
│   └── components/
│       ├── Navigation.tsx        # Header with dropdown menus
│       ├── Hero.tsx              # Hero section with animations
│       ├── ServiceCards.tsx      # Service offerings grid
│       ├── TechnicalCapabilities.tsx  # Expertise showcase
│       ├── ProjectApproach.tsx   # Implementation timeline
│       └── ChatWidget.tsx        # Floating chat interface
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## 🎨 Color Palette

The application uses the Michigan Technological University color scheme:

- **Black**: `#000000` - Primary background
- **Gold**: `#FCD34D` (yellow-500) - Primary accent
- **Silver/Gray**: `#9CA3AF` - Secondary text and borders
- **Dark Gray**: `#1F2937` - Secondary backgrounds

## 🔧 Configuration

### Tailwind CSS
Custom animations are defined in `globals.css`:
- `fadeInUp`, `slideInLeft`, `slideInRight`, `slideInDown`, `slideInUp`
- `float`, `spinSlow`, `bounceIn`, `pulseSlow`, `countUp`

### Next.js
- React Compiler enabled for optimized performance
- Turbopack for faster builds
- App Router for modern routing

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
Build the production bundle:
```bash
npm run build
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Navigation
- Centered navigation menu
- Dropdown menus for Robotics, AI Solutions, Manufacturing, and Portfolio
- Mobile-responsive hamburger menu
- Smooth animations and transitions

### Hero Section
- Animated text with staggered delays
- Floating geometric shapes
- RFP information callout box
- Call-to-action button with hover effects

### Service Cards
- Grid layout (2x2 on desktop, stacked on mobile)
- Icon animations on hover
- Card lift and scale effects
- Interactive "Learn more" links

### Technical Capabilities
- 4-column grid showcasing expertise areas
- Statistics section with animated counters
- Hover effects on all cards

### Project Approach
- 4-phase timeline with deliverables
- Animated phase cards
- Call-to-action section with download button

### Chat Widget
- Floating button with pulse animation
- Expandable chat window
- Pre-defined quick response buttons
- Smooth slide-up animation

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill processes on port 3000
taskkill /F /IM node.exe

# Or use a different port
npm run dev -- -p 3001
```

### Clear Next.js Cache
```bash
# Remove .next directory
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📄 License

This project is proprietary and confidential.

## 👥 Contact

For questions or support regarding this project, please contact the development team.

## 🔗 Related Resources

- [ARM Institute](https://www.arminstitute.org/)
- [RFP TEC 25-04 Documentation](https://www.arminstitute.org/rfp)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Built with ❤️ for the ARM Institute AI Data Foundry Program**
