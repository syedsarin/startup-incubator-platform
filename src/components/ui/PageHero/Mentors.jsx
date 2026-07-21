import { Users } from "lucide-react";
import PageHero from "../PageHero";
import CTASection from "./CTASection";
import MentorCards from "../../Mentors/MentorCards";
import MentorExpertise from "../Mentors/MentorExpertise";

function Mentors() {
  return (
    <>
      <PageHero
        icon={<Users size={18} />}
        badge="Learn From The Best"
        title="Meet Our"
        highlight="Mentors"
        subtitle="Learn from experienced entrepreneurs, investors, and industry experts who help startups grow faster and avoid costly mistakes."
      />

      <MentorCards />

      <MentorExpertise />

      <CTASection
        badge="Become a Founder"
        title="Ready To Learn From"
        highlight="Industry Experts?"
        subtitle="Connect with experienced mentors and accelerate your startup journey."
        buttonText="Apply Now"
        secondaryButtonText="Contact Us"
      />
    </>
  );
}

export default Mentors;