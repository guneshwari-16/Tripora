import { useLocation, useNavigate } from "react-router-dom";
import "../styles/TripDetails.css";


function TripDetails() {

  const location = useLocation();

  const navigate = useNavigate();


  const trip = location.state;



  if (!trip) {

    return (

      <h2 className="loading-text">

        No trip selected

      </h2>

    );

  }



  return (

    <section className="trip-details-page">


      <div className="trip-details-card">


        <h2>
          ✈️ Trip Details
        </h2>


        <h3>
          📍 {trip.destination}
        </h3>


        <p>
          📅 Duration: {trip.days} Days
        </p>


        <p>
          💰 Budget: ₹ {trip.budget}
        </p>


        <p>
          🎯 Interests: {trip.interests}
        </p>


        <p>

          Created:
          {" "}
          {new Date(trip.createdAt).toLocaleDateString()}

        </p>



        <button
          onClick={() => navigate("/mytrips")}
        >

          ← Back To My Trips

        </button>


      </div>


    </section>

  );

}


export default TripDetails;