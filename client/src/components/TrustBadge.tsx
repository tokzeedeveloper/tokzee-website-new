import { LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustBadge({ icon: Icon, title, description }: TrustBadgeProps) {
  return (
    <div className="text-center p-6" data-testid={`badge-trust-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 ring-2 ring-primary/20">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
