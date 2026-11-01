import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Navbar.css";


function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {

    if (location.pathname !== "/") return;


    const handleScroll = () => {

      const sections = [
        "home",
        "features",
        "plan",
        "about",
        "contact"
      ];


      sections.forEach((section) => {

        const element = document.getElementById(section);


        if (element) {

          const top = element.offsetTop - 120;

          const height = element.offsetHeight;


          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {

            setActive(section);

          }

        }

      });

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  }, [location.pathname]);





  const closeMenu = () => {

    setMenuOpen(false);

  };





  const handleLogout = () => {

    logout();

    closeMenu();

    navigate("/");

  };





  return (

    <nav className="navbar">


      <div className="logo">

        🌍 Tripora

      </div>




      <div

        className={`hamburger ${menuOpen ? "active" : ""}`}

        onClick={() => setMenuOpen(!menuOpen)}

      >

        <span></span>

        <span></span>

        <span></span>

      </div>





      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>



        <li>

          <a
            href="/#home"
            className={
              active === "home"
              ? "active-link"
              : ""
            }
            onClick={closeMenu}
          >

            Home

          </a>

        </li>





        <li>

          <a
            href="/#features"
            className={
              active === "features"
              ? "active-link"
              : ""
            }
            onClick={closeMenu}
          >

            Features

          </a>

        </li>





        <li>

          <a
            href="/#plan"
            className={
              active === "plan"
              ? "active-link"
              : ""
            }
            onClick={closeMenu}
          >

            Plan Trip

          </a>

        </li>





        <li>

          <a
            href="/#about"
            className={
              active === "about"
              ? "active-link"
              : ""
            }
            onClick={closeMenu}
          >

            About

          </a>

        </li>





        <li>

          <a
            href="/#contact"
            className={
              active === "contact"
              ? "active-link"
              : ""
            }
            onClick={closeMenu}
          >

            Contact

          </a>

        </li>





        {user ? (

          <>


            {/* My Trips */}

            <li>

              <Link
                to="/mytrips"
                onClick={closeMenu}
              >

                ✈️ My Trips

              </Link>

            </li>





            {/* Profile */}

            <li>

              <Link
                to="/profile"
                onClick={closeMenu}
              >

                👤 Profile

              </Link>

            </li>





            {/* Username */}

            <li className="welcome-user">

              👋 {user.name}

            </li>





            {/* Logout */}

            <li>

              <button

                className="logout-btn"

                onClick={handleLogout}

              >

                Logout

              </button>

            </li>


          </>

        ) : (

          <>


            <li>

              <Link

                to="/login"

                onClick={closeMenu}

              >

                Login

              </Link>

            </li>





            <li>

              <Link

                to="/register"

                onClick={closeMenu}

              >

                Register

              </Link>

            </li>


          </>

        )}



      </ul>


    </nav>

  );

}


export default Navbar;