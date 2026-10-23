Elder Assist

A web platform that brings essential support services together for senior citizens: emergency help, healthcare, legal and pension assistance, live support, and an emotional support chatbot, all in one accessible place.

Built with HTML, CSS, JavaScript, Node.js and MySQL.

Features
For senior citizens

Sign up and log in
Emergency requests with WhatsApp emergency alerts
Healthcare services
Legal and pension services
Live support
Emotional support chatbot
Contact features
Accessibility features for easier use

For administrators
Admin management of users, requests and services
CSV export of data
Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Node.js [, Express]
Database	MySQL
Version control	Git
Project Structure

Update this to match your actual folders.

elder-assist/
├── [public/]        # Static files (CSS, JS, images)
├── [views/]         # Frontend pages
├── [routes/]        # API routes
├── [config/]        # Database configuration
├── [server.js]      # Application entry point
├── package.json
└── README.md

Getting Started
Prerequisites
Node.js (v16 or later)
MySQL (v8 or later)
Git

Installation
Clone the repository:
bash
   git clone [your-repo-url]
   cd elder-assist
Install dependencies:
bash
   npm install
Create the database and import the schema:
sql
   CREATE DATABASE elder_assist;
bash
   mysql -u your_username -p elder_assist < [schema.sql]
Create a .env file in the project root:
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=elder_assist
   PORT=3000
   [WHATSAPP_API_KEY=your_key]
Start the server:
bash
   node [server.js]
Open http://localhost:3000 in your browser.

Usage
A senior citizen signs up and logs in.
From the dashboard, they can raise an emergency request, browse healthcare, legal and pension services, talk to live support, or chat with the emotional support chatbot.
Emergency requests trigger a WhatsApp alert.
Admins log in to manage users and services and export data as CSV.

Future Improvements
[e.g. mobile app or fully responsive layout]
[e.g. multi-language support]
[e.g. appointment reminders]
Author

Unnati MCA student, BVICAM, New Delhi [GitHub link] | [LinkedIn link]

