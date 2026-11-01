import "../styles/Testimonials.css";


function Testimonials() {


  const reviews = [

    {
      name: "Priya Sharma",
      place: "Chennai",
      review:
        "Tripora made planning my Goa vacation so easy. The itinerary and budget estimate were perfect!",
      rating: "⭐⭐⭐⭐⭐",
    },


    {
      name: "Rahul Kumar",
      place: "Bangalore",
      review:
        "I loved the hotel recommendations and packing checklist. Everything was in one place.",
      rating: "⭐⭐⭐⭐⭐",
    },


    {
      name: "Ananya Patel",
      place: "Mumbai",
      review:
        "A beautiful and easy-to-use travel planner. It saved me a lot of time while planning my family trip.",
      rating: "⭐⭐⭐⭐⭐",
    },

  ];



  return (


    <section 
      id="testimonials"
      className="testimonials"
    >


      <h2>
        What Travelers Say
      </h2>



      <p>
        Real experiences from people who planned their trips with Tripora.
      </p>




      <div className="testimonial-grid">


        {reviews.map((review, index) => (


          <div 
            className="testimonial-card" 
            key={index}
          >


            <div className="rating">

              {review.rating}

            </div>




            <p className="review">

              "{review.review}"

            </p>




            <h3>

              {review.name}

            </h3>




            <span>

              {review.place}

            </span>



          </div>


        ))}



      </div>



    </section>


  );

}


export default Testimonials;