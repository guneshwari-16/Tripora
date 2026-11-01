import "../styles/Destinations.css";

import goa from "../assets/destinations/goa.jpg";
import paris from "../assets/destinations/paris.jpg";
import tokyo from "../assets/destinations/tokyo.jpg";
import dubai from "../assets/destinations/dubai.jpg";
import switzerland from "../assets/destinations/switzerland.jpg";
import rome from "../assets/destinations/rome.jpg";


function Destinations() {

  const places = [

    {
      name: "Goa",
      country: "India",
      image: goa,
      budget: "₹25,000",
      rating: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Paris",
      country: "France",
      image: paris,
      budget: "₹1,20,000",
      rating: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Tokyo",
      country: "Japan",
      image: tokyo,
      budget: "₹90,000",
      rating: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Dubai",
      country: "UAE",
      image: dubai,
      budget: "₹80,000",
      rating: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Switzerland",
      country: "Switzerland",
      image: switzerland,
      budget: "₹1,50,000",
      rating: "⭐⭐⭐⭐⭐",
    },

    {
      name: "Rome",
      country: "Italy",
      image: rome,
      budget: "₹1,10,000",
      rating: "⭐⭐⭐⭐⭐",
    },

  ];


  return (

    <section 
      id="destinations" 
      className="destinations"
    >

      <div className="destinations-content">

        <h2>
          Popular Destinations
        </h2>


        <p>
          Explore some of the world's most loved travel destinations.
        </p>



        <div className="destination-grid">

          {places.map((place, index) => (

            <div 
              className="card" 
              key={index}
            >

              <img 
                src={place.image} 
                alt={place.name}
              />


              <div className="card-content">


                <h3>
                  {place.name}
                </h3>


                <p>
                  {place.country}
                </p>


                <span>
                  {place.rating}
                </span>


                <h4>
                  {place.budget}
                </h4>


                <button>
                  Explore
                </button>


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}


export default Destinations;