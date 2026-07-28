import "./MentorCards.css";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingUp,
  DollarSign,
  Code,
  Globe,
} from "lucide-react";


function MentorCards({ limit }) {


  const mentors = [

    {
      name:"Rahul Sharma",
      role:"Startup Founder",
      icon:Briefcase,
      experience:"12+ Years Experience",
      description:
      "Built and scaled multiple startups while helping founders create successful businesses."
    },


    {
      name:"Priya Mehta",
      role:"Angel Investor",
      icon:DollarSign,
      experience:"50+ Startup Investments",
      description:
      "Helps startups with fundraising, investor preparation and business strategy."
    },


    {
      name:"Amit Verma",
      role:"Technology Expert",
      icon:Code,
      experience:"Software Architect",
      description:
      "Guides startups with product development, cloud solutions and scalable technology."
    },


    {
      name:"Neha Kapoor",
      role:"Growth Strategist",
      icon:TrendingUp,
      experience:"Growth & Marketing",
      description:
      "Supports startups with branding, marketing and customer acquisition."
    },


    {
      name:"Vikram Singh",
      role:"Business Consultant",
      icon:Globe,
      experience:"Global Business Advisor",
      description:
      "Helps startups with operations, partnerships and expansion strategies."
    },


    {
      name:"Anjali Rao",
      role:"Leadership Coach",
      icon:Briefcase,
      experience:"Leadership Development",
      description:
      "Mentors founders in leadership, communication and team building."
    }

  ];



  const displayMentors = limit
  ? mentors.slice(0,limit)
  : mentors;



return (

<section className="mentor-section">


<div className="mentor-cards-container">


<div className="mentor-grid">


{
displayMentors.map((mentor,index)=>{


const Icon = mentor.icon;


return(

<motion.div

key={mentor.name}

className="mentor-card"


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

>


<div className="mentor-avatar">

{mentor.name.charAt(0)}

</div>



<h3>
{mentor.name}
</h3>


<h4>
{mentor.role}
</h4>



<div className="mentor-experience">

<Icon size={18}/>

<span>
{mentor.experience}
</span>

</div>



<p>
{mentor.description}
</p>



</motion.div>


)


})
}


</div>


</div>


</section>

);


}


export default MentorCards;