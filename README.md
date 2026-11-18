# Elder Assist
 
A web platform that brings essential support services together for senior citizens: emergency help, healthcare, legal and pension information, a support chatbot, and a contact desk, all in one easy-to-use place. An admin dashboard lets staff manage users, reply to messages and review emergency requests.
 
Built independently with HTML, CSS, JavaScript, Node.js (Express) and MySQL.
 
## Features
 
**For senior citizens**
- Sign up and log in (passwords are hashed with bcrypt)
- One-tap emergency button that opens a pre-filled WhatsApp alert with the user's name and email
- Emergency requests from the services page are saved to the database for admins to see
- Services page covering healthcare, legal and pension support, and urgent safety help
- Emotional support chatbot that replies to common feelings and requests (keyword based)
- Contact form whose messages are stored for admin replies
- Live support page showing the helpline number (14567) while the support team is offline
- Accessibility options: text size buttons and voice input
**For administrators**
- View registered users and delete user accounts (admin accounts cannot be deleted)
- Read contact messages and send replies
- View a list of emergency requests, newest first
- Export the user list as a CSV file
## Tech Stack
 
| Layer           | Technology                                   |
|-----------------|----------------------------------------------|
| Frontend        | HTML, CSS, JavaScript                        |
| Backend         | Node.js, Express 5                           |
| Database        | MySQL (`mysql2`)                             |
| Security        | bcrypt password hashing, CORS, dotenv config |
| Version control | Git, GitHub                                  |
 
## Project Structure
 
```
Elder-Assist/
├── server.js          # Express API and MySQL connection
├── home.html          # Home page, emergency button, chat box
├── login.html         # Login page
├── login_page.html    # Sign-up page
├── services.html      # Healthcare, legal, pension and emergency services
├── chatbot.html       # Emotional support chatbot
├── livesupport.html   # Live support / helpline page
├── contact.html       # Contact form
├── about.html         # About page
├── admin.html         # Admin dashboard
├── home.css / services.css / style.css
├── schema.sql         # Database tables
├── .env.example       # Environment variable template
└── package.json
```
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (v18 or later)
- [MySQL](https://www.mysql.com/) (v8 or later)
- Git
### Installation
 
1. Clone the repository and install dependencies:
```bash
git clone https://github.com/Unnati234/Elder-Assist.git
cd Elder-Assist
npm install
```
 
2. Create the database and tables:
```bash
mysql -u your_username -p -e "CREATE DATABASE elder_assist;"
mysql -u your_username -p elder_assist < schema.sql
```
 
3. Copy `.env.example` to `.env` and fill in your MySQL details:
```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=elder_assist
```
 
4. Start the server:
```bash
node server.js
```
 
   The API runs on `http://localhost:3000`.
 
5. Open `home.html` in your browser (for example with the VS Code Live Server extension). The pages call the API on port 3000.
### Creating an admin account
 
Sign up as a normal user, then promote the account in MySQL:
 
```sql
UPDATE users SET role = 'admin' WHERE email = 'your_email@example.com';
```
 
Logging in with that account opens the admin dashboard.
 
### Emergency contact number
 
The WhatsApp emergency button is set up in the `sendWhatsApp()` function in `home.html`. Change the phone number there (country code, no `+` or spaces) to the contact who should receive alerts.
 
## API Overview
 
| Method | Endpoint                | Access | Purpose                          |
|--------|-------------------------|--------|----------------------------------|
| POST   | `/register`             | Public | Create an account                |
| POST   | `/login`                | Public | Log in                           |
| POST   | `/contact`              | Public | Save a contact message           |
| POST   | `/log-emergency`        | Public | Save an emergency request        |
| GET    | `/users`                | Admin  | List users                       |
| DELETE | `/users/:id`            | Admin  | Delete a user (not admins)       |
| GET    | `/contacts`             | Admin  | List contact messages            |
| POST   | `/contacts/:id/reply`   | Admin  | Reply to a contact message       |
| GET    | `/emergencies`          | Admin  | List emergency requests          |
| GET    | `/users.csv`            | Admin  | Download users as CSV            |
 
## Usage
 
1. A senior citizen signs up and logs in.
2. From the home page they can press the emergency button to send a WhatsApp alert, browse services, chat with the support chatbot, or send a message through the contact page.
3. Emergency requests raised from the services page are logged in the database.
4. An admin logs in to manage users, answer messages, review emergencies and export users as CSV.
## Future Improvements
 
- Replace the header-based admin check with server-side sessions or JWT authentication
- Move the API address into a configuration value instead of `http://localhost:3000` in each page
- Connect the support chatbot to a language model for richer replies
- Add staffed live support, multi-language support and appointment reminders
- Deploy the app online with a hosted MySQL database

<!--
## 📸 Screenshots

![Login Page]<img width="1918" height="1020" alt="Login_Page" src="https://github.com/user-attachments/assets/ea886a05-7d87-4269-adc0-07c07ce0315b" />
![Home page]<img width="1917" height="1017" alt="Home_Page" src="https://github.com/user-attachments/assets/7b6f4fe7-b5fa-40d8-8259-7ea86218be74" />
![Services page1]<img width="1918" height="1020" alt="Services_Part1" src="https://github.com/user-attachments/assets/6bb476bc-acca-42f9-8685-cc5bf1a5fead" />
![Services page2]<img width="1918" height="1015" alt="Services_Part2" src="https://github.com/user-attachments/assets/6d423d1e-2d35-45d7-9319-8138ba5e62b6" />
![Admin dashboard]<img width="1916" height="927" alt="Admin_Panel_1" src="https://github.com/user-attachments/assets/b4e7dfb6-54a9-47f1-bf40-35144297d036" />

## Author
 
**Unnati**
MCA student, Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM), New Delhi
[LinkedIn](https://www.linkedin.com/in/unnati-03g04/) | [GitHub](https://github.com/Unnati234)
 
