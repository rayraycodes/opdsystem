# OPD System - Hospital Queue Management

A modern, accessible Hospital Outpatient Department (OPD) Queue Management System built for high-volume South Asian hospitals. Designed to reduce crowding, support assisted booking, and work reliably in low-connectivity environments.

## Live Demo

Visit the live application at: **[rayraycodes.github.io/opdsystem](https://rayraycodes.github.io/opdsystem)**

## Features

### Patient Experience
- **Real-time Queue Tracking** - Live token status with ETA ranges (e.g., "15-25 min")
- **Multi-language Support** - English, Hindi (हिंदी), and Nepali (नेपाली) with full Devanagari script support
- **Assisted Booking Mode** - Simplified interface for elderly users and those needing assistance
- **Family Wallet** - Manage multiple patient profiles under one account
- **QR Code Confirmations** - Easy check-in at hospital kiosks

### Accessibility (WCAG 2.1 AAA Compliant)
- **Elder Mode** - Larger text (18px base), simplified navigation
- **High Contrast Mode** - Enhanced color contrast ratios
- **Voice Guidance** - Screen reader optimized
- **Touch-friendly** - Minimum 48x48px touch targets

### Staff Dashboard
- Queue management and patient flow control
- Emergency interrupt handling
- Real-time analytics and wait time monitoring

### Technical Highlights
- **Offline-first Architecture** - Works in low-connectivity environments
- **Government ID Ready** - Supports ABHA (India) and Nepal Health ID integration
- **Responsive Design** - Mobile-first, works on all devices
- **Landmark Navigation** - Campus wayfinding with visual landmarks

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui + Radix UI primitives |
| Routing | React Router 7 |
| Forms | React Hook Form |
| Animations | Motion (Framer Motion) |
| Charts | Recharts |
| Icons | Lucide React |

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/rayraycodes/opdsystem.git
cd opdsystem

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Build output will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.tsx                 # Application entry point
├── app/
│   ├── App.tsx              # Main app with RouterProvider
│   ├── Root.tsx             # Root layout with AppProvider
│   ├── routes.ts            # Route configuration
│   ├── components/
│   │   ├── ui/              # shadcn/ui components (48+)
│   │   ├── figma/           # Figma-generated components
│   │   ├── DoctorCard.tsx   # Doctor listing card
│   │   ├── DepartmentCard.tsx
│   │   ├── EmergencyBanner.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   └── ...
│   ├── contexts/
│   │   └── AppContext.tsx   # Global state management
│   └── screens/
│       ├── LandingPage.tsx       # Marketing page
│       ├── EntryScreen.tsx       # Language/accessibility selection
│       ├── FindCareScreen.tsx    # Doctor/department search
│       ├── AppointmentDetailsScreen.tsx
│       ├── ConfirmationScreen.tsx
│       ├── QueueTrackingScreen.tsx
│       └── StaffDashboard.tsx
├── styles/
│   ├── index.css            # Main entry
│   ├── theme.css            # Design tokens
│   ├── tailwind.css         # Tailwind config
│   └── fonts.css            # Typography
└── imports/                 # Design specifications
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Marketing landing page |
| `/patient` | Patient entry with language selection |
| `/find-care` | Search doctors and departments |
| `/appointment/:doctorId` | View doctor details and book |
| `/confirmation/:appointmentId` | Booking confirmation with QR |
| `/queue/:tokenId` | Live queue tracking |
| `/staff` | Staff dashboard |
| `/design-system` | Design system showcase |

## Design System

### Colors
- **Primary (Healing Teal)**: `#0d9488` - Trust and healthcare
- **Secondary (Trust Blue)**: `#3b82f6` - Reliability
- **Semantic**: Success, Warning, Danger with AAA contrast

### Typography
- **Latin**: Inter
- **Devanagari**: Noto Sans Devanagari
- **Scale**: 14px (caption) to 32px (display)

### Spacing
- 8pt grid system
- Minimum touch targets: 48x48px

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions. Every push to the `main` branch triggers a build and deployment.

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives
- [Unsplash](https://unsplash.com/) - Stock photography
- Original design from Figma Make

---

Built with care for patients and healthcare workers.
