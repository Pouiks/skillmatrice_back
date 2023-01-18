// const db = require('../models')
// const User = db.users

// exports.findAll = (req, res) => {
//   User.findAll()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     res.status(500).send({ message: err.message})
//   })
// };

// async function getAllUsers(req, res) {
//   db.collection('users').find().toArray((err, users) => {
//     if (err) {
//       console.error(err);
//       res.sendStatus(500);
//       return;
//     }

//     // Renvoyer les utilisateurs dans la réponse
//     console.log(users);
//     res.json(users)
//   });

// }

// async function getOneUserById(req, res, db){
//     try {
//       const {id} = req.params;
//       const user = userCollection.find({id: id})
//       return user
//     } catch (error) {
      
//     }
// }

// async function getOneUserByName(req, res, db){
//   const {name} = req.name
//   try {
//     const user = usersCollection.find({
//       name
//     }).toArray((err, user) => {
//       console.log(user);
//       res.send(result);
//     })
//   } catch (error) {
//     console.log(error)
//     res.status(404).json("User doesn't exist")
//   }
// }

// async function getUsersByTechno(req, res, db){
//   const {techno} = req.name
//   try {
//     const users = await getAllUsers();
//     const result = users.filter(techno => techno.name = techno);
//     console.log("result: ",result)
//     return result;
//   } catch (error) {
//     console.log(error)
//     res.status(404).json("This techno doesn't exist")

//   }
// }

// async function addUser(req, res, db) {
//     const {name, job,technos, missions } = req.body
//     try {
//       const user = { 
//         name, 
//         job, 
//         technos: [...technos,{name: "javascript", score: 3}],
//         missions: [...missions,{name:"Backend developer"}]
//     };

//     await usersCollection.insertOne(user, (err, result) => {
//       if (err) {
//         res.send({ 'error': 'An error has occurred' });
//       } else {
//         res.send(result.ops[0]);
//       }
//     });
//     } catch (error) {
//       console.error(error);
//       res.status(400).json("An error occured when adding this user")

//     }

// }

// async function updateUser(req, res, db) {
//   const { id } = req.params
//   const { name, job, technos, missions } = req.body
//   try {
//     const user ={
//       name, 
//       job, 
//       technos: [...technos, technos],
//       missions: [...missions, missions]
//     }
//     const updateUser = usersCollection.update(id, user, {new: true},(err, user) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.send(user);
//       }
//     })
//   } catch (error) {
//     console.log(error);
//     res.json("An error occured when updating this user");
//   }


// }


// // module.exports = UserController;
// module.exports = {
//     getAllUsers,
//     addUser,
//     getOneUserById,
//     getOneUserByName,
//     getUsersByTechno,
//     updateUser
//   };