const myController = require("../controllers/index");
const routes = require("express").Router();
routes.get("/", myController.helloFunction);
routes.get("/ttech", myController.ttechFunction)
module.exports = routes;