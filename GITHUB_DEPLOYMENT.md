# Hemlata J R & Associates - GitHub Deployment Guide

## Quick Start for GitHub

### Step 1: Download Your Project from Replit
1. Click the **Files** icon in the left sidebar
2. Right-click the root folder and select **Download as zip**
3. Extract the zip file to your computer

### Step 2: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `hemlata-jr-associates` (or your preferred name)
3. **DO NOT** initialize with README, .gitignore, or license (you already have these)
4. Click **Create repository**

### Step 3: Push Your Code to GitHub
Open your terminal and run these commands:

```bash
# Navigate to your project directory
cd path/to/extracted-project

# Initialize git (if not already done)
git init

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/hemlata-jr-associates.git

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Professional website for Hemlata J R & Associates"

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Project Structure

```
hemlata-jr-associates/
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/      # Website pages
│   │   ├── components/ # React components
│   │   ├── lib/        # Utilities (TanStack Query setup)
│   │   ├── hooks/      # Custom hooks
│   │   └── index.css   # Global styles & colors
│   └── public/         # Static assets
├── server/             # Express backend
│   ├── index.ts        # Server entry
│   ├── routes.ts       # API routes
│   └── storage.ts      # Data storage interface
├── shared/             # Shared types
│   └── schema.ts       # Data models & Zod schemas
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind CSS config
└── vite.config.ts      # Vite bundler config
```

## Environment Setup for Local Development

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com))

### Installation

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/hemlata-jr-associates.git
cd hemlata-jr-associates

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will run at `http://localhost:5000`

## Deployment Options for GitHub

### Option 1: Deploy to Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Framework preset: **Other**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

### Option 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site**

### Option 3: Deploy to GitHub Pages
1. Update `vite.config.ts`:
   ```typescript
   export default {
     base: '/hemlata-jr-associates/', // Replace with your repo name
     // ... rest of config
   }
   ```
2. Run: `npm run build`
3. Push changes to GitHub
4. Go to repository **Settings** → **Pages**
5. Set source to `gh-pages` branch
6. Your site will be live at `https://YOUR_USERNAME.github.io/hemlata-jr-associates`

## Key Features

✅ **Professional Design** - Modern, SEO-optimized website
✅ **Responsive** - Works on desktop, tablet, and mobile
✅ **Animations** - Smooth scroll effects throughout
✅ **SEO Ready** - Meta tags, schema markup, Open Graph
✅ **Social Integration** - Instagram, LinkedIn, WhatsApp contact
✅ **Testimonials** - Client reviews section
✅ **Regulatory Links** - 15+ government websites
✅ **ICAI Compliant** - Professional guidelines adherence

## Customization Guide

### Update Firm Information
Edit `client/src/pages/Home.tsx`:
- Firm name, description, address, phone, email
- Contact links and hours
- Social media URLs

### Update Services
Edit `client/src/components/Services.tsx`:
- Add/remove service categories
- Update service descriptions
- Modify service icons

### Update Team Information
Edit `client/src/components/About.tsx`:
- Professional overview
- Professional journey entries
- Core capabilities
- Team values

### Update Reviews
Edit `client/src/components/ReviewManager.tsx`:
- Modify `DEFAULT_REVIEWS` array
- Add new client testimonials
- Update star ratings

### Customize Colors
Edit `client/src/index.css`:
- Replace color variables in `:root` section
- Update dark mode colors in `.dark` section
- All Tailwind colors automatically sync

## Build & Deployment Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Type checking
npm run typecheck

# Format code (if available)
npm run format
```

## Important Notes

⚠️ **Environment Variables** - Currently using in-memory storage (no database required)
⚠️ **Instagram Token** - If needed, obtain from Instagram Developer Portal
⚠️ **WhatsApp** - Ensure phone number is active and verified
⚠️ **Google My Business** - Update with your actual business details

## Support & Resources

- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **Vercel Deployment**: https://vercel.com/docs

## Next Steps

1. ✅ Download project from Replit
2. ✅ Create GitHub repository
3. ✅ Push code using git commands above
4. ✅ Choose deployment platform (Vercel recommended)
5. ✅ Deploy and share your live website

---

**Happy Coding!** 🚀

For questions or issues with your deployment, check the documentation links above or contact platform support.
