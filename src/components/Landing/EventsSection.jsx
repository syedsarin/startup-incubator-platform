import "./EventsSection.css";
import "../../styles/SectionCards.css";

const events = [
  {
    title: "Startup Networking Meet",
    date: "15 August 2026",
    description:
      "Connect with founders, investors and startup enthusiasts."
  },
  {
    title: "Founder Workshop",
    date: "22 August 2026",
    description:
      "Learn startup strategy from experienced entrepreneurs."
  },
  {
    title: "Investor Meetup",
    date: "05 September 2026",
    description:
      "Meet investors and explore funding opportunities."
  },
  {
    title: "Innovation Summit",
    date: "20 September 2026",
    description:
      "A platform to showcase innovative startup ideas."
  }
];


const EventsSection = () => {

  return (

    <section className="landing-events">

      <div className="events-container">


        <div className="events-header">

          <h2>
            Upcoming Events
          </h2>

          <p>
            Join startup events, workshops and networking sessions.
          </p>

        </div>



        <div className="events-cards">


          {
            events.map((event,index)=>(

              <div
                className="event-card"
                key={index}
              >

                <span className="event-date">
                  {event.date}
                </span>


                <h3>
                  {event.title}
                </h3>


                <p>
                  {event.description}
                </p>


                <button>
                  View Details
                </button>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

};


export default EventsSection;
