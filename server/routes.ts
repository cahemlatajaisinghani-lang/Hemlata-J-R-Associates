import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Instagram posts endpoint
  app.get("/api/instagram/posts", async (req, res) => {
    try {
      const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      
      if (!instagramAccessToken) {
        // Return empty array when token not configured
        // Frontend will still show the section with follow button
        return res.status(200).json({
          success: true,
          data: [],
          message: "Instagram integration pending setup",
        });
      }

      const instagramBusinessAccountId = "17841452627073869"; // hemlatajr account ID
      
      const response = await fetch(
        `https://graph.instagram.com/${instagramBusinessAccountId}/media?fields=id,caption,media_type,media_url,timestamp,permalink&access_token=${instagramAccessToken}`
      );

      if (!response.ok) {
        console.error("Instagram API error:", await response.text());
        // Return empty array on API error
        return res.status(200).json({
          success: true,
          data: [],
          message: "Unable to fetch posts",
        });
      }

      const data = await response.json();
      
      if (!data.data || data.data.length === 0) {
        return res.status(200).json({
          success: true,
          data: [],
        });
      }

      // Transform Instagram data to our format
      const posts = data.data.slice(0, 6).map((post: any) => ({
        id: post.id,
        title: post.caption?.split('\n')[0] || "Knowledge Update",
        description: post.caption?.substring(0, 100) || "Check out this update",
        type: post.media_type === "VIDEO" ? "reel" : "post",
        url: post.permalink,
        thumbnail: post.media_url,
        timestamp: post.timestamp,
      }));

      res.status(200).json({
        success: true,
        data: posts,
      });
    } catch (error) {
      console.error("Instagram fetch error:", error);
      res.status(200).json({
        success: true,
        data: [],
        message: "Unable to fetch Instagram posts",
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactInquirySchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        });
      }

      const inquiry = await storage.createContactInquiry(parsed.data);
      res.json({
        success: true,
        data: inquiry,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to submit inquiry",
      });
    }
  });

  app.get("/api/contact/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({
        success: true,
        data: inquiries,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch inquiries",
      });
    }
  });

  return httpServer;
}
