# Task List - Fullstack Application

A modern fullstack task management application built with React frontend and Node.js/Express backend.

![Task List Application](https://github.com/user-attachments/assets/14eba0c4-1a2f-473e-b705-b5e8daed401d)

## Features

- ✅ Create, edit, and delete tasks
- ✅ Mark tasks as completed/pending
- ✅ Clean, responsive UI with React
- ✅ RESTful API with Node.js/Express
- ✅ Real-time task management
- ✅ Organized task sections (Pending/Completed)

![Task Management Demo](https://github.com/user-attachments/assets/c4839d87-90a1-4946-b128-09f4e01bdc95)

## Technology Stack

### Frontend
- **React** with TypeScript
- **CSS3** for styling
- **Fetch API** for HTTP requests

### Backend
- **Node.js** runtime
- **Express.js** web framework
- **CORS** for cross-origin requests
- **Body-parser** for JSON parsing

## Project Structure

```
taskList/
├── backend/                 # Node.js/Express API server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── node_modules/       # Backend dependencies
├── frontend/               # React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service layer
│   │   ├── types/          # TypeScript interfaces
│   │   └── App.tsx         # Main React component
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── node_modules/       # Frontend dependencies
├── package.json            # Root package.json for scripts
└── README.md              # This file
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get task by ID |
| POST | `/api/tasks` | Create new task |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |
| GET | `/api/health` | Health check |

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd taskList
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on http://localhost:5000
   - Frontend development server on http://localhost:3000

### Individual Server Commands

**Backend only:**
```bash
npm run backend:dev
```

**Frontend only:**
```bash
npm run frontend:dev
```

**Production build:**
```bash
npm run build
npm start
```

## Usage

1. **Add Tasks**: Use the form at the top to create new tasks with titles and descriptions
2. **Mark Complete**: Click the checkbox next to any task to mark it as completed
3. **Edit Tasks**: Click the "Edit" button to modify task details
4. **Delete Tasks**: Click the "Delete" button to remove tasks permanently

## Development

### Backend Development
- The backend uses Express.js with in-memory storage
- Server automatically restarts with nodemon during development
- API follows RESTful conventions

### Frontend Development
- Built with Create React App and TypeScript
- Components are organized in separate files with CSS modules
- Service layer abstracts API calls

### Adding Features
1. Update the Task interface in `frontend/src/types/Task.ts`
2. Add new API endpoints in `backend/server.js`
3. Update the service layer in `frontend/src/services/taskService.ts`
4. Create/update React components as needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and development purposes.
