# Test React Project Guide

This project is a React frontend built with Vite. It provides a simple authentication flow with registration, login, protected routes, logout, and a page to update user details.

This file was added as a project-specific guide without modifying the existing root `README.md`.

## Tech Stack

- React 19
- Vite 8
- React Router DOM 7
- React Hook Form
- Axios
- Tailwind CSS 4
- ESLint

## What The App Does

The app includes these main flows:

- Register a new user
- Log in with email and password
- Store the access token and user object in `localStorage`
- Protect private routes using a custom `ProtectedRoute`
- Log out through the backend API
- Update the logged-in user's details

## Routes

- `/` and `/register` -> registration page
- `/login` -> login page
- `/home` -> protected home page
- `/update-details` -> protected user update page

## Project Structure

```text
test-react/
|-- public/
|   |-- favicon.svg
|   `-- icons.svg
|-- src/
|   |-- assets/
|   |-- pages/
|   |   |-- register.jsx
|   |   |-- login.jsx
|   |   |-- home.jsx
|   |   `-- changeDetails.jsx
|   |-- services/
|   |   |-- auth.services.js
|   |   `-- user.services.js
|   |-- utils/
|   |   |-- interceptor.js
|   |   `-- protectedRoute.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- vite.config.js
`-- eslint.config.js
```

## Backend Requirement

This frontend is not fully standalone. It expects a backend server running locally at:

```text
http://localhost:3000
```

The frontend code currently calls these endpoints:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout/`
- `PUT /api/user/update-user`

If the backend is not running at `http://localhost:3000`, authentication and user update features will fail unless the source code is changed.

## How To Run After Cloning

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd test-react
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend

Make sure your backend API is running on `http://localhost:3000`.

### 4. Start the frontend

```bash
npm run dev
```

Vite will print a local development URL in the terminal, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## Available Scripts

- `npm run dev` -> starts the Vite development server
- `npm run build` -> creates a production build
- `npm run preview` -> previews the production build locally
- `npm run lint` -> runs ESLint

## Authentication Notes

- On successful login, the app stores:
  - `token` in `localStorage`
  - `user` in `localStorage`
- Protected pages check for the presence of `token`
- Axios requests made through `src/utils/interceptor.js` automatically attach:

```text
Authorization: Bearer <token>
```

## Important Limitations

- The backend base URL is hardcoded to `http://localhost:3000`
- There is no `.env` configuration in the current project
- There is no error UI for failed API requests beyond thrown errors and alerts
- The update-details page exists, but there is currently no visible navigation to it from the home page
- `src/index.css` is currently empty, and Tailwind is imported through `src/App.css`

## Suggested Usage Flow

After starting both frontend and backend:

1. Open the app in the browser
2. Register a user
3. Log in with the same credentials
4. Access the protected home page
5. Test logout
6. Visit `/update-details` manually to test updating user information

## Troubleshooting

### App loads but API calls fail

Check that your backend is running on `http://localhost:3000` and that the expected routes exist.

### Protected pages redirect to login

Check whether `localStorage` contains a valid `token`.

### Login succeeds on backend but frontend still misbehaves

Check the response shape from the login endpoint. The frontend expects:

- `success`
- `accessToken`
- `user`

### Update user API fails

Make sure the logged-in user object includes `_id`, because logout and user update actions depend on it.

## Notes For Future Improvement

- Move the API base URL into environment variables
- Add proper error handling and form feedback
- Add navigation links between pages
- Add loading states during API requests
- Add tests for auth and route protection
