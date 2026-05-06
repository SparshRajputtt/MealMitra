# MealMitra — Backend (server) — Project Summary

## Overview

This repository contains the backend for the MealMitra application. The backend is a small Express + Node.js server that uses MongoDB via Mongoose for persistence. The codebase currently provides configuration, a database connection, and a `User` model with validation. Basic server bootstrapping is in place, but API routes and controllers remain to be implemented.

## Tech stack

- Node.js (ES module style)
- Express
- MongoDB (via Mongoose)
- dotenv for environment configuration
- jsonwebtoken for JWT (dependency present)

## What is implemented (so far)

- Server bootstrap: [server.js](server/server.js) — starts the app and initializes DB connection.
- Express app skeleton: [src/app.js](server/src/app.js) — `express()` instance exported for composition.
- Configuration management: [src/config/config.config.js](server/src/config/config.config.js) — reads `MONGO_URI`, `PORT`, and `JWT_SECRET` from environment.
- Database connection: [src/config/config.database.js](server/src/config/config.database.js) — `connectDB()` uses Mongoose to connect to MongoDB.
- User model: [src/models/user.model.js](server/src/models/user.model.js) — `User` Mongoose schema with fields and validations:
  - `name`, `email`, `password` (password `select: false`), `weight`, `height`, `age`, `gender`, `dietType`, `proteinGoal`, `activityLevel`.
  - Email regex validation, enums for `gender`, `dietType`, and `activityLevel`.
- Dependencies and scripts: [package.json](server/package.json) — includes `start` and `dev` scripts (nodemon via `npx`), and project dependencies.

## Project structure (server folder)

- server/
  - server.js — application entry that calls `connectDB()` and starts the HTTP server.
  - package.json — project metadata and dependencies.
  - src/
    - app.js — express app instance.
    - config/
      - config.config.js — environment/config loader.
      - config.database.js — mongoose connection helper.
    - controllers/ — (empty) intended for request handlers and business logic.
    - models/
      - user.model.js — Mongoose `User` model (implemented).
    - routes/ — (empty) intended for route definitions.

Note: `controllers` and `routes` directories currently contain no files (placeholders for future implementation).

## How to run

1. Install dependencies from the `server` folder:

```bash
cd server
npm install
```

2. Provide environment variables (create a `.env` file in `server/`):

```
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
JWT_SECRET=<strong-jwt-secret>
```

3. Start the server in development:

```bash
npm run dev
```

Or start production:

```bash
npm start
```

The server listens on the port configured by `PORT` and will print a message on successful MongoDB connection.

## Next steps / Recommendations

- Implement route definitions in `src/routes/` and mount them on the `app` instance in `src/app.js`.
- Implement controller logic in `src/controllers/` for user registration, login (issue JWT), and profile endpoints.
- Add password hashing (e.g., `bcrypt`) and authentication middleware that verifies JWT using `JWT_SECRET`.
- Add request validation and error handling middleware (centralized error handler).
- Add basic tests and API documentation (OpenAPI/Swagger) for future frontend integration.

## Quick notes for contributors

- Code uses ES modules (`type: "module"` in `package.json`).
- `user.model.js` stores password with `select: false` — remember to `.select('+password')` when authenticating.

---

If you want, I can: (a) scaffold basic routes and controllers for user auth, (b) add password hashing and JWT-based login, or (c) create a README with usage and API examples. Tell me which you'd like next.
