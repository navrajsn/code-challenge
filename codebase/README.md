# Energy Accounts Management Application

This project is a full-stack application built with **React** and **Node.js**. It allows users to view energy accounts, filter them by energy type, search by address, and make payments using a credit card. The backend provides APIs for fetching energy accounts and processing payments.

## Features

### Frontend
- **Dashboard**: Displays a list of energy accounts in a card-based UI.
- **Payment History**: Displays a history of payments made.

### Backend
- **API Endpoints**:
  - `/accounts`: Fetches energy accounts with calculated balances.
  - `/payments`: Processes credit card payments.
- **Swagger Documentation**: Available at `/api-docs`.

## Getting Started

### Prerequisites
- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   git clone <repository-url>
   cd codebase

2. Install dependencies for both frontend and backend:
 
  cd backend
  npm install
  cd ../client
  npm install

### Running the Application
## Backend
1. Start the backend server:
cd backend
npm run dev
2. Access the Swagger API documentation at http://localhost:3000/api-docs.

## Frontend
Start the frontend development server:
cd client
npm start

### Running Tests
## Backend Tests
Run backend unit tests:
cd backend
npm test

## Frontend Tests
Run frontend unit tests:
cd client
npm test


