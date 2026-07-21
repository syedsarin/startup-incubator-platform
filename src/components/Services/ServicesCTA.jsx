import "./ServicesCTA.css";
import { ArrowRight, Rocket } from "lucide-react";

function ServicesCTA() {

  return (

    <section className="services-cta-section">


      <div className="services-cta-container">


        <div className="services-cta-box">


          <div className="services-cta-icon">

            <Rocket size={32}/>

          </div>



          <h2>

            Need Support For Your

            <span>
              Startup Growth?
            </span>

          </h2>



          <p>

            Get access to expert guidance, technology support,
            mentorship, and resources to take your startup
            to the next level.

          </p>



          <button>

            Get Started

            <ArrowRight size={18}/>

          </button>



        </div>


      </div>


    </section>

  );

}


export default ServicesCTA;