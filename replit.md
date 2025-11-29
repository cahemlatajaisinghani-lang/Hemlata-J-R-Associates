# Overview

This is a professional website for **Hemlata J R & Associates**, a chartered accountancy firm. The application is a single-page website showcasing the firm's services, expertise, team information, and contact details. Built with React and TypeScript on the frontend with Express.js serving the backend, it follows modern web development practices with a focus on professional design adhering to ICAI (Institute of Chartered Accountants of India) branding guidelines.

The website features sections for:
- Hero/landing page with firm introduction
- About section with partner information
- Services showcase (Audit, Tax, GST, Company Law, etc.)
- Resources/knowledge center with articles and regulatory links
- Contact form and office information

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter (lightweight React router alternative).

**State Management**: TanStack Query (React Query) v5 for server state management and caching. No global state management library is used - component state and React Query handle all state needs.

**Styling Approach**: 
- Tailwind CSS for utility-first styling
- Shadcn/ui component library (New York style variant) for pre-built, accessible UI components
- Custom CSS variables defined in `index.css` for ICAI-compliant color scheme
- Design system enforces strict ICAI color compliance: Primary Blue (#004062) and Accent Green (#65AC4C)

**UI Components**: Extensive use of Radix UI primitives through Shadcn/ui including dialogs, popovers, form controls, navigation menus, etc. All components support dark mode through CSS variables (though current implementation uses light mode).

**Animations**: Framer Motion for declarative animations and transitions throughout the application.

**Form Handling**: React Hook Form with Zod schema validation via @hookform/resolvers.

## Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Build Strategy**: ESBuild bundles the server code with selective dependency bundling (allowlist approach) to optimize cold start times by reducing file system calls.

**Development vs Production**:
- Development: Vite dev server with HMR (Hot Module Replacement) middleware integrated into Express
- Production: Vite pre-builds static assets, Express serves from `dist/public`

**API Structure**: RESTful API design with all routes prefixed with `/api`. The routes are registered in `server/routes.ts` but currently contains minimal implementation (starter template).

**Storage Interface**: Abstracted storage layer (`server/storage.ts`) with in-memory implementation (MemStorage) for user data. Designed to be swappable with database implementation.

## Data Layer

**ORM**: Drizzle ORM configured for PostgreSQL with Neon Database serverless driver (@neondatabase/serverless).

**Schema Definition**: Type-safe schema defined in `shared/schema.ts` using Drizzle's PostgreSQL table definitions. Currently includes a `users` table with UUID primary keys.

**Schema Validation**: Drizzle-Zod integration for runtime validation matching database schema.

**Migration Strategy**: Drizzle Kit handles schema migrations with `db:push` command. Migration files output to `./migrations` directory.

**Current Implementation**: While Drizzle/Postgres is configured, the active storage layer uses in-memory storage (MemStorage class). The application is designed to easily swap to database-backed storage by implementing the IStorage interface with Drizzle queries.

## External Dependencies

**Database**: 
- Neon Database (serverless PostgreSQL) configured but not actively used
- Connection via DATABASE_URL environment variable
- Drizzle ORM as the query builder and schema manager

**UI Component Libraries**:
- Radix UI (comprehensive primitive component collection)
- Shadcn/ui (opinionated component implementations built on Radix)
- Lucide React (icon library)
- React Icons (additional icons, specifically for LinkedIn)

**Development Tools**:
- Replit-specific plugins for development (vite-plugin-runtime-error-modal, cartographer, dev-banner)
- TypeScript for type safety across frontend and backend
- ESBuild for server bundling
- Vite for frontend bundling and dev server

**Font Resources**: Google Fonts integration for Inter, Architects Daughter, DM Sans, Fira Code, and Geist Mono (configured in HTML but primary usage is Inter for professional appearance).

**Currently Unused But Configured**:
- Session management dependencies (express-session, connect-pg-simple, memorystore)
- Authentication (passport, passport-local)
- Email (nodemailer)
- Payment processing (Stripe)
- AI services (OpenAI, Google Generative AI)
- File handling (Multer)
- Excel processing (XLSX)
- WebSockets (ws)

These dependencies suggest the template is designed for expansion into a full-featured application with user authentication, payment processing, and other common web app features.