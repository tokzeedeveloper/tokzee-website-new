import { Card } from "@/components/ui/card";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <Card className="p-12 relative overflow-hidden hover-elevate transition-all" data-testid={`card-step-${number}`}>
      <div className="absolute top-4 right-4 text-6xl font-bold opacity-10">
        {number}
      </div>
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <span className="text-xl font-bold text-primary">{number}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
