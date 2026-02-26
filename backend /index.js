import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    console.console.log("this is server");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
