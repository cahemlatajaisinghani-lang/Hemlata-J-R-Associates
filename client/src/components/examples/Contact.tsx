import Contact from "../Contact";
import { Toaster } from "@/components/ui/toaster";

// todo: remove mock functionality
const mockContactInfo = {
  address: "123, Professional Plaza, MG Road, Bangalore - 560001, Karnataka",
  phone: "+91 80 1234 5678",
  email: "info@hemlatajr.com",
  officeHours: "Monday - Saturday: 10:00 AM - 6:00 PM",
};

export default function ContactExample() {
  return (
    <>
      <Contact contactInfo={mockContactInfo} />
      <Toaster />
    </>
  );
}
