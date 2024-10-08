# ReactCamp Hub

**ReactCamp Hub** is a full-stack platform for reviewing and sharing campsites. Users can create, list, and view details of campsites. The application features a decoupled architecture with a React frontend and a Django backend, ensuring a seamless user experience and efficient data handling.

![ReactCamp Hub Banner](https://via.placeholder.com/1200x300.png?text=ReactCamp+Hub)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Sign up, login, and logout functionality.
- **Campsite Management**: Create, read, update, and delete campsites.
- **Campsite Listing**: View all campsites with pagination.
- **Campsite Details**: View detailed information about each campsite.
- **Data Caching**: Implemented with Redis to enhance performance.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Robust validation and error messaging.
- **Secure API**: Protected endpoints with authentication tokens.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux**: State management for React applications.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **React Router**: Declarative routing for React applications.
- **Bootstrap**: Frontend component library for responsive design.

### Backend

- **Python**: Programming language for backend development.
- **Django**: High-level Python Web framework.
- **Django REST Framework**: Toolkit for building Web APIs.
- **django-cors-headers**: Handles Cross-Origin Resource Sharing (CORS).
- **Gunicorn**: Python WSGI HTTP server for UNIX.

### Database

- **MongoDB**: NoSQL database for storing campsite data.

### Caching

- **Redis**: In-memory data structure store used as a database, cache, and message broker.

### Deployment

- **Google Cloud Platform (GCP)**: Cloud services for hosting.
- **Docker**: Containerization platform.
- **Nginx**: Web server used as a reverse proxy.

## Prerequisites

- **Node.js** (v12 or higher)
- **npm** or **yarn**
- **Python** (3.7 or higher)
- **pip** (Python package installer)
- **MongoDB** (Database)
- **Redis** (Caching server)
- **Docker** (Optional, for containerization)
- **Google Cloud SDK** (Optional, for deployment)

## Installation

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/reactcamp-hub.git
   cd reactcamp-hub/backend
   ```

2. **Create a virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install backend dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**

   Create a `.env` file in the backend directory:

   ```env
   SECRET_KEY=your_secret_key
   DEBUG=True
   ALLOWED_HOSTS=localhost,127.0.0.1
   ```

5. **Apply migrations**

   ```bash
   python manage.py migrate
   ```

6. **Run the backend server**

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**

   ```bash
   cd ../frontend
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the frontend directory:

   ```env
   REACT_APP_API_URL=http://localhost:8000/api/
   ```

4. **Run the frontend server**

   ```bash
   npm start
   # or
   yarn start
   ```

## Usage

- Access the frontend at `http://localhost:3000`
- Access the backend API at `http://localhost:8000/api/`

## API Endpoints

- **User Authentication**
  - `POST /api/auth/register/`: Register a new user
  - `POST /api/auth/login/`: User login
  - `POST /api/auth/logout/`: User logout

- **Campsite Management**
  - `GET /api/campsites/`: Get all campsites
  - `POST /api/campsites/`: Create a new campsite
  - `GET /api/campsites/<id>/`: Get a campsite by ID
  - `PUT /api/campsites/<id>/`: Update a campsite by ID
  - `DELETE /api/campsites/<id>/`: Delete a campsite by ID

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a feature branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit your changes**

   ```bash
   git commit -m 'Add some feature'
   ```

4. **Push to the branch**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a pull request**

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions!
