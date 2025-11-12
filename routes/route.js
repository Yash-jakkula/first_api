const router = require("express").Router();

const { home } = require("../methods/base");

router.get("/", home);

module.exports = router;
