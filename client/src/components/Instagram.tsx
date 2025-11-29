import { motion } from "framer-motion";
import { Instagram as InstagramIcon, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

interface InstagramPost {
  id: string;
  title: string;
  description: string;
  type: "post" | "reel";
  thumbnail?: string;
  url?: string;
}

const instagramHandle = "hemlatajr";
const instagramUrl = "https://www.instagram.com/hemlatajr/";

export default function Instagram() {
  const { data, isLoading } = useQuery<{ success: boolean; data: InstagramPost[] }>({
    queryKey: ["/api/instagram/posts"],
    retry: false,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes to check for new posts
  });

  const posts = data?.data || [];
  return (
    <section id="instagram" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-muted/30 to-transparent rounded-full blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">
            Follow & Learn
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl font-bold tracking-tight max-w-xl"
              data-testid="text-instagram-title"
            >
              Knowledge Updates on <span className="text-primary">Instagram</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-md">
              Regular tips, updates, and insights on tax, accounting, and business compliance
            </p>
          </div>
        </motion.div>

        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-3 text-muted-foreground">Loading posts...</span>
          </div>
        )}

        {!isLoading && posts.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.url || instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] p-1 hover-elevate transition-all duration-300 cursor-pointer"
              data-testid={`link-instagram-post-${post.id}`}
            >
              <div className="h-full w-full rounded-xl bg-card flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary">
                        {post.type === "reel" ? "Reel" : "Post"}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <InstagramIcon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>

                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>View on Instagram</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        )}

        {!isLoading && posts.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>Instagram posts loading... Please check back soon</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            data-testid="button-instagram-follow"
          >
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="rounded-full">
              <InstagramIcon className="h-5 w-5 mr-2" />
              Follow CA Hemlata on Instagram
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            @{instagramHandle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
