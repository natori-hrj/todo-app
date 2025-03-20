# Task Manager App

## Overview
This is a simple task management application built with **React (TypeScript) for the frontend** and **Django REST Framework for the backend**. The app allows users to add, complete, and delete tasks while storing data in a database.

## Features
- Add tasks with a simple input field
- Mark tasks as completed
- Delete tasks
- Persistent data storage using Django
- API communication via Axios

## Tech Stack
### Frontend:
- React (TypeScript)
- Vite
- Zustand (State management)
- Axios (API communication)
- Tailwind CSS (Styling)

### Backend:
- Django REST Framework
- SQLite (default database, can be replaced with PostgreSQL or MySQL)
- CORS Headers

## Installation
### Prerequisites:
- Node.js (Latest LTS version recommended)
- Python 3.8+

### 1. Clone the repository
```sh
 git clone https://github.com/natori-hrj/todo-app.git
 cd todo-app
```

### 2. Setup Backend
```sh
 cd backend
 python -m venv venv  # Create virtual environment
 source venv/bin/activate  # Activate virtual environment (Windows: venv\Scripts\activate)
 pip install -r requirements.txt  # Install dependencies
 python manage.py migrate  # Apply migrations
 python manage.py runserver  # Start the Django server
```

### 3. Setup Frontend
```sh
 cd task-manager
 npm install  # Install dependencies
 npm run dev  # Start the React development server
```

## Usage
- Open the frontend in your browser: `http://localhost:5173`
- Ensure the backend is running at `http://localhost:8000`
- Add, complete, and delete tasks via the UI

## API Endpoints
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| **GET**    | `/api/tasks/`  | Get all tasks           |
| **POST**   | `/api/tasks/`  | Add a new task          |
| **PUT**    | `/api/tasks/:id/` | Update task completion |
| **DELETE** | `/api/tasks/:id/` | Delete a task         |

## Contributing
1. Fork the repository
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a pull request

## License
This project is licensed under the **MIT License**.

