const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router')
const db = require("./models/");
const ldap = require("ldapjs");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(router); 

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 
  // LDAP AUTH https://www.youtube.com/watch?v=73cQJ08h4cg
  // Get all users https://www.youtube.com/watch?v=UaSyRbVD_-A
// function authenticateDN(username, password) {
//   const client = ldap.createClient({
//     url: 'ldap://127.0.0.1:1389'
//   });
//   client.bind(username, password, function(err){
//     if(err){
//       console.log('Error in new connection', err)
//     }else {
//       console.log("Auth success");
//     }
//   })
//   authenticateDN();

// }


app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
