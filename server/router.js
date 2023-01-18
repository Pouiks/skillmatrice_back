const express = require('express');
// var bodyParser = require('body-parser')
const router = express.Router();


// const UserController = require('./controllers/user');
const users = require("./controllers/users.controller");
const auth = require("./controllers/auth");

// GET
router.get("/users", users.findAll);
// router.get("users/:name", UserController.getOneUserByName);
router.get("/users/:technos", users.findByTechno);

// // POST
router.post("/addUser", users.create);

router.post("/ldapauth", auth.LdapAuth);

// // PUT
router.put("/updateUser/:id", users.update);

// DELETE
router.delete("/delete/:id", users.delete);

module.exports = router;