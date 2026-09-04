# React Todo App

A simple Todo application built with React. The app allows users to create, complete, and delete tasks, with todos persisted in the browser using **localStorage**.

## Features

- Add new todos
- Mark todos as completed
- Delete todos
- Persistent data using browser localStorage
- Responsive and simple user interface
- React component-based architecture

## Tech Stack

- React
- JavaScript
- HTML/CSS
- Vite
- Browser localStorage

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## How Persistence Works

Todos are stored in the browser's `localStorage`, so tasks remain available after refreshing or closing the browser.

Because the data is stored locally:

- Todos are specific to the browser/device being used.
- The data is not stored in a remote database.
- Clearing browser storage will remove the saved todos.

## Project Structure

A typical project structure is:

```text
todo-app/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

## Future Improvements

Possible improvements include:

- Todo filtering: All / Active / Completed
- Edit existing todos
- Clear completed todos
- Todo due dates
- Dark mode
- Backend/database persistence
- User authentication
- Deployment to Vercel or Netlify

## License

This project is available for learning and personal use.
