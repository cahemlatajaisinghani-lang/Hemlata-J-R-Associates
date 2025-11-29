import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  officeHours: string;
}

interface ContactProps {
  contactInfo: ContactInfo;
}

const serviceOptions = [
  { value: "audit", label: "Audit & Assurance" },
  { value: "tax", label: "Direct Taxation" },
  { value: "gst", label: "GST Services" },
  { value: "company", label: "Company Law" },
  { value: "advisory", label: "Business Advisory" },
  { value: "accounting", label: "Accounting Services" },
  { value: "other", label: "Other Inquiry" },
];

const contactDetails = [
  { icon: MapPin, label: "Office", key: "address" },
  { icon: Phone, label: "Phone", key: "phone" },
  { icon: Mail, label: "Email", key: "email" },
  { icon: Clock, label: "Hours", key: "officeHours" },
];

export default function Contact({ contactInfo }: ContactProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Inquiry Received",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Please check your details and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-muted/20 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-6 mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Get in Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight max-w-2xl"
            data-testid="text-contact-title"
          >
            Let's Discuss Your{" "}
            <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Reach out to schedule a consultation or learn more about our professional services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-card border">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-xl h-12"
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="rounded-xl h-12"
                      data-testid="input-contact-email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="rounded-xl h-12"
                      data-testid="input-contact-phone"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="service" className="text-sm font-medium">
                      Service Interest
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, service: value }))
                      }
                    >
                      <SelectTrigger className="rounded-xl h-12" data-testid="select-contact-service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="rounded-xl resize-none"
                    data-testid="input-contact-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full gap-2 group"
                  disabled={isSubmitting}
                  data-testid="button-contact-submit"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Inquiry
                      <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <div className="flex flex-col gap-6">
                <h3 className="text-xl font-bold">Contact Information</h3>

                <div className="flex flex-col gap-5">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm opacity-80">{item.label}</span>
                        {item.key === "phone" ? (
                          <a
                            href={`tel:${contactInfo[item.key].replace(/\s/g, "")}`}
                            className="font-medium hover:underline"
                            data-testid="link-contact-phone"
                          >
                            {contactInfo[item.key as keyof ContactInfo]}
                          </a>
                        ) : item.key === "email" ? (
                          <a
                            href={`mailto:${contactInfo[item.key]}`}
                            className="font-medium hover:underline"
                            data-testid="link-contact-email"
                          >
                            {contactInfo[item.key as keyof ContactInfo]}
                          </a>
                        ) : (
                          <span className="font-medium" data-testid={`text-contact-${item.key}`}>
                            {contactInfo[item.key as keyof ContactInfo]}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">ICAI Member Firm</span>
                  <span className="text-sm text-muted-foreground">
                    Professional practice under ICAI guidelines
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
