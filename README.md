 ExpenseFlow - Expense Tracker App
Developer: Shivam Mishra

📘 Overview
ExpenseFlow is a full-stack expense tracker application that allows users to easily manage their finances. Whether it's adding income, tracking daily expenses, or downloading reports, this app offers a seamless and intuitive experience for personal finance management.

✨ Features

➕ Add new expenses with amount, category, and date.
➕ Add new incomes with amount, source, and date.
❌ Delete existing expenses or incomes.
📥 Download income or expense details in one click.
📊 Get summaries by category or within a custom date range.
📱 Responsive and user-friendly UI for all devices.

🛠️ Tech Stack
Frontend:
⚛️ React.js
💨 Tailwind CSS
🎨 React Icons
⚡ Vite

Backend:
🟩 Node.js
🚂 Express.js

Database:
🍃 MongoDB (Cloud - MongoDB Atlas)

🚀 Installation & Setup
📁 Clone the Repository
git clone url
🔧 Frontend Setup
cd ExpenseFlow/frontend/expense-tracker
npm install
npm run dev
The frontend will start at: http://localhost:5173

🔧 Backend Setup
cd ExpenseFlow/backend
npm install
Create a .env file in the root of the backend folder and add:
PORT=8000
MONGO_URI=your_mongo_atlas_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
Now, start the backend server:
npm run dev

💡 Usage Guide
Open your browser and go to: http://localhost:5173

Register or login to start managing your income and expenses.

Use the dashboard to add, delete, or download your transactions.

View detailed summaries to gain better control over your finances.
