const Trip = require("../models/Trip");


// Save a new trip
const createTrip = async (req, res) => {

  try {

    const {
      destination,
      days,
      budget,
      interests
    } = req.body;


    const trip = await Trip.create({

      user: req.user.id,

      destination,

      days,

      budget,

      interests

    });


    res.status(201).json({

      success: true,

      message: "Trip saved successfully!",

      trip

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



// Get logged-in user's trips
const getMyTrips = async (req, res) => {

  try {

    const trips = await Trip.find({

      user: req.user.id

    });


    res.status(200).json({

      success: true,

      trips

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



// Delete a trip
const deleteTrip = async (req, res) => {

  try {

    const trip = await Trip.findOneAndDelete({

      _id: req.params.id,

      user: req.user.id

    });


    if (!trip) {

      return res.status(404).json({

        success: false,

        message: "Trip not found"

      });

    }


    res.status(200).json({

      success: true,

      message: "Trip deleted successfully"

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



// Update a trip
const updateTrip = async (req, res) => {

  try {

    const trip = await Trip.findOneAndUpdate(

      {
        _id: req.params.id,
        user: req.user.id
      },

      req.body,

      {
        new: true
      }

    );


    if (!trip) {

      return res.status(404).json({

        success: false,

        message: "Trip not found"

      });

    }


    res.status(200).json({

      success: true,

      message: "Trip updated successfully",

      trip

    });


  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};



module.exports = {

  createTrip,

  getMyTrips,

  deleteTrip,

  updateTrip

};