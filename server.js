require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DATABASE CONNECTION
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// SIMPLE ADMIN CHECK
function requireAdmin(req, res, next) {
  if (req.headers.role !== "admin") {
    return res.status(403).json({ message: "Access Denied" });
  }
  next();
}

// REGISTER
app.post("/register", async (req, res) => {
  const { firstname, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users (firstname, email, password) VALUES (?, ?, ?)";

    db.query(sql, [firstname, email, hashedPassword], (err) => {
      if (err) {
        console.log("Registration error:", err);
        return res.status(500).json({ message: "Registration Failed" });
      }

      res.json({ message: "User Registered Successfully" });
    });
  } catch (error) {
    console.log("Register server error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.json({ message: "Invalid Email or Password" });
    }

    const user = results[0];

    try {
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return res.json({ message: "Invalid Email or Password" });
      }

      return res.json({
        message: "Login Successful",
        firstname: user.firstname,
        role: user.role,
        email: user.email
      });
    } catch (error) {
      console.log("Login server error:", error);
      return res.status(500).json({ message: "Server Error" });
    }
  });
});

// CONTACT FORM
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const sql = "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.log("Contact save error:", err);
      return res.status(500).json({ message: "Error saving message" });
    }

    res.json({ message: "Message saved successfully" });
  });
});

// ADMIN VIEW USERS
app.get("/users", requireAdmin, (req, res) => {
  const sql = "SELECT id, firstname, email, role FROM users ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Fetch users error:", err);
      return res.status(500).json({ message: "Error fetching users" });
    }

    res.json(results);
  });
});

// DELETE USER
app.delete("/users/:id", requireAdmin, (req, res) => {
  const userId = parseInt(req.params.id, 10);

  if (isNaN(userId)) {
    return res.status(400).json({ message: "Invalid user id" });
  }

  const checkSql = "SELECT id, role, email FROM users WHERE id = ?";

  db.query(checkSql, [userId], (err, rows) => {
    if (err) {
      console.log("Check user error:", err);
      return res.status(500).json({ message: "Server Error while checking user" });
    }

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent deleting admin accounts
    if (rows[0].role === "admin") {
      return res.status(400).json({ message: "Cannot delete admin user" });
    }

    const deleteSql = "DELETE FROM users WHERE id = ?";

    db.query(deleteSql, [userId], (deleteErr, result) => {
      if (deleteErr) {
        console.log("Delete query error:", deleteErr);
        return res.status(500).json({ message: "Delete failed" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "No user deleted" });
      }

      return res.json({ message: "User deleted successfully" });
    });
  });
});

// ADMIN VIEW CONTACTS
app.get("/contacts", requireAdmin, (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Fetch contacts error:", err);
      return res.status(500).json({ message: "Error fetching contacts" });
    }

    res.json(results);
  });
});

// REPLY TO CONTACT
app.post("/contacts/:id/reply", requireAdmin, (req, res) => {
  const contactId = req.params.id;
  const { reply } = req.body;

  const sql = `
    UPDATE contacts
    SET reply = ?, status = 'replied', replied_at = NOW()
    WHERE id = ?
  `;

  db.query(sql, [reply, contactId], (err) => {
    if (err) {
      console.log("Reply update error:", err);
      return res.status(500).json({ message: "Reply update failed" });
    }

    res.json({ message: "Reply saved successfully" });
  });
});

// DOWNLOAD USERS AS CSV
app.get("/users.csv", requireAdmin, (req, res) => {
  const sql = "SELECT id, firstname, email, role FROM users ORDER BY id DESC";

  db.query(sql, (err, rows) => {
    if (err) {
      console.log("CSV export error:", err);
      return res.status(500).send("CSV export failed");
    }

    const header = "id,firstname,email,role\n";
    const body = rows
      .map(
        (r) =>
          `${r.id},"${(r.firstname || "").replace(/"/g, '""')}","${(r.email || "").replace(/"/g, '""')}","${(r.role || "").replace(/"/g, '""')}"`
      )
      .join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="users.csv"');
    res.send(header + body + "\n");
  });
});

// EMERGENCY LOG
app.post("/log-emergency", (req, res) => {
  const { user_email, user_name, page, note } = req.body;

  const sql = `
    INSERT INTO emergencies (user_email, user_name, page, note)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [user_email || null, user_name || null, page || null, note || null],
    (err) => {
      if (err) {
        console.log("Emergency log error:", err);
        return res.status(500).json({ message: "Emergency log failed" });
      }

      res.json({ message: "Emergency logged successfully" });
    }
  );
});

// EMERGENCY DASHBOARD
app.get("/emergencies", requireAdmin, (req, res) => {
  const sql = "SELECT * FROM emergencies ORDER BY id DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.log("Fetch emergencies error:", err);
      return res.status(500).json({ message: "Error fetching emergencies" });
    }

    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});