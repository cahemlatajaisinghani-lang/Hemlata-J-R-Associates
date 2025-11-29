import Header from "../Header";

export default function HeaderExample() {
  return (
    <Header
      firmName="Hemlata J R & Associates"
      onNavigate={(section) => console.log(`Navigating to: ${section}`)}
    />
  );
}
