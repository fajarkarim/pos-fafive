var jwt = require('jsonwebtoken')
var token = req.headers.token
var decode = jwt.verify(token, 'inirahasia')

let user = (req, res, next) => {
  if (!decode) {
    res.status(403).send(`wrong token`)
  } else if (decode.role == 'user' || decode.role == 'admin'){
    next()
  }
}

let admin = (req, res, next) => {
  if (!decode) {
    res.status(403).send(`wrong token`)
  } else if (decode.role == 'admin') {
    next()
  } else {
    res.status(403).send('your not authorized')
  }
}

module.exports = {
  user,
  admin
}
