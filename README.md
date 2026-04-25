# Express Backend Basics

A simple backend starter project built using Node.js and Express, with environment variable management using dotenv.

---

## Features

* Basic Express server setup
* Environment-based configuration using `.env`
* Clean project structure with a config folder
* Ready to scale into a full backend application

---

## Tech Stack

* Node.js
* Express.js
* dotenv

---

## Project Structure

```id="g1a9k2"
Backend/
│── config/
│   └── env.js
│── app.js
│── package.json
│── .env (ignored)
```

---

## Setup and Run

### Install dependencies

```id="k9d2x1"
npm install
```

### Create `.env` file

```id="p3l8w7"
PORT=5000
```

### Run server

Development:

```id="m5n8q2"
npm run dev
```

Production:

```id="r7s1c4"
npm start
```

---

## API Endpoint

* GET `/` → returns "Hello World"

---

## Learning Outcomes

* Setting up an Express server
* Using environment variables with dotenv
* Structuring backend projects

---

## Future Improvements

* Add routes and controllers
* Connect a database (MongoDB)
* Implement authentication (JWT)
* Add error handling middleware

---

## Author

Pranav Naik
