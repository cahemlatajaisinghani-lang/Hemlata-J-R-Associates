import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FileCheck,
  Calculator,
  Receipt,
  Building2,
  TrendingUp,
  FileSpreadsheet,
  Scale,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

interface Service {
  icon: typeof FileCheck;
  title: string;
  description: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: FileCheck,
    title: "Audit & Assurance",
    description: "Comprehensive audit services ensuring compliance and reliability of financial statements",
    items: ["Statutory Audit", "Internal Audit", "Tax Audit", "Bank Audit", "Stock Audit", "Concurrent Audit"],
  },
  {
    icon: Calculator,
    title: "Direct Taxation",
    description: "End-to-end income tax compliance, planning, and representation services",
    items: ["ITR Filing", "Tax Planning", "TDS Compliance", "Assessment Support", "Appeals", "Advance Tax"],
  },
  {
    icon: Receipt,
    title: "GST Services",
    description: "Complete Goods and Services Tax compliance and advisory solutions",
    items: ["GST Registration", "Return Filing", "GST Audit", "Refund Claims", "Advisory", "Assessments"],
  },
  {
    icon: Building2,
    title: "Company Law",
    description: "Corporate compliance, incorporation, and secretarial services",
    items: ["Incorporation", "ROC Filings", "Annual Returns", "LLP Services", "Conversions", "Compliance"],
  },
  {
    icon: TrendingUp,
    title: "Business Advisory",
    description: "Strategic financial guidance for sustainable business growth",
    items: ["Valuations", "Due Diligence", "Project Finance", "Restructuring", "M&A Support", "Planning"],
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting",
    description: "Professional bookkeeping and financial reporting services",
    items: ["Bookkeeping", "MIS Reports", "Financials", "Payroll", "Reconciliation", "Outsourcing"],
  },
  {
    icon: Scale,
    title: "Regulatory",
    description: "Ensuring adherence to statutory and regulatory requirements",
    items: ["FEMA", "RBI Matters", "SEBI", "Labour Laws", "ESI/PF", "Professional Tax"],
  },
  {
    icon: Briefcase,
    title: "Registrations",
    description: "Assistance with various business registrations and licenses",
    items: ["PAN/TAN", "MSME", "IEC", "FSSAI", "DSC", "Trade License"],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-6 mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            What We Offer
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl"
            data-testid="text-services-title"
          >
            Professional Services for Your{" "}
            <span className="text-primary">Financial Needs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive chartered accountancy services tailored to support individuals and businesses
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="h-full p-5 rounded-2xl border bg-card hover-elevate transition-all duration-300 flex flex-col">
                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3
                    className="text-base font-bold mb-2"
                    data-testid={`text-service-title-${index}`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t">
                    {service.items.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                    {service.items.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary font-medium">
                        +{service.items.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
