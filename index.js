const express = require("express");
const app = express();
const faker = require("faker");


app.get("/user", (req, res) => {
    const user = {
        firstname: faker.name.firstName(),
        job: faker.name.jobTitle()
    };

    res.json(user);
});
app.get("/user/male", (req, res) => {
    const user = {
        firstname: faker.name.firstName(0),
        job: faker.name.jobTitle()
    };

    res.json(user);
});
app.get("/user/female", (req, res) => {
    const user = {
        firstname: faker.name.firstName(1),
        job: faker.name.jobTitle()
    };

    res.json(user);
});


app.use("/", express.static("web"))


app.listen(8080,"127.0.0.1", () => {
    console.log("Servidor iniciado");
});