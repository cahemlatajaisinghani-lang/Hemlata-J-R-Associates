import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { SiLinkedin } from "react-icons/si";
import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  firmName: string;
  firmDescription: string;
  address: string;
  phone: string;
  email: string;
  linkedInUrl?: string;
}

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#gmb" },
];

const serviceLinks = [
  "Audit & Assurance",
  "Tax Services",
  "GST Compliance",
  "Company Law",
  "Business Advisory",
];

export default function Footer({
  firmName,
  firmDescription,
  address,
  phone,
  email,
  linkedInUrl,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <footer ref={ref} className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div style={{ y: bgY }} className="py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">H</span>
                </div>
                <span className="text-lg font-semibold" data-testid="text-footer-firm-name">
                  {firmName}
                </span>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                {firmDescription}
              </p>
              {linkedInUrl && (
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors w-fit"
                  data-testid="link-footer-linkedin"
                >
                  <SiLinkedin className="h-5 w-5" />
                  <span>Follow on LinkedIn</span>
                </a>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection("#services")}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-background/70">
                <li className="leading-relaxed">{address}</li>
                <li>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="hover:text-background transition-colors"
                    data-testid="link-footer-phone"
                  >
                    {phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-background transition-colors"
                    data-testid="link-footer-email"
                  >
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <Separator className="bg-background/10" />

        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-background/50">
              <span>&copy; {currentYear} {firmName}</span>
              <span className="hidden sm:inline">|</span>
              <span>ICAI Member Firm</span>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://www.icai.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-background transition-colors"
                data-testid="link-footer-icai"
              >
                ICAI Official Website
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-background/40 text-center leading-relaxed max-w-4xl mx-auto">
            This website is designed in compliance with the guidelines issued by The Institute of Chartered Accountants of India (ICAI). 
            The information provided is for general informational purposes only and does not constitute solicitation or advertisement.
          </p>
        </div>
      </div>
    </footer>
  );
}
