const { Router } = require("express");
const router = Router();
const bcrypt = require("bcrypt");
const User = require("./models/user");
const saltRounds = 10;


router.get('/', (req,res) => {
  console.log(res.locals);
  
  res.send(req.session.user)
})

  router.post("/register",async (req, res) => {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>',req.body);
    try {
      const { email, password, name } = req.body.user;
      const user = await User.create({
        email,
        password: await bcrypt.hash(password, saltRounds),
        name,
      });
      console.log(user);
      req.session.user = user;
      console.log(req.session.user);
      
      res.json({status:200,user});
    }catch(err){
      res.json({status:400,err});
    }
  });


  router.post("/login",async (req, res) => {
    console.log(req.body);    
    const { email, password } = req.body.user;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.user = user;
      console.log(req.session.user);
      res.json({status:200,user});
    } else {
      res.json({status:400,error:true});
    }
  });

router.get("/logout", async (req, res, next) => {
    try {
      await req.session.destroy();
      res.clearCookie("user_sid");
      res.json({status:200})
    } catch (error) {
      res.json({error});
    }
});

module.exports = router;
