import express = require('express');
const router = express.Router();

router.get('/', (req : express.Request, res : express.Response) => {
  res.json("My to do list app");
});

router.get('/items', (req : express.Request, res : express.Response) => {
  
});

module.exports = router;