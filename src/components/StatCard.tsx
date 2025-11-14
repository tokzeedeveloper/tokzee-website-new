interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-4xl md:text-5xl font-bold mb-2 text-primary" data-testid={`stat-value-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {value}
      </div>
      <div className="text-sm uppercase tracking-wider text-muted-foreground" data-testid={`stat-label-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {label}
      </div>
    </div>
  );
}
