import { motion } from "framer-motion";
import { Phone, Clock, ExternalLink, Star, MessageCircle } from "lucide-react";
import { useReviews } from "./ReviewManager";

export default function GoogleMyBusiness() {
  const { reviews } = useReviews();
  return (
    <section id="gmb" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-muted/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-muted/30 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Get In Touch WhatsApp Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-[#25D366] tracking-wide uppercase">
            Get In Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            data-testid="text-whatsapp-title"
          >
            Quick Inquiries and <span className="text-[#25D366]">Direct Communication</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reach out via WhatsApp for immediate assistance with your accounting and taxation queries
          </p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <motion.a
            href="https://wa.me/919769006436"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-1 hover-elevate transition-all duration-300"
            data-testid="link-whatsapp-contact"
          >
            <div className="relative h-full w-full rounded-3xl bg-card flex flex-col items-center justify-center p-10 gap-5 max-w-md">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-1">WhatsApp</h3>
                <p className="text-xl font-semibold text-[#25D366] mb-1">+91 9769006436</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Available for consultations and quick inquiries
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#25D366] font-semibold text-sm group-hover:gap-3 transition-all">
                <span>Chat on WhatsApp</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </motion.a>
        </div>

        {/* Client Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses we've partnered with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
              className="bg-card rounded-2xl p-6 border border-border hover-elevate transition-all duration-300"
              data-testid={`card-review-${review.id}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg" data-testid={`text-reviewer-${review.id}`}>
                  {review.name}
                </h3>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {review.text}
              </p>

              <p className="text-xs text-muted-foreground" data-testid={`text-date-${review.id}`}>
                {review.date}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm">
            Join hundreds of satisfied clients who trust us with their financial and tax matters
          </p>
        </motion.div>

        {/* Google My Business Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-20 mb-0 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-950/30 dark:to-blue-900/30 rounded-2xl border border-blue-200 dark:border-blue-800 p-12 text-center">
            <h3 className="text-2xl font-bold mb-3">See Google My Business</h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">Want to Review Our Services?</p>
            <p className="text-muted-foreground mb-8">
              Your feedback is valuable to us. Share your experience on our Google My Business profile and help other businesses discover our quality services.
            </p>
            <a
              href="https://share.google/HvzTiUOSP2BsHk3V9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover-elevate transition-all"
              data-testid="button-gmb-review"
            >
              <span>Visit Our Google My Business</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
