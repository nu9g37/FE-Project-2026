[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ZoerMYa3)
# 🏕️ Campground Booking App

A full-stack web application for browsing and booking campgrounds, built with **Next.js 15**, **TypeScript**, **Redux Toolkit**, and **NextAuth.js**.

---

## 📋 Features

- **Authentication** — Register, login, and logout via JWT-based credentials (NextAuth.js)
- **Campground Browsing** — View all available campgrounds with images and details
- **Campground Detail** — See full info (address, district, province, postal code, tel, region)
- **Booking System** — Create, view, edit, and delete campground bookings
- **My Booking Page** — Parallel route layout showing user profile and booking management
- **Persistent State** — Redux Persist keeps booking state across page refreshes

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Material UI (MUI) |
| Auth | NextAuth.js (Credentials Provider) |
| State Management | Redux Toolkit + Redux Persist |
| Date Picker | MUI X Date Pickers + Day.js |
| Database (Model) | Mongoose / MongoDB |
| Backend API | Express REST API (localhost:5000) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/         # Login page
│   │   ├── register/      # Register page
│   │   └── logout/        # Logout confirmation page
│   ├── (campgroundinfo)/
│   │   └── campground/
│   │       ├── page.tsx           # Campground listing page
│   │       └── [cid]/page.tsx     # Campground detail page
│   ├── mybooking/
│   │   ├── page.tsx               # My Booking root page
│   │   ├── layout.tsx             # Parallel routes layout
│   │   ├── @profile/page.tsx      # User profile slot
│   │   └── @manage/page.tsx       # Booking management slot
│   ├── booking/
│   │   └── page.tsx               # Create booking page
│   └── api/auth/[...nextauth]/    # NextAuth route handler & options
├── components/
│   ├── TopMenu.tsx          # Navigation bar
│   ├── TopMenuItem.tsx      # Nav link item
│   ├── Banner.tsx           # Homepage image carousel
│   ├── Card.tsx             # Campground card
│   ├── CardPanel.tsx        # Client-side campground grid
│   ├── CampgroundCatalog.tsx # Server-side campground grid
│   ├── InteractiveCard.tsx  # Hover-effect card wrapper
│   ├── DateReserve.tsx      # MUI date picker wrapper
│   ├── BookingList.tsx      # Booking list with edit/delete
│   └── BookingButton.tsx    # Edit / Delete / Save / Cancel buttons
├── libs/
│   ├── userLogIn.tsx        # POST /auth/login
│   ├── userRegister.tsx     # POST /auth/register
│   ├── getUserProfile.tsx   # GET /auth/me
│   ├── getCampgrounds.tsx   # GET /campgrounds
│   ├── getCampground.tsx    # GET /campgrounds/:id
│   ├── addBooking.tsx       # POST /campgrounds/:id/bookings
│   ├── getBookings.tsx      # GET /bookings
│   ├── getBooking.tsx       # GET /bookings/:id
│   ├── updateBooking.tsx    # PUT /bookings/:id
│   └── deleteBooking.tsx    # DELETE /bookings/:id
├── redux/
│   ├── store.ts             # Redux store with persist config
│   ├── ReduxProvider.tsx    # Redux + PersistGate provider
│   └── features/
│       └── bookSlice.ts     # Booking state slice
├── providers/
│   └── NextAuthProvider.tsx # Session provider wrapper
├── db/
│   ├── dbConnect.ts         # Mongoose connection helper
│   └── models/
│       └── Campground.ts    # Campground Mongoose schema
├── middleware.ts             # Protect /mybooking and /booking routes
└── next-auth.d.ts            # NextAuth session type extension
interface.ts                  # Shared TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A running backend API at `http://localhost:5000`
- MongoDB instance (used by the backend)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here
MONGO_URI=mongodb://localhost:27017/campground
```

### Running the App

```bash
# Development
npm run dev

# Production build
npm run build
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🔌 API Endpoints (Backend)

All requests go to `http://localhost:5000/api/v1/`

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | `/auth/register` | Register a new user | No |
| POST | `/auth/login` | Login and receive JWT | No |
| GET | `/auth/me` | Get current user profile | Yes |
| GET | `/campgrounds` | List all campgrounds | No |
| GET | `/campgrounds/:id` | Get campground details | No |
| POST | `/campgrounds/:id/bookings` | Create a booking | Yes |
| GET | `/bookings` | Get user's bookings | Yes |
| GET | `/bookings/:id` | Get a single booking | Yes |
| PUT | `/bookings/:id` | Update a booking date | Yes |
| DELETE | `/bookings/:id` | Delete a booking | Yes |

---

## 🔐 Authentication Flow

1. User submits credentials on `/login`
2. NextAuth calls `userLogIn()` → receives JWT token from backend
3. `getUserProfile()` fetches user data using the token
4. Session stores `{ _id, name, email, role, token }`
5. Protected routes (`/mybooking`, `/booking`) are guarded via `middleware.ts`

---

## 📦 Key Design Decisions

- **Parallel Routes** — `/mybooking` uses Next.js parallel routes (`@profile`, `@manage`) to render the profile and booking list simultaneously as independent slots.
- **Redux Persist** — Booking state is persisted to `localStorage` so it survives page refreshes, with SSR-safe storage fallback for server rendering.
- **Server vs Client Components** — Data fetching pages (campground listing, profile, booking management) are Server Components; interactive UI (booking form, booking list, banner) are Client Components.
- **Middleware Protection** — `next-auth/middleware` is used to redirect unauthenticated users away from `/mybooking` and `/booking`.