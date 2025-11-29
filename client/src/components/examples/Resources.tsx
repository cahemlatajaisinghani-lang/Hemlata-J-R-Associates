import Resources from "../Resources";

// todo: remove mock functionality
const mockArticles = [
  {
    title: "Key Changes in Income Tax for FY 2024-25",
    excerpt: "An overview of important amendments in the Income Tax Act affecting individual taxpayers and businesses.",
    date: "Nov 2024",
    category: "Tax Updates",
  },
  {
    title: "GST Annual Return Filing Guidelines",
    excerpt: "Step-by-step guide for filing GSTR-9 and GSTR-9C for the financial year with key compliance points.",
    date: "Oct 2024",
    category: "GST",
  },
  {
    title: "MCA Compliance Calendar for Companies",
    excerpt: "Important due dates and filing requirements for companies under the Companies Act, 2013.",
    date: "Sep 2024",
    category: "Corporate",
  },
  {
    title: "TDS Provisions: A Comprehensive Guide",
    excerpt: "Understanding TDS rates, applicability, and compliance requirements for various transactions.",
    date: "Aug 2024",
    category: "Tax Updates",
  },
];

export default function ResourcesExample() {
  return <Resources articles={mockArticles} />;
}
