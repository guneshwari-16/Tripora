import { useAuth } from "../context/AuthContext";
import "../styles/Profile.css";


function Profile() {

  const { user } = useAuth();


  if (!user) {

    return (

      <h2 className="loading-text">

        No user found

      </h2>

    );

  }



  return (

    <section className="profile-page">


      <div className="profile-card">


        <h2>
          👤 My Profile
        </h2>



        <div className="profile-info">


          <p>
            👤 Name:
            {" "}
            {user.name}
          </p>



          <p>
            📧 Email:
            {" "}
            {user.email}
          </p>



        </div>



      </div>


    </section>

  );

}


export default Profile;