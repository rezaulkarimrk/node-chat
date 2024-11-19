//external imports
const express = require("express");

//interna imports
const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

//login page
router.get("/", decorateHtmlResponse("Inbox"), getLogin);

module.exports = router;
