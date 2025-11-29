import About from "../About";

// todo: remove mock functionality
const mockPartners = [
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
];

export default function AboutExample() {
  return (
    <About
      firmDescription="Founded in 2025, Hemlata J R & Associates represents a new generation of chartered accountancy practice. We blend deep technical expertise with modern technology to deliver efficient, accurate, and client-centric professional services."
      partners={mockPartners}
      yearEstablished="2025"
    />
  );
}
