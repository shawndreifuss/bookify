const connection = require('../config/connection');
const { User } = require('../models');
const { getRandomName, getRandomUsername, getRandomPassword } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');


  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  const users = [];
 

  for (let i = 0; i < 20; i++) {  
    const name = getRandomName()
    const username = getRandomUsername();
    const email = name.split(' ')[0] + '@test.com';
    const password = getRandomPassword();
    const avatar = `https://i.pravatar.cc/300`;

    users.push({
      username,
      email,
      name,
     password,
     avatar,
     friends: [],
     favorites: [],
     library: [],
    });
  }

  await User.collection.insertMany(users);
  

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
