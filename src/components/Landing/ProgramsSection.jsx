import "./ProgramsSection.css";


const programs = [
  {
    title: "Idea Validation Program",
   description:
  "• Validate business ideas through market research.\n\n" +
  "• Understand customer needs and problems.\n\n" +
  "• Build a strong business model.\n\n" +
  "• Develop product and market strategies.\n\n" +
  "• Prepare ideas for startup launch."
  },
  {
    title: "Pre Incubation Program",
    description:
  "• Learn startup fundamentals.\n\n" +
  "• Plan products and prototypes.\n\n" +
  "• Get business registration guidance.\n\n" +
  "• Prepare investor-ready pitches.\n\n" +
  "• Turn ideas into MVP-ready startups."
  },
  {
    title: "Incubation Program",
    description:
  "• Receive dedicated mentorship.\n\n" +
  "• Access technical and business support.\n\n" +
  "• Develop products and marketing strategies.\n\n" +
  "• Get legal and financial guidance.\n\n" +
  "• Build and grow your startup."
  },
  {
    title: "Accelaration Program",
    description:
  "• Prepare for fundraising and investment.\n\n" +
  "• Scale products and business operations.\n\n" +
  "• Expand into global markets.\n\n" +
  "• Grow customers and revenue.\n\n" +
  "• Build high-performing startup teams."
  }
];


const ProgramsSection = () => {

  return (

    <section className="landing-programs">

      <div className="programs-container">


        <div className="programs-header">

          <h2>
            Our Programs
          </h2>

          <p>
            Structured programs designed to help startups grow at every stage.
          </p>

        </div>



        <div className="programs-cards">


          {
            programs.map((program,index)=>(

              <div
                className="program-card"
                key={index}
              >

                <h3>
                  {program.title}
                </h3>


                <p>
                  {program.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

};


export default ProgramsSection;