import FeatureCard from '../FeatureCard';
import { Shield } from 'lucide-react';

export default function FeatureCardExample() {
  return (
    <FeatureCard 
      icon={Shield}
      title="Always anonymous, always safe"
      description="Your privacy is our priority. Connect without revealing personal information while feeling completely secure."
    />
  );
}
