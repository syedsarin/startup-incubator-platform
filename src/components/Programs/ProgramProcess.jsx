import "./ProgramProcess.css";
import { motion } from "framer-motion";
import { Lightbulb, Search, Users, TrendingUp } from "lucide-react";

function ProgramProcess() {

  const steps = [
    {
      icon: Lightbulb,
      title: "Submit Your Idea",
      description:
        "Share your startup idea and begin your incubation journey."
    },
    {
      icon: Search,
      title: "Evaluation",
      description:
        "Our team reviews your idea and understands your growth potential."
    },
    {
      icon: Users,
      title: "Mentorship",
      description:
        "Get guidance from experienced mentors and industry experts."
    },
    {
      icon: TrendingUp,
      title: "Growth & Funding",
      description:
        "Scale your startup with resources, networks, and funding opportunities."
    }
  ];


  return (
    <section className="process-section">

      <div className="process-container">


        <div className="process-heading">

          <p>
            How It Works
          </p>

          <h2>
            Your Startup Journey
            <span>
              With Us
            </span>
          </h2>

        </div>



        <div className="process-grid">

          {steps.map((step,index)=>{

            const Icon = step.icon;

            return (

              <motion.div

                key={step.title}

                initial={{
                  opacity:0,
                  y:30
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:0.5,
                  delay:index*0.1
                }}

                className="process-card"

              >

                <div className="process-icon">

                  <Icon size={30}/>

                </div>


                <h3>
                  {step.title}
                </h3>


                <p>
                  {step.description}
                </p>


                <span>
                  0{index + 1}
                </span>


              </motion.div>

            );

          })}

        </div>


      </div>

    </section>
  );
}

export default ProgramProcess;