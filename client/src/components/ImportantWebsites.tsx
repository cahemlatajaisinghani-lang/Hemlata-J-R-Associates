import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, FileText, DollarSign, Building2, Users, TrendingUp, ShoppingCart, Briefcase, Leaf, BookOpen, Zap, PiggyBank } from "lucide-react";

const websites = [
  {
    id: "icai",
    name: "ICAI",
    title: "Institute of Chartered Accountants of India",
    url: "https://www.icai.org/",
    icon: Building2,
    category: "Regulatory",
  },
  {
    id: "gst",
    name: "GST Portal",
    title: "Goods and Services Tax",
    url: "https://www.gst.gov.in/",
    icon: DollarSign,
    category: "Tax",
  },
  {
    id: "incometax",
    name: "Income Tax",
    title: "Income Tax Department",
    url: "https://www.incometax.gov.in/",
    icon: FileText,
    category: "Tax",
  },
  {
    id: "mca",
    name: "MCA",
    title: "Ministry of Corporate Affairs",
    url: "https://www.mca.gov.in/",
    icon: Building2,
    category: "Corporate",
  },
  {
    id: "roc",
    name: "ROC",
    title: "Registrar of Companies",
    url: "https://www.mca.gov.in/",
    icon: Briefcase,
    category: "Corporate",
  },
  {
    id: "rbi",
    name: "RBI",
    title: "Reserve Bank of India",
    url: "https://www.rbi.org.in/",
    icon: Zap,
    category: "Finance",
  },
  {
    id: "sebi",
    name: "SEBI",
    title: "Securities and Exchange Board of India",
    url: "https://www.sebi.gov.in/",
    icon: TrendingUp,
    category: "Finance",
  },
  {
    id: "cbic",
    name: "CBIC",
    title: "Central Board of Indirect Taxes & Customs",
    url: "https://www.cbic.gov.in/",
    icon: ShoppingCart,
    category: "Tax",
  },
  {
    id: "dgft",
    name: "DGFT",
    title: "Directorate General of Foreign Trade",
    url: "https://dgft.gov.in/",
    icon: TrendingUp,
    category: "Trade",
  },
  {
    id: "fssai",
    name: "FSSAI",
    title: "Food Safety and Standards Authority",
    url: "https://www.fssai.gov.in/",
    icon: Leaf,
    category: "Compliance",
  },
  {
    id: "ministry",
    name: "Ministry of Finance",
    title: "Government Budget & Policies",
    url: "https://www.indiabudget.gov.in/",
    icon: BookOpen,
    category: "Policy",
  },
  {
    id: "startup-india",
    name: "Startup India",
    title: "Startup Portal",
    url: "https://www.startupindia.gov.in/",
    icon: Briefcase,
    category: "Startup",
  },
  {
    id: "niti-aayog",
    name: "NITI Aayog",
    title: "National Institution for Transforming India",
    url: "https://www.niti.gov.in/",
    icon: Users,
    category: "Policy",
  },
  {
    id: "udyam",
    name: "Udyam",
    title: "MSME Registration",
    url: "https://udyamregistration.gov.in/",
    icon: TrendingUp,
    category: "MSME",
  },
  {
    id: "epfo",
    name: "EPFO",
    title: "Employees' Provident Fund",
    url: "https://www.epfindia.gov.in/",
    icon: PiggyBank,
    category: "Compliance",
  },
];

export default function ImportantWebsites() {
  return (
    <section id="websites" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-muted/20 to-transparent">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 mb-16 text-center"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Resources
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            data-testid="text-websites-title"
          >
            Important Regulatory <span className="text-primary">Portals & Links</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to government and regulatory websites for compliance and filing
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {websites.map((website, index) => {
            const Icon = website.icon;
            return (
              <motion.a
                key={website.id}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 5) * 0.05 }}
                className="group relative overflow-hidden rounded-lg bg-card border border-border p-4 hover-elevate transition-all duration-300"
                data-testid={`link-website-${website.id}`}
                title={website.title}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{website.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {website.title}
                    </p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
