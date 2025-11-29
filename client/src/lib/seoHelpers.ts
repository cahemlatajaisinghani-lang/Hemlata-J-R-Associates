export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://hemlatajr.com",
    name: "Hemlata J R & Associates",
    description: "Chartered Accountancy firm providing Audit & Assurance, Tax Compliance, GST Services, and Financial Advisory",
    url: "https://hemlatajr.com",
    telephone: "+91-80-1234-5678",
    email: "info@hemlatajr.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, Professional Plaza, MG Road",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    priceRange: "$",
    image: {
      "@type": "ImageObject",
      url: "https://hemlatajr.com/logo.png",
      width: 1200,
      height: 630,
    },
    founder: {
      "@type": "Person",
      name: "CA Hemlata J Raisinghani",
      qualifications: "B.Com, FCA, DISA (ICAI)",
    },
    sameAs: [
      "https://www.instagram.com/hemlatajr/",
      "https://www.linkedin.com/in/ca-hemlata-jaisinghani-b1b554245/",
    ],
    memberOf: {
      "@type": "Organization",
      name: "Institute of Chartered Accountants of India",
      url: "https://www.icai.org/",
    },
    knowsAbout: [
      "Audit & Assurance",
      "Income Tax Compliance",
      "GST Services",
      "Company Law",
      "Financial Advisory",
      "Tax Planning",
    ],
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hemlata J R & Associates",
    image: "https://hemlatajr.com/logo.png",
    description: "Professional Chartered Accountancy Firm in Bangalore",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, Professional Plaza, MG Road",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560001",
      addressCountry: "IN",
    },
    telephone: "+91-80-1234-5678",
    email: "info@hemlatajr.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0402,
      longitude: 77.6021,
    },
    url: "https://hemlatajr.com",
    sameAs: [
      "https://www.instagram.com/hemlatajr/",
      "https://www.linkedin.com/in/ca-hemlata-jaisinghani-b1b554245/",
    ],
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url?: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
};
