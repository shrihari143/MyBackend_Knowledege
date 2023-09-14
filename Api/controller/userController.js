const usermodel= require("../model/userModel")
 const getalluser= async (req, res) => {
    const users = await usermodel.find({});
    //console.log("hello",users)
    res.json({
      success: true,
      users,
    });
  }
  module.exports={getalluser};