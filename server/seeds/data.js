const names = [
  "Deborah",
  "Marley",
  "Willow",
  "Lorelei",
  "Byron",
  "Maritza",
  "Alyvia",
  "Jaida",
  "Yusuf",
  "Jose",
  "Jaelynn",
  "Maddox",
  "Nikhil",
  "Brodie",
  "Esteban",
  "Magdalena",
  "Cindy",
  "Valery",
  "Lailah",
  "Felicity",
  "Paige",
  "Jadyn",
  "Desiree",
  "Tomas",
  "Asher",
  "Erin",
  "Ruben",
  "Ashtyn",
  "Anaya",
  "Sage",
  "Linda",
  "Gardner",
  "Claudia",
  "Thompson",
  "Early",
  "Kenny",
  "Velez",
  "Reggie",
  "Butler",
  "Lilli ",
  "Cunningham",
  "Elisa ",
  "Patel",
  "Milton",
  "Bradford",
  "Katie",
  "Lin",
  "Saarah",
  "Moran",
];

const users = [];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;

// Gets a random name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

const getRandomPassword = () => { 
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var passwordLength = 12;
 var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password
}

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomUsername, getRandomPassword };
