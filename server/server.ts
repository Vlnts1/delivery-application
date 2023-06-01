import { createOrder, getAllShops } from "./controllers/productController";
const bodyParser = require('body-parser');

const express = require('express');
const mongoose = require('mongoose');
const config = require("config");
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.get('/api/shops', getAllShops);
app.post('/api/orders', createOrder);

const PORT = 5000; 

  const start = async () => {
    try {
      await mongoose.connect(config.get('dbUrl'))
      console.log('Connected to database');
      
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });      
    } catch (e) {
        console.error('Error connecting to the database', e);
    }
  }
  start()


