const cron = require('node-cron');
const express = require('express')
const app = express();



cron.schedule('*/1 * * * *', () => {
    console.log('running a task every minute');
});




const port = 3300;
app.listen(port, () => {
    console.log('Server is listen...... ')
});