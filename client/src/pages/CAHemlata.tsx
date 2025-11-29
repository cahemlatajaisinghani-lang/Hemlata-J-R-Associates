import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CAHemlata() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Photo and Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Photo Placeholder */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary/30 mb-4">CHR</div>
                <p className="text-muted-foreground text-sm">Photo Placeholder</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h3 className="font-semibold text-lg">Contact Information</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email Address</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 XXXXX XXXXX</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <p className="text-xs text-muted-foreground">Clients Served</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Detailed Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Header */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight" data-testid="text-name">
                CA Hemlata J Raisinghani
              </h1>
              <p className="text-xl text-primary font-semibold">Founding Partner</p>
              <p className="text-muted-foreground">Chartered Accountant & Professional Services Expert</p>
            </div>

            {/* Professional Summary */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Professional Summary</h2>
              <p className="text-muted-foreground leading-relaxed">
                CA Hemlata J Raisinghani is a visionary professional services leader with over two decades of transformative experience across multiple domains. Starting her career with Big 4 consulting firms, she has progressively advanced to spearhead complex engagements for multinational corporations, large-scale Indian enterprises, and high-growth startups. Her expertise spans financial audit, internal controls, regulatory compliance, and strategic tax optimization across diverse industries including manufacturing, IT, pharmaceuticals, real estate, and e-commerce.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Recognized for her strategic acumen and innovative problem-solving approach, CA Hemlata has successfully guided numerous organizations through regulatory transformations, merger & acquisition due diligence, and digital accounting implementations. Her commitment to continuous learning and industry best practices has established her as a trusted advisor and thought leader in professional services.
              </p>
            </div>

            {/* Qualifications */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Qualifications</h2>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">B.Com - Bachelor of Commerce</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">FCA - Fellow of Institute of Chartered Accountants of India</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-muted-foreground">DISA (ICAI) - Diploma in Information System Audit</span>
                </li>
              </ul>
            </div>

            {/* ICAI Membership */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Professional Credentials</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">ICAI Membership</p>
                  <p className="font-mono font-semibold">XXXXXX</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Member Since</p>
                  <p className="font-semibold">YYYY</p>
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Areas of Expertise</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Audit & Assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Tax Planning & Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">GST Advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Financial Advisory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Internal Controls</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Regulatory Compliance</span>
                </div>
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Diverse Professional Journey</h2>
              <div className="space-y-5">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-primary mb-1">Founding Partner (Current)</h4>
                  <p className="text-sm text-muted-foreground">Established and leading a boutique consulting firm focused on delivering tailored professional services to mid-market and emerging enterprises. Overseeing end-to-end business strategy, client relationship management, and specialized advisory services.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-primary mb-1">Senior Partner / Director (10+ Years)</h4>
                  <p className="text-sm text-muted-foreground">Led multiple service lines managing concurrent engagements for multinational corporations and large Indian conglomerates. Pioneered internal control frameworks, implemented ERP systems, and managed audit teams across geographies.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-primary mb-1">Manager & Senior Consultant (8+ Years)</h4>
                  <p className="text-sm text-muted-foreground">Spearheaded complex audit engagements for Fortune 500 companies. Conducted financial statement audits, compliance reviews, and risk assessments. Established client relationships and managed cross-functional teams.</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-primary mb-1">Audit Associate (Big 4 Firm)</h4>
                  <p className="text-sm text-muted-foreground">Completed foundational training in auditing standards, corporate governance, and international accounting principles. Executed financial audits and compliance procedures across diverse industry sectors.</p>
                </div>
              </div>
            </div>

            {/* Industry Experience */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Industry Experience</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Comprehensive expertise across multiple high-growth sectors:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-medium text-sm">Manufacturing & Industrial</p>
                  <p className="text-xs text-muted-foreground mt-1">Multi-location audits, supply chain compliance</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-medium text-sm">Information Technology</p>
                  <p className="text-xs text-muted-foreground mt-1">Software firms, IT services, startups</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-medium text-sm">Pharmaceuticals & Healthcare</p>
                  <p className="text-xs text-muted-foreground mt-1">Regulatory compliance, SOX audits</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-medium text-sm">Real Estate & Infrastructure</p>
                  <p className="text-xs text-muted-foreground mt-1">Project accounting, land transactions</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-medium text-sm">E-commerce & Retail</p>
                  <p className="text-xs text-muted-foreground mt-1">Fast-growth startups, multi-state operations</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="font-medium text-sm">Financial Services</p>
                  <p className="text-xs text-muted-foreground mt-1">NBFC, investment firms, compliance</p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Key Achievements</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">Managed 50+ concurrent audit and advisory engagements across multiple jurisdictions and industry verticals</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">Successfully guided organizations through complex regulatory transitions including GST implementation, IND AS adoption, and Ind AS 115 compliance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">Executed due diligence for 15+ merger & acquisition transactions, identifying critical financial and operational risks</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">Designed and implemented robust internal control frameworks for Fortune 500 companies, achieving SOX compliance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">Led digital transformation initiatives, implementing cloud-based accounting platforms and ERP systems</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-sm text-muted-foreground">Mentor and leader, trained 100+ professionals in accounting standards, auditing practices, and client engagement</span>
                </li>
              </ul>
            </div>

            {/* Professional Recognition */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-card border">
              <h2 className="text-2xl font-bold">Certifications & Continuous Learning</h2>
              <ul className="space-y-2">
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Fellow of Institute of Chartered Accountants of India (FCA)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Diploma in Information System Audit (DISA)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Advanced training in IND AS and IFRS convergence</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Certified in GST and indirect tax compliance frameworks</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-sm text-muted-foreground">Regular participant in international auditing standards workshops and seminars</span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <Button className="w-full" size="lg" data-testid="button-contact">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
