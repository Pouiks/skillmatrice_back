const MongoClient = require('mongodb').MongoClient;

let db;
let users;
const connectionString = process.env.MONGO_URI
const mongoConnect = () => {
  MongoClient.connect(
    "mongodb://localhost:27017/skill_matrice",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then( (client) => {
      console.log('Connecté à la base de données');
      db = client.db("skill_matrice");
      users = db.collection("users");
      console.log(users)

      
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (db) {
    return db;
  }
  throw 'Aucune base de données trouvée';
};



exports.mongoConnect = mongoConnect;
exports.getDb = getDb;