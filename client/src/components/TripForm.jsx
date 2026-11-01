import { useState } from "react";
import "../styles/TripForm.css";

import { createTrip } from "../services/tripService";

import TripResult from "./TripResult";
import Itinerary from "./Itinerary";


function TripForm() {


  const [trip, setTrip] = useState({

    destination: "",
    days: "",
    budget: "",
    interests: "",

  });



  const [generatedTrip, setGeneratedTrip] = useState(null);




  const handleChange = (e) => {

    setTrip({

      ...trip,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = async (e) => {

    e.preventDefault();


    try {


      const response = await createTrip(trip);


      console.log(response);



      // Generate itinerary

      setGeneratedTrip(trip);



      alert("🎉 Trip Saved Successfully!");



      setTrip({

        destination: "",
        days: "",
        budget: "",
        interests: "",

      });



    } catch (error) {


      console.error(error);


      alert("❌ Failed to save trip.");


    }


  };





  return (


    <section

      id="trip-form"

      className="trip-form"

    >


      <div className="trip-container">


        <h2>

          Plan Your Trip

        </h2>



        <p>

          Enter your travel details to generate your perfect journey.

        </p>





        <form

          className="trip-card"

          onSubmit={handleSubmit}

        >



          <input

            type="text"

            name="destination"

            placeholder="📍 Destination"

            value={trip.destination}

            onChange={handleChange}

            required

          />





          <input

            type="number"

            name="days"

            placeholder="📅 Number of Days"

            value={trip.days}

            onChange={handleChange}

            required

          />





          <input

            type="number"

            name="budget"

            placeholder="💰 Budget"

            value={trip.budget}

            onChange={handleChange}

            required

          />





          <input

            type="text"

            name="interests"

            placeholder="🎯 Interests (Beach, Adventure, Food...)"

            value={trip.interests}

            onChange={handleChange}

            required

          />





          <button type="submit">

            ✈️ Generate Trip

          </button>



        </form>





        {/* Trip Result */}

        <TripResult trip={generatedTrip} />





        {/* Generated Itinerary */}

        <Itinerary trip={generatedTrip} />





      </div>


    </section>


  );


}


export default TripForm;