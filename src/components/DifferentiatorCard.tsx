import { LucideIcon } from "lucide-react";

interface DifferentiatorCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function DifferentiatorCard({ icon: Icon, title, description }: DifferentiatorCardProps) {
  return (
    <div className="flex gap-4" data-testid={`differentiator-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
