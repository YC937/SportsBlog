const tokenizer = require('jsonwebtoken');
require('dotenv').config();

// const secret = 'mysecretssshhhhhhh';
const secret = process.env.TOKEN_SECRET
// const expiration = '144h';
const expiration = process.env.TOKEN_EXPIRATION;

// Token Secret Check
if(process.env.TOKEN_SECRET && process.env.TOKEN_SECRET.length > 3){
  console.log("VALID TOKEN_SECRET")
}
else {
  console.log("MISSING TOKEN_SECRET");
}

module.exports = {
  contextTokenizer: ({request: req, contextValue}) => {
    const header = req.http.headers.get('authorization') || req.http.headers.get('Authorization');
    let token = req.http.body.token || header;

    if(header) {
      token = token.split(' ').pop().trim();
    }
    if(!token) {
      return false;
    }

    try {
      const {data} = tokenizer.verify(token, secret, {maxAge: expiration});
      if(data) {
        contextValue.user = data;
      }
      return data;
  } catch(err) {
    console.log(err);
    console.log('contextTokenizer: Invalid token');
  }

  return false;
  },


  signToken: ({ email, name, _id }) => {
    const payload = { email, name, _id };
    return tokenizer.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
