import "./EventsSection.css";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import eventsImage from "../../assets/images/events/events-startup.png";


function EventsSection() {


  const eventPoints = [
    "Startup Networking Meetups",
    "Founder Workshops",
    "Investor Connect Events"
  ];


  return (

    <section className="landing-events">


      <div className="landing-events-container">



        {/* Left Content */}

        <div className="landing-events-content">


          <p className="events-tag">
            Events
          </p>



          <h2>
            Connect, Learn & Grow Through Startup Events
          </h2>



          <p className="events-description">

            Join founder meetups, workshops, networking sessions,
            and startup events designed to connect entrepreneurs,
            mentors, and investors.

          </p>




          <ul>

            {eventPoints.map((item,index)=>(

              <li key={index}>

                <CheckCircle size={20}/>

                {item}

              </li>

            ))}

          </ul>





          <Link

            to="/events"

            className="events-btn"

          >

            View All Events

          </Link>



        </div>





        {/* Right Image */}

        <div className="landing-events-image">


          <img

            src={eventsImage}

            alt="Startup founders attending business events"

          />


        </div>



      </div>


    </section>

  );

}


export default EventsSection;