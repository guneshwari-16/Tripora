import "./App.css";

import travelBg from "./assets/travel-bg.jpg";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import TripForm from "./components/TripForm";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MyTrips from "./pages/MyTrips";
import TripDetails from "./pages/TripDetails";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  return (

    <div
      className="app"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.55),
            rgba(0,0,0,0.55)
          ),
          url(${travelBg})
        `
      }}
    >

      <Navbar />


      <main>

        <Routes>


          {/* Home Page */}

          <Route
            path="/"
            element={
              <>

                <section id="home">
                  <Hero />
                </section>


                <section id="features">
                  <Features />
                </section>


                <section id="plan">
                  <TripForm />
                </section>


                <Destinations />


                <Testimonials />


                <section id="about">
                  <About />
                </section>


                <section id="contact">
                  <Contact />
                </section>


              </>
            }
          />



          {/* Login */}

          <Route
            path="/login"
            element={<Login />}
          />



          {/* Register */}

          <Route
            path="/register"
            element={<Register />}
          />



          {/* Protected My Trips */}

          <Route
            path="/mytrips"
            element={
              <ProtectedRoute>

                <MyTrips />

              </ProtectedRoute>
            }
          />



          {/* Protected Trip Details */}

          <Route
            path="/tripdetails"
            element={
              <ProtectedRoute>

                <TripDetails />

              </ProtectedRoute>
            }
          />



          {/* Protected Profile */}

          <Route
            path="/profile"
            element={
              <ProtectedRoute>

                <Profile />

              </ProtectedRoute>
            }
          />


        </Routes>


      </main>


      <Footer />


    </div>

  );

}


export default App;