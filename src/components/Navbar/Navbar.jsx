import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Services", path: "/services" },
  { name: "Mentors", path: "/mentors" },
  { name: "Investors", path: "/investors" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "FAQs", path: "/faqs" },
];


  return (

    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">


      <div className="max-w-7xl mx-auto px-5">


        <div className="flex justify-between items-center h-16">


          <Link
            to="/"
            className="text-xl font-bold text-blue-700"
          >
            StartupHub
          </Link>



          <nav className="hidden lg:flex gap-6">


            {navItems.map((item) => (

              <NavLink
                key={item.name}
                to={item.path}

                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }

              >

                {item.name}

              </NavLink>

            ))}


          </nav>




          <div className="hidden lg:flex gap-3">


            <Link
              to="/login"
              className="
              px-4 py-2
              rounded-lg
              border border-blue-600
              text-blue-600
              hover:bg-blue-600
              hover:text-white
              transition"
            >

              Login

            </Link>



            <Link
              to="/register"
              className="
              px-4 py-2
              rounded-lg
              bg-blue-600
              text-white
              hover:bg-blue-700
              transition"
            >

              Apply Now

            </Link>


          </div>





          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >

            {isOpen
              ? <X size={28} />
              : <Menu size={28} />
            }

          </button>



        </div>




        {isOpen && (

          <div className="lg:hidden pb-4">


            {navItems.map((item)=>(

              <NavLink

                key={item.name}

                to={item.path}

                onClick={() => setIsOpen(false)}

                className="
                block
                py-2
                text-gray-700
                hover:text-blue-600"

              >

                {item.name}

              </NavLink>

            ))}


            <Link to="/investors">Investors</Link>
            <Link

              to="/login"

              onClick={() => setIsOpen(false)}

              className="
              block
              mt-3
              text-gray-700"

            >

              Login

            </Link>




            <Link

              to="/register"

              onClick={() => setIsOpen(false)}

              className="
              block
              mt-2
              text-blue-600"

            >

              Register

            </Link>



          </div>

        )}



      </div>


    </header>

  );

}


export default Navbar;