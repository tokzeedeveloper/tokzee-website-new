import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  age: number;
}

export default function TestimonialCard({ quote, author, age }: TestimonialCardProps) {
  return (
    <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/10" data-testid={`card-testimonial-${author.toLowerCase()}`}>
      <Quote className="w-14 h-14 text-primary/20 mb-6" />
      <blockquote className="text-3xl md:text-4xl font-display font-semibold leading-snug mb-8">
        "{quote}"
      </blockquote>
      <footer className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-lg font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{age} years old</div>
        </div>
      </footer>
    </div>
  );
}
