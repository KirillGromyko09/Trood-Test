# Trood-Test

This is the **Trood-Test** project, an application designed for managing projects. 
The app allows users to create, edit, and view information about vacancies based on a specific project.

## Technologies Used

The following technologies were used in this project:

- **React** — Library for building user interfaces.
- **Vite** — Build tool for fast development.
- **React Router** — For routing and navigation between pages.
- **Formik** — Library for handling forms.
- **Yup** — For form validation.
- **Material UI** — Component library for React.
- **Zustand** — For state management.
- **Axios** — For interacting with APIs.
- **Go** — For the backend.
- **Vercel** — For deploying and hosting the app.

---

## Setup Instructions

### Frontend

To run the frontend locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/KirillGromyko09/Trood-Test.git
   cd Trood-Test
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3.  **Run the development server:**

For running the app in development mode, use the following command:
   ```bash
npm run dev
   ```
The frontend will be available at http://localhost:3000.

### Backend

## Prerequisites
Ensure the following are installed on your system:

- [Go](https://go.dev/doc/install) (version 1.17 or later)
- [Swag CLI](https://github.com/swaggo/swag) (for generating Swagger documentation, **optional**)

## Setup Instructions
1. Clone the Repository:

```bash
git clone https://github.com/KirillGromyko09/Trood-Test.git
cd backend
```
2. Install Dependencies:

```bash
go mod tidy
```
3. Run the Application:

```bash
go run main.go
```
The server will start on http://localhost:8080.

### Deployment
The application is deployed on Vercel. You can view the deployed version of the app here:

https://trood-test-nine.vercel.app


### Additional Information
The backend is built using Go and exposes an API to manage projects and vacancies.
The frontend is built with React, Vite, and other supporting libraries for a modern user experience.
To manage state in the frontend, we use Zustand for simplicity and efficiency.
The project supports Form Validation with Formik and Yup to ensure data integrity during user input.
Material UI provides a set of ready-to-use components for designing the app interface.
