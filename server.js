#!/usr/bin/env node
import minimist from "minimist";
import express from "express";

import { rps } from "./lib/bin/rps-cli.js";
import { rpsls } from "./lib/bin/rpsls-cli.js";

var args = minimist(process.argv.slice(2));
const PORT = args.port || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/app", (req, res) => {
    res.status(200).send("200 OK")
});

app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
});

app.get("app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
});

app.get("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

app.post("app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});

app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

app.listen(PORT, () => {
    console.log('Server listening on port ${PORT}');
});