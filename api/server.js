const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4001;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const service_masterRoute = require('./service.route');
const station_masterRoute = require('./station.route');
const vehicletypeRoute=require('./VehicleType.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/service', service_masterRoute);
app.use('/station', station_masterRoute);
app.use('/vehicletype',vehicletypeRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});