const { authenticate } = require('ldap-authentication')
const db = require("../models");
const User = db.users;


    exports.LdapAuth = async (req, res) => {      
        const {email, password} = req.body;
        if(!email || !password) {
            return res.json('Please enter all fields')
        }
        console.log(email, password);
        let options = {
            ldapOpts: {
              url: 'ldap://ldap.kaliop.net',
              // tlsOptions: { rejectUnauthorized: false }
            },
            userDn: `uid=${email},dc=kaliop,dc=loc`,
            userPassword: {password},
            userSearchBase: 'dc=kaliop,dc=loc',
            usernameAttribute: 'uid',
            username: {email},
            // starttls: false
          }
    
    // auth with admin
    // let options = {
    //   ldapOpts: {
    //     url: 'ldap://ldap.forumsys.com',
    //     // tlsOptions: { rejectUnauthorized: false }
    //   },
    //   adminDn: 'cn=read-only-admin,dc=example,dc=com',
    //   adminPassword: 'password',
    //   userPassword: 'password',
    //   userSearchBase: 'dc=example,dc=com',
    //   usernameAttribute: 'uid',
    //   username: 'gauss',
    //   // starttls: false
    // }
  
    try {
       const result = await authenticate(options);
       console.log(result)

    } catch(e){
      console.error(e)
    } 
  
    // auth with regular user
}
