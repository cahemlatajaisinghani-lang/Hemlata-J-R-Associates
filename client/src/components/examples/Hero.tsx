import Hero from "../Hero";

export default function HeroExample() {
  return (
    <Hero
      firmName="Hemlata J R"
      tagline="Modern Approach to Professional Excellence"
      description="A contemporary chartered accountancy practice combining technical expertise with technology-enabled solutions. We provide comprehensive financial services with precision, integrity, and a client-first approach."
      onContactClick={() => console.log("Contact clicked")}
      onServicesClick={() => console.log("Services clicked")}
    />
  );
}
