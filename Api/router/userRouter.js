const express = require("express");
const router = express.Router();
const usermodel = require('../model/userModel');
const { getalluser } = require("../controller/userController");

router.post('/user/new', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.query);
  //console.log(req.body);
  const users = await usermodel.create({ name, email, password });
  res.cookie('token', 'geet').json({
    success: true,
    message: 'registration successfully',
  });
});

router.get('/user/all',getalluser );

module.exports = router;
