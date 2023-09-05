const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
  try {
    let connection = models[modelName].collection.conn;
    let collections = await connection.db.listCollections().toArray();
    let modelExists = collections.some(col => col.name === collectionName)

    if (modelExists.length) {
      await db.dropCollection(collectionName);
    }
  } catch (err) {
    throw err;
  }
}


// Just anoither way to do it 

// module.exports = async (modelName, collectionName) => {
//     try {
//         if (models[modelName] && models[modelName].db) {
//             let modelExists = await models[modelName].db.db.listCollections({
//                 name: collectionName
//             }).toArray();

//             // Rest of your code that uses modelExists
//         } else {
//             console.log("Model or 'db' property is undefined.");
//             // Handle the error condition appropriately
//         }
//     } catch (error) {
//         console.error("An error occurred:", error);
//         // Handle the error appropriately
//     }
// };