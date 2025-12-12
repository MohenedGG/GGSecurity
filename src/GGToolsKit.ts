import express from "express";
import Protections from "./containers/ProtectionsContainer";
import utils from "./containers/UtilsContainer";


const app = express();
app.use(express.json());

const protections = new Protections();

app.use(protections.getAllMiddlewares());
// Test route
app.post("/test", (req, res) => {
    res.json({
        original: req.body,
        cleaned: Object.keys(req.body).reduce((acc, key) => {
            acc[key] = protections.xss.cleanText(req.body[key]);
            return acc;
        }, {} as Record<string, string>),
    });
});

app.get("/", (req, res) => res.send(utils.today() + " " + utils.nowTime()));

app.listen(3000, () => console.log("Server running on port 3000"));
