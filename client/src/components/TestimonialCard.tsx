import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  age: number;
}

export default function TestimonialCard({ quote, author, age }: TestimonialCardProps) {
  return (
    <div className="p-12 rounded-2xl bg-accent/30" data-testid={`card-testimonial-${author.toLowerCase()}`}>
      <Quote className="w-12 h-12 text-primary/10 mb-6" />
      <blockquote className="text-3xl md:text-4xl font-display font-semibold leading-snug mb-8">
        "{quote}"
      </blockquote>
      <footer className="text-lg text-muted-foreground">
        — {author}, {age}
      </footer>
    </div>
  );
}
