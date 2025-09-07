const express = require("express");
const router = express.Router();
const { response } = require("../utils");
const { v4: uuidv4 } = require("uuid");

const urls = [];

router.post("/", (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.json(response(false, "URL is required", null));
  }
  if (urls.some((u) => u.url === url)) {
    return res.json(response(false, "URL already exists", null));
  }
  urls.push({
    id: uuidv4(),
    url,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.json(response(true, "Download request received", urls));
});
router.get("/", (req, res) => {
  res.json(response(true, "Download request received", urls));
});

module.exports = router;
