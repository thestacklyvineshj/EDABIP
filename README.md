# EDABIP

Frontend screens for the Enterprise Data Analytics & Business Intelligence Platform. The app is login and signup only. There is no backend, database, or API.

## Stack

- React 18
- React Router 6
- Tailwind CSS 3
- Vite 5

Forms use React state. Validation runs in the browser. Google and Microsoft buttons are visual only.

## Project layout

```
client/
  index.html
  vite.config.js          # dev server on port 5173
  tailwind.config.js
  postcss.config.js
  src/
    main.jsx              # React root and BrowserRouter
    App.jsx               # routes
    index.css             # Tailwind entry and base styles
    pages/
      LoginPage.jsx
      SignupPage.jsx
    components/
      auth/               # layout, brand panel, card, tabs, social buttons
      ui/                 # button, text, password, checkbox, divider
      icons/
    assets/               # background and logo images
```

## Routes

| Path | Screen |
| --- | --- |
| `/` | Redirects to `/login` |
| `/login` | Login |
| `/signup` | Signup |
| anything else | Redirects to `/login` |

The Sign up / Log in tabs and the text links switch between the two screens.

## Screens

Both screens share `AuthLayout`: a full-page background, the EDABIP logo, a left brand panel on large screens, and a centered form card.

**Login** (`/login`)

- Email and password are required. Email must look like an email address.
- Remember me is optional.
- Forgot Password shows an error until the email is valid, then a local notice that a reset link would be sent.
- A valid submit shows “You are signed in.”

**Signup** (`/signup`)

- First name, last name, and email are required.
- Password needs 8 or more characters, at least one letter, and at least one number.
- Confirm password must match.
- Terms & Conditions must be checked.
- A valid submit shows “Your account is ready.”

The primary button stays disabled until the current form is valid. Field errors appear after a field is left, or after Forgot Password is used with an invalid email.

## Run

Node.js 18 or newer.

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`.

## Scripts

From `client/`:

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `client/dist` |
| `npm run preview` | Serve the production build locally |
