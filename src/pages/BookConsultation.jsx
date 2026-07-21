import { CalendarCheck } from "lucide-react";
import { PageHero } from "../components/ui";

function BookConsultation() {
  return (
    <PageHero
      icon={<CalendarCheck size={18} />}
      badge="One-on-One"
      title="Book a"
      highlight="Consultation"
      subtitle="Schedule a free session with our team to discuss your startup idea, challenges, and next steps. We'll be in touch shortly to confirm a time."
    />
  );
}

export default BookConsultation;
