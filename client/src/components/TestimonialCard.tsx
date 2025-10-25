import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  age: number;
}

export default function TestimonialCard({ quote, author, age }: TestimonialCardProps) {
  return (
    <Card className="p-8 min-h-64 flex flex-col hover-elevate transition-all" data-testid={`card-testimonial-${author.toLowerCase()}`}>
      <Quote className="w-10 h-10 text-primary/20 mb-4" />
      <blockquote className="text-lg leading-relaxed flex-1 mb-6">
        {quote}
      </blockquote>
      <footer className="text-sm text-muted-foreground">
        — {author}, {age}
      </footer>
    </Card>
  );
}
