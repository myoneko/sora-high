require("dotenv").config();
const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const path = require("path");

// Constants
const port = process.env.SERVER_PORT || 3000;
const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "your_db_user",
    password: process.env.DB_PASS || "your_db_password",
    database: process.env.DB_NAME || "your_db_name",
};

// MySQL connection pool
let pool;
async function createPool() {
    try {
        pool = mysql.createPool(dbConfig);
        console.log("[+] Connected to MySQL database!");
    } catch (error) {
        console.error("[-] Error connecting to MySQL:", error);
        process.exit(1);
    }
}

// EndPoints
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/search", async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT name, student_id FROM students WHERE LOWER(name) LIKE '%${req.query.name}%' LIMIT 4;`
        );
        res.json(rows);
    } catch (error) {
        console.log("[!] Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.get("/id_check", async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT student_id FROM students WHERE student_id = '${req.query.id}';`);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch profile data" });
    }
});

app.get("/profile", async (req, res) => {
    try {
        const [rows] = await pool.query(
            req.query.brief
                ? `SELECT name, age, gender, class, element, birthday, contact_number, constellation FROM students WHERE student_id = '${req.query.id}';`
                : `SELECT name, age, gender, class, element, birthday, contact_number, constellation, companion, admission_date, student_id FROM students WHERE student_id = '${req.query.id}';`
        );
        res.json(rows);
    } catch (error) {
        console.log("[!] Error fetching profile:", error);
        res.status(500).json({ error: "Failed to fetch profile data" });
    }
});

// main
async function startServer() {
    await createPool();
    app.listen(port, () => {
        console.log(`[+] Sora-High - http://localhost:${port}`);
    });
}
startServer();

// Shutdown
process.on("SIGINT", async () => {
    console.log("[.] Shutting down...");
    if (pool) {
        await pool.end();
        console.log("[.] Closed the database connection.");
    }

    process.exit(0);
});
