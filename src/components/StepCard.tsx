import { Card } from "@/components/ui/card";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="relative" data-testid={`card-step-${number}`}>
      <div className="absolute -top-6 -left-2 text-8xl font-bold text-primary/5">
        {number}
      </div>
      <div className="relative pt-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <span className="text-2xl font-bold text-primary">{number}</span>
        </div>
        <h3 className="text-2xl font-display font-semibold mb-4">{title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
