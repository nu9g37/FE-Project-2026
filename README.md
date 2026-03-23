[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ZoerMYa3)
# 🏕️ CampNest

> **Escape the Ordinary, Embrace the Wild.**
> Discover hidden gems and wake up to the soundtrack of nature.

🔗 **Live Demo:** [https://fe-project-2026.vercel.app/](https://fe-project-2026.vercel.app/)

---

## Overview

CampNest is a full-stack campground booking web application built with **Next.js 15**. Users can browse campgrounds across Thailand, view details, and manage their reservations — all through a clean and responsive interface.

---

## Features

- 🔐 **Authentication** — Register, login, and logout via NextAuth.js with JWT sessions
- 🏕️ **Campground Catalog** — Browse and explore available campgrounds with images and details
- 📅 **Booking System** — Book a campground by selecting a date; limited to 3 bookings per user
- ✏️ **Manage Bookings** — View, edit, and delete your bookings from the My Booking page
- 👤 **User Profile** — View your profile information on the My Booking page
- 💾 **Persistent State** — Redux Toolkit with Redux Persist keeps booking state across sessions

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Material UI (MUI) |
| Authentication | NextAuth.js |
| State Management | Redux Toolkit + Redux Persist |
| Database | MongoDB via Mongoose |
| Date Picker | MUI X Date Pickers + Day.js |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── app/
│   ├── (auth)/               # Login, Register, Logout pages
│   ├── (campgroundinfo)/     # Campground listing and detail pages
│   ├── api/auth/             # NextAuth route handler & options
│   ├── booking/              # Booking creation page
│   ├── mybooking/            # My Booking page with parallel routes
│   │   ├── @profile/         # User profile slot
│   │   └── @manage/          # Booking management slot
│   └── page.tsx              # Home page
├── components/               # Reusable UI components
│   ├── Banner.tsx
│   ├── BookingButton.tsx
│   ├── BookingList.tsx
│   ├── Card.tsx
│   ├── CampgroundCatalog.tsx
│   ├── DateReserve.tsx
│   ├── InteractiveCard.tsx
│   ├── TopMenu.tsx
│   └── TopMenuItem.tsx
├── db/
│   ├── dbConnect.ts          # MongoDB connection
│   └── models/Campground.ts  # Campground Mongoose model
├── libs/                     # API call utility functions
│   ├── addBooking.tsx
│   ├── deleteBooking.tsx
│   ├── getBooking.tsx
│   ├── getBookings.tsx
│   ├── getCampground.tsx
│   ├── getCampgrounds.tsx
│   ├── getUserProfile.tsx
│   ├── updateBooking.tsx
│   ├── userLogIn.tsx
│   └── userRegister.tsx
├── providers/
│   └── NextAuthProvider.tsx
└── redux/
    ├── features/bookSlice.ts
    ├── store.ts
    └── ReduxProvider.tsx
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A running backend API (set via environment variables)
- MongoDB instance

### Installation

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
BACKEND_URL=<your-backend-api-url>
MONGO_URI=<your-mongodb-connection-string>
NEXTAUTH_SECRET=<your-nextauth-secret>
NEXTAUTH_URL=http://localhost:3000
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home page with banner and welcome message |
| `/campground` | Browse all campgrounds |
| `/campground/[cid]` | Campground detail and booking button |
| `/booking` | Create a new booking |
| `/mybooking` | View profile and manage bookings |
| `/login` | Login page |
| `/register` | Register page |
| `/logout` | Logout confirmation page |

---

## API Integration

All backend calls are handled through utility functions in `src/libs/`:

- `getCampgrounds` / `getCampground` — Fetch campground data
- `addBooking` / `getBooking` / `getBookings` — Booking CRUD
- `updateBooking` / `deleteBooking` — Modify or remove bookings
- `getUserProfile` — Fetch authenticated user profile
- `userLogIn` / `userRegister` — Authentication

---

## Deployment

This project is deployed on **Vercel**.

🔗 [https://fe-project-2026.vercel.app/](https://fe-project-2026.vercel.app/)

---

## License

This project was built for educational purposes.