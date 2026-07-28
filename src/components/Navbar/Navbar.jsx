import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  const navItems = [
    { name:"Home", path:"/" },
    { name:"About", path:"/about" },
    { name:"Programs", path:"/programs" },
    { name:"Services", path:"/services" },
    { name:"Mentors", path:"/mentors" },
    { name:"Investors", path:"/investors" },
    { name:"Events", path:"/events" },
    { name:"Blog", path:"/blog" },
    { name:"Contact", path:"/contact" },
    { name:"FAQs", path:"/faqs" },
  ];



  return (

    <header className="navbar">


      <Link
        to="/"
        className="navbar-logo"
      >
        StartupHub
      </Link>




      <nav className={`nav-links ${isOpen ? "active" : ""}`}>


        {
          navItems.map((item)=>(

            <NavLink

              key={item.name}

              to={item.path}

              onClick={()=>setIsOpen(false)}

              className={({isActive}) =>
                isActive ? "active" : ""
              }

            >

              {item.name}

            </NavLink>

          ))
        }



        <Link
          to="/login"
          onClick={()=>setIsOpen(false)}
        >
          Login
        </Link>



        <Link
          to="/register"
          onClick={()=>setIsOpen(false)}
        >
          Apply Now
        </Link>



      </nav>




      <button

        className="menu-icon"

        onClick={()=>setIsOpen(!isOpen)}

      >

        {
          isOpen
          ?
          <X size={28}/>
          :
          <Menu size={28}/>
        }


      </button>



    </header>

  );

}


export default Navbar;