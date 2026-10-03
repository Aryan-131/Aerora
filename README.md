# AERORA — Curated Journeys
Vanilla HTML/CSS/JS travel project. No backend: Local Storage holds users, bookings, wishlist, reviews and journeys.

## Run
Just double-click `index.html`. (Optional: use any local server, e.g. VS Code Live Server.)
Open the public site first so the demo data is created, then visit `admin/index.html`.

## Photos
Destination photos load automatically from Wikimedia Commons (open licences) when you open the site online, and are cached in Local Storage. Offline, the built-in illustrated artwork is shown.

## Structure
- `index.html` home + destination explorer · `packages.html` journeys · `package-details.html?id=kyoto` details + itinerary
- `booking.html?id=kyoto` 4-step booking · `gallery.html` · `reviews.html` · `contact.html`
- `login.html` · `register.html` · `wishlist.html` (saved places + your bookings)
- `admin/index.html` admin panel — demo login `admin@aerora.com` / `admin123`
- `css/style.css`, `css/admin.css` · `js/main.js`, `auth.js`, `booking.js`, `itinerary.js`, `admin.js`

Not built yet: hotel and flight pages.
