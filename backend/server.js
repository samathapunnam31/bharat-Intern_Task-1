const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

// MongoDB Connection String
const mongoURI = 'mongodb://localhost:27017/your-database-name';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML file is in the 'public' folder

app.post('/register', async (req, res) => {
  try {
    const { fname, lname, phone, qualification, course, mail, password } = req.body;

    // MongoDB Connection
    const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db();

    // Inserting data into MongoDB
    await db.collection('users').insertOne({
      fname,
      lname,
      phone,
      qualification,
      course,
      mail,
      password,
    });

    client.close();

    res.send('Registration successful!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
