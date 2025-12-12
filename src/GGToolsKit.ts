import express from "express";
import XSSProtection from "./protections/XSSProtection";
import HelmetProtection from "./protections/HelmetProtection";
import Logger from "./protections/Logger";

const app = express();
app.use(express.json());

// Instances
const xssProtection = new XSSProtection();
const helmetProtection = new HelmetProtection();
const logger = new Logger("dev");

// Middleware
app.use(xssProtection.cleanBody);
app.use(helmetProtection.getMiddleware());
app.use(logger.getMiddleware());

// Test route
app.post("/test", (req, res) => {
    res.json({
        original: req.body,
        cleaned: Object.keys(req.body).reduce((acc, key) => {
            acc[key] = xssProtection.cleanText(req.body[key]);
            return acc;
        }, {} as Record<string, string>),
    });
});

app.get("/", (req, res) => res.send("Hello Secure Express!"));

app.listen(3000, () => console.log("Server running on port 3000"));
