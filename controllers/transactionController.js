const Deposit = require("../models/depositModel.js")
const Widthdrow = require("../models/widthdrowModel.js")
const jwt = require("jsonwebtoken");
const app = {};


app.Dashboard = (req, res, next) => {
try{
  res.json({
    avilable_balance: 200,
    total_deposits: 600,
    total_withdrows: 300,
  })
}catch(err){
  next(err)
}
}
app.getDeposits = async(req,res,next)=>{
try{
  const deposits = await Deposit.find({user_id: jwt.decode(req.cookies.token).id})
  res.send(deposits)
}catch(err){
  next(err)
}
}


app.AddDeposit = async(req, res, next)=> {
  try{
    const depoSave = new Deposit({
      user_id: jwt.decode(req.cookies.token).id,
      ammount: req.body.ammount,
      trns_id: req.body.trns_id
    });
    const savedata = await depoSave.save();
    if(savedata){
      res.send("saved");
    }else{
      res.send("error")
    }
  }catch(err){
    next(err)
  }
}

app.getWidthdrow = async(req,res,next)=>{
try{
  const deposits = await Widthdrow.find({user_id: jwt.decode(req.cookies.token).id})
  res.send(deposits)
}catch(err){
  next(err)
}
}
app.AddWidthdrow = async(req, res, next)=> {
  try{
    const depoSave = new Widthdrow({
      user_id: jwt.decode(req.cookies.token).id,
      ammount: req.body.ammount,
      wallet_adress: req.body.wallet_adress
    });
    const savedata = await depoSave.save();
    if(savedata){
      res.send("saved");
    }else{
      res.send("error")
    }
  }catch(err){
    next(err)
  }
}

module.exports = app;
