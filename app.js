require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "this is working"
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server is running on port :",process.env.APP_PORT);
})