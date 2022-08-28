const createError = require("../middlewares/createError");
const jwt = require("jsonwebtoken");
const checkAuthMiddleware = (req, res, next) => {
  try{
    if(req.cookies.token){
      const verify = jwt.verify(req.cookies.token, process.env.JWT)
      if(verify){
        next()
      }else{
        res.json({
          success: false,
          status: 401,
          message: "Not Authorized.1"
        })
      }
    }else{
      res.json({
        success: false,
        status: 401,
        message: "Not Authorized.2"
      })
    }
  }catch(err){
    res.json({
      success: false,
      status: 401,
      message: "Not Authorized.3"
    })
  }

}


module.exports = checkAuthMiddleware;
