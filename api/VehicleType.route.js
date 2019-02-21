const express = require('express');
const vehicletypeRoutes = express.Router();

// Require Business model in our routes module
let VehicleType = require('./VehicleType.model');

// Defined store route
vehicletypeRoutes.route('/add_vehicle').post(function (req, res) {
  let vehicletype = new VehicleType(req.body);
  vehicletype.save()
    .then(vehicletype => {
      res.status(200).json({'vehicletype': 'VehicleType is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
vehicletypeRoutes.route('/').get(function (req, res) {
    VehicleType.find(function(err, vehicletypes){
    if(err){
      console.log(err);
    }
    else {
      res.json(vehicletypes);
    }
  });
});

// Defined edit route
vehicletypeRoutes.route('/edit_vehicle/:id').get(function (req, res) {
  let id = req.params.id;
  VehicleType.findById(id, function (err, vehicletype){
      res.json(vehicletype);
  });
});

//  Defined update route
vehicletypeRoutes.route('/update_vehicle/:id').post(function (req, res) {
    VehicleType.findById(req.params.id, function(err, vehicletype) {
    if (!vehicletype)
      res.status(404).send("data is not found");
    else {
        vehicletype.vehicle_body = req.body.vehicle_body;
        vehicletype.vehicle_make = req.body.vehicle_make;
        vehicletype.vehicle_model = req.body.vehicle_model;
        

        vehicletype.save().then(vehicletype => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
vehicletypeRoutes.route('/delete_vehicle/:id').get(function (req, res) {
    VehicleType.findByIdAndRemove({_id: req.params.id}, function(err, vehicletype){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = vehicletypeRoutes;