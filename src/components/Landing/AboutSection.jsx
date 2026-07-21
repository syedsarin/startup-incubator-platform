import "./AboutSection.css";

const aboutCards = [
{
  title: "Who We Are",
  description:
  "• Supporting startups, innovators, and entrepreneurs.\n\n" +
  "• Helping founders build scalable businesses.\n\n" +
  "• Providing mentorship, resources, and guidance.\n\n" +
  "• Connecting startups with investors and opportunities.\n\n" +
  "• Accelerating innovation and startup growth."
},
  {
  title: "Vision",
  description:
    "• Creating a world-class innovation ecosystem for entrepreneurs.\n\n" +
    "• Empowering founders to build impactful and scalable companies.\n\n" +
    "• Providing the right resources, mentorship, and opportunities.\n\n" +
    "• Supporting startups to compete in global markets.\n\n" +
    "• Becoming a trusted platform for innovation and entrepreneurship."
},
  {
    title: "Mission",
   description:
  "• Support innovative startups.\n\n" +
  "• Promote entrepreneurship and founder growth.\n\n" +
  "• Connect founders with mentors and investors.\n\n" +
  "• Foster innovation and technology development.\n\n" +
  "• Build sustainable and scalable businesses."
  },
  {
    title: "Community",
    description:
  "• Connect founders with a strong startup network.\n\n" +
  "• Encourage collaboration, knowledge sharing, and partnerships.\n\n" +
  "• Create opportunities to learn from mentors and industry experts.\n\n" +
  "• Build a supportive ecosystem for startup growth."
  }
];


const AboutSection = () => {

  return (

    <section className="landing-about">

      <div className="about-container">

        <div className="about-cards">


          {
            aboutCards.map((card,index)=>(

              <div 
                className="about-card"
                key={index}
              >

                <h3>
                  {card.title}
                </h3>


                <p>
                  {card.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>

    </section>

  );

};


export default AboutSection;