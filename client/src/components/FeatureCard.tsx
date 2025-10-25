import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center group hover:scale-105 transition-transform duration-300" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 mb-6 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all relative">
        <div className="absolute inset-0 rounded-3xl bg-primary/5 blur-xl group-hover:blur-2xl transition-all" />
        <Icon className="w-12 h-12 text-primary relative z-10" />
      </div>
      <h3 className="text-2xl font-display font-semibold mb-4">{title}</h3>
      <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
