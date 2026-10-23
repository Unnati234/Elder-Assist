# Elder-Assist
Elder Assist is a full-stack web application designed to support senior citizens by providing easy access to assistance services, healthcare information, emotional support resources, and information about government services. The platform aims to make essential information and support more accessible through a simple and user-friendly interface.

Features

User Authentication: Signup and login functionality for users.

Home Page: An overview of the platform and its services.

About Us: Information about the purpose and goals of Elder Assist.

Services: Access to information and assistance options for senior citizens.

Contact: A way for users to reach out for assistance.

Rule-Based Chatbot: Provides predefined responses to common questions.

Live Support: A dedicated interface for support-related interactions.

Database Integration: Stores user information and assistance request data.

Tech Stack

Frontend

HTML

CSS

JavaScript

Bootstrap

Backend

Node.js

Express.js

Database

MySQL

Project Structure

Elder-Assist/
├── public/              # Frontend assets and static files
├── routes/              # Application routes
├── controllers/         # Request-handling logic
├── config/              # Database configuration
├── views/               # HTML templates, if applicable
├── server.js            # Application entry point
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation

Note: Update this structure to match the actual folders and files in your repository.

Getting Started

Prerequisites

Make sure you have the following installed:

Node.js

MySQL Server

Git

Installation

Clone the repository:

git clone https://github.com/Unnati234/Elder-Assist.git

Navigate to the project directory:

cd Elder-Assist

Install the dependencies:

npm install

Configure the MySQL database.

Create a database in MySQL and configure the database connection using your project's existing configuration.

Start the application using the command configured in your package.json. For example:

node server.js

Open the local URL displayed in your terminal in your browser.

Important: The database name, table schema, environment variables, and start command should match your actual implementation.

My Contributions

I primarily worked on the backend development of Elder Assist, focusing on:

Developing backend functionality using Node.js and Express.js.

Connecting the application to a MySQL database.

Implementing data handling for user information and assistance requests.

Integrating backend functionality with the frontend.

Supporting the application's different modules through backend logic.

Future Enhancements

Integration with hospitals and emergency services.

GPS-based location assistance.

SMS and email notifications for assistance requests.

Multilingual support for improved accessibility.

Voice navigation for senior citizens.

Enhanced authentication and security.

An NLP-powered chatbot for more flexible conversations.

Limitations

The chatbot uses predefined rules and responses.

The application does not currently provide direct integration with emergency services.

GPS tracking and automated notifications are not implemented.

Security and authentication can be further strengthened.

Purpose

Elder Assist was developed to explore how web technologies can help address practical challenges faced by senior citizens. The project provided hands-on experience in backend development, database management, and integrating application components into a working web application.

Author

Unnati

GitHub: Unnati234

License

This project is available for educational and learning purposes. Add a formal license if you intend to permit reuse or distribution under specific terms.
