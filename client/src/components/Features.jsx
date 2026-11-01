import "../styles/Features.css";


function Features() {

  return (

    <section 
      id="features"
      className="features"
    >


      <h2>
        Why Choose Tripora?
      </h2>



      <p className="features-subtitle">

        Everything you need to plan the perfect journey.

      </p>




      <div className="features-container">



        <div className="feature-card">

          <div className="icon">
            🗺️
          </div>


          <h3>
            Smart Itinerary
          </h3>


          <p>
            Get a personalized day-by-day travel plan based on your destination.
          </p>


        </div>





        <div className="feature-card">

          <div className="icon">
            💰
          </div>


          <h3>
            Budget Estimator
          </h3>


          <p>
            Estimate your complete travel expenses before your trip.
          </p>


        </div>





        <div className="feature-card">

          <div className="icon">
            🏨
          </div>


          <h3>
            Hotel Suggestions
          </h3>


          <p>
            Discover hotels that perfectly match your budget and preferences.
          </p>


        </div>





        <div className="feature-card">

          <div className="icon">
            🎒
          </div>


          <h3>
            Packing Checklist
          </h3>


          <p>
            Get a smart packing list based on your destination and weather.
          </p>


        </div>




      </div>



    </section>

  );

}


export default Features;