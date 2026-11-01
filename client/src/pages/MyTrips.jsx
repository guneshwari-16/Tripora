import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MyTrips.css";


function MyTrips() {


  const navigate = useNavigate();


  const [trips, setTrips] = useState([]);

  const [loading, setLoading] = useState(true);


  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("newest");


  const [editId, setEditId] = useState(null);



  const [editTrip, setEditTrip] = useState({

    destination: "",
    days: "",
    budget: "",
    interests: ""

  });





  const fetchTrips = async () => {


    try {


      const token = localStorage.getItem("token");


      const response = await fetch(

        "http://localhost:5000/api/trips/mytrips",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }

      );


      const data = await response.json();



      if (data.success) {

        setTrips(data.trips);

      }


    } catch(error) {


      console.error(error);


    } finally {


      setLoading(false);


    }


  };





  useEffect(() => {

    fetchTrips();

  }, []);







  const handleDelete = async (id) => {


    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trip?"
    );


    if(!confirmDelete) return;



    try {


      const token = localStorage.getItem("token");


      const response = await fetch(

        `http://localhost:5000/api/trips/${id}`,

        {

          method:"DELETE",

          headers:{
            Authorization:`Bearer ${token}`
          }

        }

      );



      const data = await response.json();



      if(data.success){

        alert("Trip deleted successfully!");

        fetchTrips();

      }



    } catch(error){

      console.error(error);

    }


  };







  const startEdit = (trip) => {


    setEditId(trip._id);


    setEditTrip({

      destination:trip.destination,

      days:trip.days,

      budget:trip.budget,

      interests:trip.interests

    });


  };







  const handleUpdate = async (id) => {


    try {


      const token = localStorage.getItem("token");



      const response = await fetch(

        `http://localhost:5000/api/trips/${id}`,

        {

          method:"PUT",

          headers:{

            "Content-Type":"application/json",

            Authorization:`Bearer ${token}`

          },


          body:JSON.stringify(editTrip)

        }

      );



      const data = await response.json();



      if(data.success){

        alert("Trip updated successfully!");

        setEditId(null);

        fetchTrips();

      }



    }catch(error){

      console.error(error);

    }


  };







  const filteredTrips = trips

    .filter((trip)=>

      trip.destination

      .toLowerCase()

      .includes(search.toLowerCase())

    )

    .sort((a,b)=>{


      if(sort==="newest"){

        return new Date(b.createdAt)-new Date(a.createdAt);

      }


      return new Date(a.createdAt)-new Date(b.createdAt);


    });







  if(loading){

    return(

      <h2 className="loading-text">

        Loading your trips...

      </h2>

    );

  }







  return(


    <section className="my-trips-page">


      <div className="my-trips-container">



        <h2>

          ✈️ My Trips

        </h2>





        <input

          className="search-input"

          type="text"

          placeholder="🔍 Search destination..."

          value={search}

          onChange={(e)=>setSearch(e.target.value)}

        />





        <select

          className="sort-select"

          value={sort}

          onChange={(e)=>setSort(e.target.value)}

        >

          <option value="newest">

            Newest Trips

          </option>


          <option value="oldest">

            Oldest Trips

          </option>


        </select>






        {filteredTrips.length===0 ? (


          <p>

            No trips found.

          </p>



        ):(


          <div className="trips-grid">


            {filteredTrips.map((trip)=>(


              <div

                className="trip-card"

                key={trip._id}

              >



              {editId===trip._id ? (


                <>


                <input

                  value={editTrip.destination}

                  onChange={(e)=>

                    setEditTrip({

                      ...editTrip,

                      destination:e.target.value

                    })

                  }

                />


                <input

                  value={editTrip.days}

                  onChange={(e)=>

                    setEditTrip({

                      ...editTrip,

                      days:e.target.value

                    })

                  }

                />


                <input

                  value={editTrip.budget}

                  onChange={(e)=>

                    setEditTrip({

                      ...editTrip,

                      budget:e.target.value

                    })

                  }

                />


                <input

                  value={editTrip.interests}

                  onChange={(e)=>

                    setEditTrip({

                      ...editTrip,

                      interests:e.target.value

                    })

                  }

                />



                <button

                  className="edit-btn"

                  onClick={()=>handleUpdate(trip._id)}

                >

                  💾 Save

                </button>


                </>



              ):(



                <>


                <h3>

                  📍 {trip.destination}

                </h3>



                <p>

                  📅 {trip.days} Days

                </p>



                <p>

                  💰 ₹ {trip.budget}

                </p>



                <p>

                  🎯 {trip.interests}

                </p>



                <small>

                  Created:

                  {" "}

                  {new Date(trip.createdAt).toLocaleDateString()}

                </small>





                <button

                  className="view-btn"

                  onClick={()=>navigate(

                    "/tripdetails",

                    {

                      state:trip

                    }

                  )}

                >

                  👁 View Details

                </button>





                <button

                  className="edit-btn"

                  onClick={()=>startEdit(trip)}

                >

                  ✏️ Edit

                </button>





                <button

                  className="delete-btn"

                  onClick={()=>handleDelete(trip._id)}

                >

                  🗑 Delete

                </button>



                </>



              )}



              </div>


            ))}


          </div>


        )}



      </div>


    </section>


  );


}


export default MyTrips;