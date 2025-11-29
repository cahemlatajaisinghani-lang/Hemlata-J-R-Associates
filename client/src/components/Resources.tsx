import { motion } from "framer-motion";
import { FileText, Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

interface ResourcesProps {
  articles: Article[];
}

const importantLinks = [
  { title: "Income Tax Portal", url: "https://www.incometax.gov.in" },
  { title: "GST Portal", url: "https://www.gst.gov.in" },
  { title: "MCA Portal", url: "https://www.mca.gov.in" },
  { title: "ICAI", url: "https://www.icai.org" },
  { title: "RBI", url: "https://www.rbi.org.in" },
  { title: "SEBI", url: "https://www.sebi.gov.in" },
];

export default function Resources({ articles }: ResourcesProps) {
  return (
    <section id="resources" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-muted/30 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Knowledge Center
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight max-w-xl"
              data-testid="text-resources-title"
            >
              Insights & <span className="text-primary">Resources</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Stay informed with professional articles and quick access to regulatory portals
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-5">
              {articles.map((article, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border hover-elevate transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </div>
                    </div>

                    <h3
                      className="font-bold text-lg leading-snug group-hover:text-primary transition-colors"
                      data-testid={`text-article-title-${index}`}
                    >
                      {article.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-fit -ml-2 gap-2 group/btn"
                      data-testid={`link-article-${index}`}
                    >
                      <FileText className="h-4 w-4" />
                      Read Article
                      <ArrowRight className="h-3 w-3 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold">Quick Links</h3>

            <div className="flex flex-col gap-3">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-card border hover-elevate transition-all duration-300"
                  data-testid={`link-external-${index}`}
                >
                  <span className="font-medium text-sm">{link.title}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
