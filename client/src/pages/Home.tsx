import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SocialLinks from "@/components/SocialLinks";
import GoogleMyBusiness from "@/components/GoogleMyBusiness";
import ImportantWebsites from "@/components/ImportantWebsites";
import Footer from "@/components/Footer";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seoHelpers";

// todo: remove mock functionality - replace with actual firm data
const firmData = {
  name: "Hemlata J R & Associates",
  tagline: "Modern Approach to Professional Excellence",
  description:
    "A contemporary chartered accountancy practice combining technical expertise with technology-enabled solutions. We provide comprehensive financial services with precision, integrity, and a client-first approach.",
  aboutDescription:
    "Founded in 2025, Hemlata J R & Associates represents a new generation of chartered accountancy practice. We blend deep technical expertise with modern technology to deliver efficient, accurate, and client-centric professional services. Our commitment to continuous learning and ethical practice ensures that our clients receive guidance that is both current and compliant.",
  yearEstablished: "2025",
  partners: [
    {
      name: "CA Hemlata Jain",
      designation: "Founding Partner",
      qualifications: "B.Com, FCA, DISA (ICAI)",
      membershipNo: "XXXXXX",
      experience: "Professional practice experience in audit and taxation",
      specializations: ["Audit & Assurance", "Tax Planning", "GST Advisory"],
    },
    {
      name: "CA Rajesh Kumar",
      designation: "Partner",
      qualifications: "B.Com, ACA",
      membershipNo: "XXXXXX",
      experience: "Specialized in corporate advisory and compliance",
      specializations: ["Company Law", "Corporate Advisory", "FEMA"],
    },
  ],
  articles: [
    {
      title: "Key Changes in Income Tax for FY 2024-25",
      excerpt:
        "An overview of important amendments in the Income Tax Act affecting individual taxpayers and businesses.",
      date: "Nov 2024",
      category: "Tax Updates",
    },
    {
      title: "GST Annual Return Filing Guidelines",
      excerpt:
        "Step-by-step guide for filing GSTR-9 and GSTR-9C for the financial year with key compliance points.",
      date: "Oct 2024",
      category: "GST",
    },
    {
      title: "MCA Compliance Calendar for Companies",
      excerpt:
        "Important due dates and filing requirements for companies under the Companies Act, 2013.",
      date: "Sep 2024",
      category: "Corporate",
    },
    {
      title: "TDS Provisions: A Comprehensive Guide",
      excerpt:
        "Understanding TDS rates, applicability, and compliance requirements for various transactions.",
      date: "Aug 2024",
      category: "Tax Updates",
    },
  ],
  contactInfo: {
    address:
      "Sun Westbank, A 537, Ashram Rd, near Sabarmati Riverfront, Vishalpur, Muslim Society, Navrangpura, Ahmedabad, Gujarat 380009",
    phone: "+91 9769006436",
    email: "info@hemlatajr.com",
    officeHours: "Monday - Friday: 10:00 AM - 7:30 PM | Saturday: 10:00 AM - 5:00 PM | Sunday: Closed",
  },
  linkedInUrl: "https://linkedin.com",
};

export default function Home() {
  useEffect(() => {
    // Update page title
    document.title = "Hemlata J R & Associates | Chartered Accountants - Audit, Tax & GST Services";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Hemlata J R & Associates - ICAI Member Chartered Accountants in Bangalore. Expert services in Audit & Assurance, Income Tax, GST, Company Law, and Financial Advisory."
      );
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        firmName={firmData.name}
        onNavigate={(section) => scrollToSection(section)}
      />

      <main className="flex-1">
        <Hero
          firmName={firmData.name}
          tagline={firmData.tagline}
          description={firmData.description}
          onContactClick={() => scrollToSection("gmb")}
          onServicesClick={() => scrollToSection("services")}
        />

        <About
          firmDescription={firmData.aboutDescription}
          partners={firmData.partners}
          yearEstablished={firmData.yearEstablished}
        />

        <Services />

        <SocialLinks />

        <GoogleMyBusiness />

        <ImportantWebsites />
      </main>

      <Footer
        firmName={firmData.name}
        firmDescription="A new-generation chartered accountancy practice delivering professional excellence through modern solutions and ethical practice."
        address={firmData.contactInfo.address}
        phone={firmData.contactInfo.phone}
        email={firmData.contactInfo.email}
        linkedInUrl={firmData.linkedInUrl}
      />
    </div>
  );
}
