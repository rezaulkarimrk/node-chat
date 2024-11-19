//external imports
const express = require("express");

//interna imports
const { getUser } = require("../controller/userController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

//user page
router.get("/", decorateHtmlResponse("Inbox"), getUser);

module.exports = router;
