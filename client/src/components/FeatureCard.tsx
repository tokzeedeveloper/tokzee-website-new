import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      <h3 className="text-2xl font-display font-semibold mb-4">{title}</h3>
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
