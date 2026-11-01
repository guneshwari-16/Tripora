import "../styles/Itinerary.css";


function Itinerary({ trip }) {


  if (!trip) {

    return null;

  }



  const days = Number(trip.days);



  const getActivities = () => {


    const interest = trip.interests.toLowerCase();



    if (interest.includes("beach")) {

      return [

        "🏖️ Visit beautiful beaches",

        "🌅 Watch sunset views",

        "🏄 Try water activities",

        "🍴 Enjoy local seafood",

      ];

    }



    if (interest.includes("food")) {

      return [

        "🍴 Explore famous restaurants",

        "🥘 Taste local cuisine",

        "☕ Visit popular cafes",

        "👨‍🍳 Join a food experience",

      ];

    }



    if (interest.includes("adventure")) {

      return [

        "🥾 Explore adventure locations",

        "🏔️ Try outdoor activities",

        "🚵 Experience thrilling activities",

        "📸 Capture scenic views",

      ];

    }



    return [

      "🏛️ Explore famous attractions",

      "📸 Take memorable photos",

      "🍴 Try local food",

      "🛍️ Explore local markets",

    ];

  };




  const activities = getActivities();





  return (


    <div className="itinerary">


      <h2>

        🗺️ Your Travel Plan

      </h2>




      {Array.from({ length: days }, (_, index) => (


        <div

          className="day-card"

          key={index}

        >


          <h3>

            Day {index + 1}

          </h3>



          <p>

            📍 Explore {trip.destination}

          </p>



          <p>

            🎯 {activities[index % activities.length]}

          </p>



        </div>


      ))}



    </div>


  );


}


export default Itinerary;