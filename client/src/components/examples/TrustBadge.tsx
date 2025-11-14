import TrustBadge from '../TrustBadge';
import { Lock } from 'lucide-react';

export default function TrustBadgeExample() {
  return (
    <TrustBadge 
      icon={Lock}
      title="End-to-End Encryption"
      description="All conversations are encrypted and secure"
    />
  );
}
