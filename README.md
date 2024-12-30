# Full-Stack Task Management App

This is a Full-Stack Task Management application that allows users to manage their tasks seamlessly. It consists of a **backend** built with **Express.js** and **MongoDB** and a **frontend** built with **React.js** and **Tailwind CSS**.

---

## Features
- **Backend**:
  - RESTful API for task management.
  - Create, read, update, and delete tasks.
  - Basic validation for required fields.
- **Frontend**:
  - Responsive and user-friendly interface.
  - Add, update, delete, and view tasks.
  - Task editing with pre-filled form fields.
  - Status toggle for tasks (Completed/Pending).
  - Fully responsive design for desktop and mobile devices.

---

## Backend Documentation

### Description
The backend provides a RESTful API for managing tasks and is built using **Express.js** and **MongoDB**.

### Installation Instructions

#### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **MongoDB**: Set up MongoDB (local or cloud-based).
- **Git**: Required to clone the repository.

#### Clone the Repository
```bash
git clone https://github.com/friday006/full-stack-task-management-app.git
cd full-stack-task-management-app/backend
```

#### Environment Variables
Create a `.env` file in the `backend` directory and include:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

#### Install Dependencies
```bash
npm install
```

#### Start the Server
```bash
npm start
```
The backend server will run on `http://localhost:5000`.

### API Documentation

#### Endpoints

1. **Get All Tasks**
   - **URL**: `/tasks`
   - **Method**: `GET`
   - **Response**: Returns an array of all tasks.

2. **Add a New Task**
   - **URL**: `/tasks`
   - **Method**: `POST`
   - **Body**:
     ```json
     {
       "title": "Task Title",
       "description": "Task Description"
     }
     ```
   - **Response**: Returns the created task.

3. **Update a Task**
   - **URL**: `/tasks/:id`
   - **Method**: `PUT`
   - **Body**:
     ```json
     {
       "title": "Updated Task Title",
       "description": "Updated Task Description",
       "status": true
     }
     ```
   - **Response**: Returns the updated task.

4. **Delete a Task**
   - **URL**: `/tasks/:id`
   - **Method**: `DELETE`
   - **Response**: Returns a success message.

---

## Frontend Documentation

### Description
The frontend provides a clean and intuitive user interface for managing tasks. It is built with **React.js** and styled using **Tailwind CSS**.

### Installation Instructions

#### Prerequisites
- **Node.js**: Ensure Node.js is installed.
- **Git**: Required to clone the repository.
- A running backend server.

#### Clone the Repository
```bash
git clone https://github.com/friday006/full-stack-task-management-app.git
cd full-stack-task-management-app/frontend
```

#### Environment Variables
Create a `.env` file in the `frontend` directory and include:
```
REACT_APP_API_URL=http://localhost:5000
```

Replace `http://localhost:5000` with the URL of your backend server.

#### Install Dependencies
```bash
npm install
```

#### Start the Application
```bash
npm start
```
The app will run on `http://localhost:3000`.

---

### Folder Structure
**Backend**:
```
backend/
├── controllers/    # Controller logic for API endpoints
├── models/         # MongoDB models
├── routes/         # Express routes
├── server.js       # Entry point for the server
└── .env            # Environment variables
```

**Frontend**:
```
frontend/
├── public/          # Public assets
├── src/
│   ├── components/  # Reusable React components (TaskList, AddTaskForm, etc.)
│   ├── store/       # Redux store and slices for task management
│   ├── App.js       # Main application entry point
│   ├── index.js     # React DOM entry point
│   └── styles/      # Custom styles and Tailwind CSS configuration
└── .env             # Environment variables
```

---

## Challenges and Assumptions
- Backend:
  - Ensuring robust error handling for API requests.
  - MongoDB connection setup and validation.
- Frontend:
  - Maintaining a consistent and responsive user interface.
  - Syncing frontend actions with backend updates.

---

## License
This project is licensed under the MIT License.