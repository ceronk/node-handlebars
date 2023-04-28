const mongoose = require('mongoose');
const { MONGODB } = require('./config');

(async () => {
  try {
    const db = await mongoose.connect(MONGODB);
    console.log("DB connected to: ", db.connection.name);
  } catch (e) {
    console.log(e)
  }
})();