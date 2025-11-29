import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users, Briefcase, CheckCircle2 } from "lucide-react";

interface PartnerInfo {
  name: string;
  designation: string;
  qualifications: string;
  membershipNo: string;
  experience: string;
  specializations: string[];
}

interface TeamSection {
  title: string;
  members: PartnerInfo[];
}

interface AboutProps {
  firmDescription: string;
  partners: PartnerInfo[];
  teamSections?: TeamSection[];
  yearEstablished?: string;
}

const values = [
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Committed to the highest standards of professional practice",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Staying current with evolving regulations and best practices",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "Building lasting relationships through trust and reliability",
  },
  {
    icon: Briefcase,
    title: "Ethical Practice",
    description: "Upholding integrity in every professional engagement",
  },
];

export default function About({ firmDescription, partners, teamSections, yearEstablished }: AboutProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-muted/30 to-transparent rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                About Us
              </span>
              <h2
                className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
                data-testid="text-about-title"
              >
                A New Standard in{" "}
                <span className="text-primary">Professional Services</span>
              </h2>
            </div>

            <p
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="text-about-description"
            >
              {firmDescription}
            </p>

            <div className="flex flex-col gap-4 pt-4">
              {["ICAI Registered Practice", "Technology-Enabled Services", "Client-Centric Approach", "Transparent Engagement"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border hover-elevate transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CA Hemlata Professional Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-primary tracking-wide uppercase">
                Founder & Principal
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                CA Hemlata <span className="text-primary">J Raisinghani</span>
              </h2>
              <p className="text-lg text-muted-foreground">Chartered Accountant, B.Com</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Professional Overview */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-card border"
              >
                <h3 className="text-2xl font-bold">Professional Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Her work includes accounting and book keeping, statutory audits, GST/ Income tax filings and assessment support. She has also worked on financial control and reporting processes (including revenue recognition and SAP reconciliations).
                </p>
              </motion.div>

              {/* Professional Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-card border"
              >
                <h3 className="text-2xl font-bold">Professional Journey</h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="text-sm font-semibold text-primary">Hemlata J R & Associates</p>
                    <p className="text-sm text-muted-foreground mt-1">Independent practice — accounting, audit support, taxation compliance and advisory</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="text-sm font-semibold text-primary">EY LLP</p>
                    <p className="text-sm text-muted-foreground mt-1">Indirect Tax (GST) — preparing and reviewing GST returns, drafting replies, assessment and representation support</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="text-sm font-semibold text-primary">UBS Business Solutions (India) Pvt Ltd</p>
                    <p className="text-sm text-muted-foreground mt-1">Revenue recognition, SAP reconciliations, month-end closing</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-3">
                    <p className="text-sm font-semibold text-primary">Kshirsagar Kulkarni & Co.</p>
                    <p className="text-sm text-muted-foreground mt-1">Statutory & tax audits, GST and income-tax compliance, and accounting documentation</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Core Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border"
            >
              <h3 className="text-2xl font-bold mb-6">Core Capabilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-primary">Accounting & Auditing</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Financial statement preparation and review</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Audit workpapers and coordination</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Book-to-tax reconciliations</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Month-end accounting review</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-primary">Direct Tax</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Income-tax computations & returns</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Tax audit reports</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>TDS compliance & reconciliation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>NRI compliance & deferred tax</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="font-semibold text-primary">Indirect Tax (GST)</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>GST return preparation & filing</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Notice replies & appeals</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Refund applications</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Compliance & reconciliation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
