const connection = require('../config/connection');
const { User, Playlist } = require('../models');
const { getRandomName, getRandomUsername, getRandomPassword } = require('./data');
const playlistData = require('./playlistData.json');

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

  let playlistCheck = await connection.db.listCollections({ name: 'playlists' }).toArray();
  if (playlistCheck.length) {
    await connection.dropCollection('playlists');
  }

  await Playlist.collection.insertMany(playlistData);

  let bookCheck = await connection.db.listCollections({ name: 'books' }).toArray();
  if (bookCheck.length) {
    await connection.dropCollection('books');
  }
  

  // loop through the saved applications, for each application we need to generate a application response and insert the application responses
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
