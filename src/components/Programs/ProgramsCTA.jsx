import "./ProgramsCTA.css";
import { ArrowRight, Rocket } from "lucide-react";

function ProgramsCTA() {
  return (
    <section className="program-cta-section">

      <div className="program-cta-container">

        <div className="program-cta-box">


          <div className="program-cta-icon">

            <Rocket size={32}/>

          </div>


          <h2>
            Ready To Start Your
            <span>
              Startup Journey?
            </span>
          </h2>


          <p>
            Join our startup programs and get the mentorship,
            resources, and support needed to turn your idea
            into a successful business.
          </p>



          <button>

            Apply Now

            <ArrowRight size={18}/>

          </button>


        </div>


      </div>


    </section>
  );
}

export default ProgramsCTA;