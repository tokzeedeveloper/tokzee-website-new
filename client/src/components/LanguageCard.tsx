import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LanguageCardProps {
  language: string;
  speakers: string;
  available: boolean;
}

export default function LanguageCard({ language, speakers, available }: LanguageCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-language-${language.toLowerCase()}`}>
      <div className="flex items-start justify-between mb-3">
        <h4 className="text-lg font-semibold">{language}</h4>
        <Badge variant={available ? "default" : "secondary"} data-testid={`badge-status-${language.toLowerCase()}`}>
          {available ? "Available" : "Soon"}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground">{speakers} speakers</p>
    </Card>
  );
}
