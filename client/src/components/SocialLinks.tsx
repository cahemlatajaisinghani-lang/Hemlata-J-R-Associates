import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@hemlatajr",
    description: "Knowledge updates, insights, and tips on tax, accounting, and business",
    url: "https://www.instagram.com/hemlatajr/",
    icon: Instagram,
    color: "from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "CA Hemlata Jaisinghani",
    description: "Professional expertise, case studies, and industry insights",
    url: "https://www.linkedin.com/in/ca-hemlata-jaisinghani-b1b554245/",
    icon: Linkedin,
    color: "from-[#0A66C2] to-[#0A66C2]",
  },
];

export default function SocialLinks() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} id="social" className="py-16 lg:py-24 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-muted/30 to-transparent rounded-full blur-3xl" />
      <motion.div style={{ y: bgY }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-muted/30 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 mb-16 text-center"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Stay Connected
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            data-testid="text-social-title"
          >
            Connect with CA Hemlata on <span className="text-primary">Social Media</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow for regular updates on taxation, accounting practices, and business insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${social.color} p-1 hover-elevate transition-all duration-300`}
                data-testid={`link-social-${social.id}`}
              >
                <div className="relative h-full w-full rounded-3xl bg-card flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{social.name}</h3>
                      <p className="text-xs text-primary font-medium">{social.handle}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {social.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-semibold text-xs group-hover:gap-3 transition-all">
                    <span>Visit Profile</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Follow for daily tips, case studies, and expert advice on accounting and taxation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
