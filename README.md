# Elder Assist

A web platform that brings essential support services together for senior citizens: emergency help, healthcare, legal and pension assistance, live support, and an emotional support chatbot, all in one accessible place.

Built with HTML, CSS, JavaScript, Node.js and MySQL.

## Features

**For senior citizens**
- Sign up and log in
- Emergency requests with WhatsApp emergency alerts
- Healthcare services
- Legal and pension services
- Live support
- Emotional support chatbot
- Contact features
- Accessibility features for easier use

**For administrators**
- Admin management of users, requests and services
- CSV export of data

## Tech Stack

| Layer           | Technology            |
|-----------------|-----------------------|
| Frontend        | HTML, CSS, JavaScript |
| Backend         | Node.js               |
| Database        | MySQL                 |
| Version control | Git                   |

## Project Structure

> Update this to match your actual folders.

```
elder-assist/
├── [public/]        # Static files (CSS, JS, images)
├── [views/]         # Frontend pages
├── [routes/]        # API routes
├── [config/]        # Database configuration
├── [server.js]      # Application entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [MySQL](https://www.mysql.com/) (v8 or later)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   cd elder-assist
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create the database and import the schema:

   ```sql
   CREATE DATABASE elder_assist;
   ```

   ```bash
   mysql -u your_username -p elder_assist < [schema.sql]
   ```

4. Create a `.env` file in the project root:

   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=elder_assist
   PORT=3000
   [WHATSAPP_API_KEY=your_key]
   ```

5. Start the server:

   ```bash
   node [server.js]
   ```

6. Open `http://localhost:3000` in your browser.

## Usage

1. A senior citizen signs up and logs in.
2. From the dashboard, they can raise an emergency request, browse healthcare, legal and pension services, talk to live support, or chat with the emotional support chatbot.
3. Emergency requests trigger a WhatsApp alert.
4. Admins log in to manage users and services and export data as CSV.

## Future Improvements

- [e.g. mobile app or fully responsive layout]
- [e.g. multi-language support]
- [e.g. appointment reminders]

## Author

**Unnati**
MCA student, BVICAM, New Delhi
[GitHub link] | [LinkedIn link]

## License

[Add a license, e.g. MIT, or remove this section.]
