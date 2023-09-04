const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { User } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
        await User.create(userData);
        console.log('Seed Successful!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await db.close();
        process.exit(0);
    }
});

// db.once('open', async () => {
//     await cleanDB('User', 'users');

//     await User.create(userData);

//     console.log('Seed Successful!');
//     await db.close();
//     process.exit(0);
// });
