import "./MentorsSection.css";


const mentors = [
  {
    name: "Sarah Johnson",
    role: "Startup Advisor",
    expertise: "Business Strategy"
  },
  {
    name: "Michael Smith",
    role: "Technology Mentor",
    expertise: "Product Development"
  },
  {
    name: "David Wilson",
    role: "Investment Mentor",
    expertise: "Funding & Growth"
  },
  {
    name: "Emma Brown",
    role: "Marketing Expert",
    expertise: "Brand Building"
  }
];


const MentorsSection = () => {

  return (

    <section className="landing-mentors">

      <div className="mentors-container">


        <div className="mentors-header">

          <h2>
            Our Mentors
          </h2>

          <p>
            Learn from experienced professionals and industry leaders.
          </p>

        </div>



        <div className="mentors-cards">


          {
            mentors.map((mentor,index)=>(

              <div
                className="mentor-card"
                key={index}
              >

                <div className="mentor-avatar">
                  {mentor.name.charAt(0)}
                </div>


                <h3>
                  {mentor.name}
                </h3>


                <span>
                  {mentor.role}
                </span>


                <p>
                  {mentor.expertise}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

};


export default MentorsSection;