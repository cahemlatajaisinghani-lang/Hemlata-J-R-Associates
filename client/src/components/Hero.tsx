import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

interface HeroProps {
  firmName: string;
  tagline: string;
  description: string;
  onContactClick?: () => void;
  onServicesClick?: () => void;
}

const stats = [
  { icon: Shield, value: "ICAI", label: "Member Firm" },
  { icon: Award, value: "2025", label: "Established" },
  { icon: Users, value: "FRN", label: "XXXXXX" },
];

export default function Hero({
  firmName,
  tagline,
  description,
  onContactClick,
  onServicesClick,
}: HeroProps) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-muted/30" />
      <motion.div style={{ y: y1 }} className="absolute top-20 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-muted/20 to-transparent rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              <Shield className="h-4 w-4" />
              Chartered Accountants
            </div>

            <div className="flex flex-col gap-6">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                data-testid="text-hero-title"
              >
                <span className="block">{firmName.split(" & ")[0]}</span>
                <span className="block text-primary">& Associates</span>
              </h1>

              <p
                className="text-xl sm:text-2xl text-muted-foreground font-light leading-relaxed max-w-lg"
                data-testid="text-hero-tagline"
              >
                {tagline}
              </p>
            </div>

            <p
              className="text-base text-muted-foreground leading-relaxed max-w-lg"
              data-testid="text-hero-description"
            >
              {description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="rounded-full px-8 gap-2 group"
                onClick={onContactClick}
                data-testid="button-hero-contact"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                onClick={onServicesClick}
                data-testid="button-hero-services"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl" />
              <div className="absolute inset-4 bg-card border rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-24 w-24 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <span className="text-primary-foreground font-bold text-4xl">CA</span>
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">ICAI Member Firm</p>
                  <p className="text-sm text-muted-foreground">Established 2025</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-8 left-0 right-0 mx-4"
            >
              <div className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-2">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-lg font-bold">{stat.value}</span>
                        <span className="text-xs text-muted-foreground">{stat.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
