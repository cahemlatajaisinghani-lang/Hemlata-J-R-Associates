import { useState, useEffect } from "react";

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Rajesh Patel",
    rating: 5,
    text: "Excellent service! CA Hemlata provided outstanding guidance on our GST compliance. Highly recommended for any business needing professional tax advice.",
    date: "2 months ago",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    text: "Very professional and knowledgeable. They made our audit process smooth and hassle-free. Great support throughout the financial year.",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amit Kumar",
    rating: 5,
    text: "Trustworthy and reliable. They have been managing our accounts for the past 2 years with excellent results. Highly recommended!",
    date: "3 weeks ago",
  },
];

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);

  useEffect(() => {
    // Load reviews from localStorage on mount
    const stored = localStorage.getItem("hemlatajr_reviews");
    if (stored) {
      try {
        setReviews(JSON.parse(stored));
      } catch (e) {
        setReviews(DEFAULT_REVIEWS);
      }
    }
  }, []);

  const updateReviews = (newReviews: Review[]) => {
    setReviews(newReviews);
    localStorage.setItem("hemlatajr_reviews", JSON.stringify(newReviews));
  };

  const addReview = (review: Omit<Review, "id">) => {
    const newReview: Review = {
      ...review,
      id: Math.max(...reviews.map(r => r.id), 0) + 1,
    };
    updateReviews([...reviews, newReview]);
  };

  const removeReview = (id: number) => {
    updateReviews(reviews.filter(r => r.id !== id));
  };

  return { reviews, addReview, removeReview, updateReviews };
};
