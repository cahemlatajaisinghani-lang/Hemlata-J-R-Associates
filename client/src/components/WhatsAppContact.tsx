import { motion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";

export default function WhatsAppContact() {
  return (
    <section id="whatsapp" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-r from-[#25D366]/5 to-[#128C7E]/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mb-12 text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-[#25D366] tracking-wide uppercase">
            Get In Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            data-testid="text-whatsapp-title"
          >
            Quick Inquiries and Direct Communication
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out via WhatsApp for immediate assistance with your accounting and taxation queries
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.a
            href="https://wa.me/919769006436"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-1 hover-elevate transition-all duration-300"
            data-testid="link-whatsapp-contact"
          >
            <div className="relative h-full w-full rounded-3xl bg-card flex flex-col items-center justify-center p-12 gap-6 max-w-md">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2">WhatsApp</h3>
                <p className="text-2xl font-semibold text-[#25D366] mb-1">+91 9769006436</p>
                <p className="text-muted-foreground mb-6">
                  Available for consultations and quick inquiries
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#25D366] font-semibold text-base group-hover:gap-3 transition-all">
                <span>Chat on WhatsApp</span>
                <ExternalLink className="h-5 w-5" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
