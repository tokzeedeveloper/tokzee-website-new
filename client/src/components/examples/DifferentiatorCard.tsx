import DifferentiatorCard from '../DifferentiatorCard';
import { Zap } from 'lucide-react';

export default function DifferentiatorCardExample() {
  return (
    <DifferentiatorCard 
      icon={Zap}
      title="Instant Connection"
      description="Connect with experts in seconds, not days. No endless swiping or waiting."
    />
  );
}
