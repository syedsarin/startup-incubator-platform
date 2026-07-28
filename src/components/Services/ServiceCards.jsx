import "./ServiceCards.css";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Wallet,
  Code,
  Megaphone,
  Scale,
  BarChart3,
  BookOpen,
  GraduationCap,
} from "lucide-react";


function ServiceCards({ limit }) {


  const services = [

    {
      icon: Users,
      title: "Startup Mentorship",
      description:
        "One-on-one guidance from experienced mentors, startup strategy support, founder coaching, and industry networking opportunities."
    },


    {
      icon: Wallet,
      title: "Business Development",
      description:
        "Build sustainable business models, improve operations, validate ideas, and create effective growth strategies."
    },


    {
      icon: Lightbulb,
      title: "Product Development",
      description:
        "Web and mobile application development, MVP creation, SaaS solutions, and complete technical support."
    },


    {
      icon: Code,
      title: "Technology Consulting",
      description:
        "AI solutions, cloud architecture, cybersecurity guidance, DevOps support, and custom software development."
    },


    {
      icon: Scale,
      title: "Legal Support",
      description:
        "Company registration, intellectual property guidance, trademark support, compliance assistance, and legal advisory."
    },


    {
      icon: BarChart3,
      title: "Marketing Support",
      description:
        "Brand building, digital marketing strategies, SEO optimization, customer acquisition, and growth marketing."
    },


    {
      icon: BookOpen,
      title: "Startup Resources",
      description:
        "Business templates, pitch decks, financial models, founder guides, and startup learning resources."
    },


    {
      icon: GraduationCap,
      title: "Knowledge Center",
      description:
        "Expert articles, webinars, workshops, podcasts, and educational resources for entrepreneurs."
    }

  ];



  const displayServices = limit
    ? services.slice(0, limit)
    : services;



return (

<section className="services-section">


<div className="services-container">



<div className="services-heading">

<p>
OUR SERVICES
</p>


<h2>

Everything Your Startup Needs

<span>
To Grow
</span>

</h2>

</div>




<div className="service-grid">


{
displayServices.map((service,index)=>{


const Icon = service.icon;


return(

<motion.div

key={service.title}

className="service-card"


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


<div className="service-icon">

<Icon size={32}/>

</div>



<h3>
{service.title}
</h3>



<p>
{service.description}
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


export default ServiceCards;