const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('*', (req, res) => {
  res.json({ ok: 200 });
});

module.exports = router;
