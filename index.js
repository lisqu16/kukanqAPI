const express = require("express");
const app = express();
const wiadomosci = require("./wiadomosci.json");

app.use(express.static(__dirname + "/public/"));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/api.txt", (req, res, next) => {
    res.send(wiadomosci[Math.floor(Math.random() * wiadomosci.length)].text);
});

app.get("/api.json", (req, res, next) => {
    res.send(JSON.stringify(wiadomosci[Math.floor(Math.random() * wiadomosci.length)]));
});

app.listen(1337);