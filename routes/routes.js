const express = require("express");
const router = express.Router();
const mymodel = require("../models/myschema");
const mymenu = require("../models/menuSchema");



// for adding person data
router.post("/resturant", async (req, resp) => {
    try {
      const Data = req.body; // request that comes from client save it in body
  
      // making a new document with mongoose model
  
      const newwork = new mymodel(Data);
  
      const response = await newwork.save();
      console.log("data has bee saved");
      resp.status(200).json(response);
    } catch (error) {
      console.log(error);
      resp.status(500).json({ error: "Internal Sever Error" });
    }
  });

  // for fetching persons data
router.get("/resturant", async (req, resp) => {
    try {
      const response = await mymodel.find();
      console.log(response);
      resp.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  });

  
  // for adding menu data

router.post("/menu", async (req, resp) => {
    try {
      const data1 = req.body;
      // creating a new document to store the comming req from body
      const newmenu = new mymenu(data1);
      const responsee = await newmenu.save();
      console.log("Menu Data has been Saved!");
      resp.status(200).json(responsee);
    } catch (error) {
      console.log(error);
      resp.status(500).json({ error: "Internal Sever Error" });
    }
  });


router.get('/menu', async (req,resp)=>{
    try {
        const response = await mymenu.find();
        console.log(response);
        resp.status(200).json(response);
    } catch (error) {
        console.log(error);
        resp.status(500).json({ error: "Internal Sever Error" });
    }
})

router.get('/resturant/:job', async(req,resp)=>{

try {
  const workType = req.params.job;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
    const response = await mymodel.find({work: workType})
    console.log("Job Data Has Been Fitched!");
    resp.status(200).json(response);
  }else{
    console.log(error);
  resp.status(404).json({error: "Error Work Type Not Found!"});
  }
} catch (error) {
  console.log(error);
  resp.status(500).json({error: "Invalid Server Error"});
}
  
});

module.exports = router;