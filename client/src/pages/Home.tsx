import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StepCard from "@/components/StepCard";
import TrustBadge from "@/components/TrustBadge";
import LanguageCard from "@/components/LanguageCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import DifferentiatorCard from "@/components/DifferentiatorCard";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Users, Lock, CheckCircle, EyeOff, Clock, Zap, Globe, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Tokzee App - Talk. Bond. Bloom. | Anonymous Audio & Video Calling Platform"
        description="Connect with verified SuperHosts for meaningful, anonymous conversations. Audio and video calls in a safe, encrypted environment. Available 24/7 in 50+ countries."
        canonical="https://www.tokzee.live"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />

          <section className="py-32 md:py-40" data-testid="section-why-tokzee">
            <div className="max-w-6xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Private audio & video calls</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Every profile on Tokzee is 100% verified, so you are always talking to real people
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                <FeatureCard 
                  icon={Shield}
                  title="Always anonymous, always safe"
                  description="Your privacy is our priority. Connect without revealing personal information while feeling completely secure."
                />
                <FeatureCard 
                  icon={Heart}
                  title="Verified and empathetic SuperHosts"
                  description="Every SuperHost is carefully verified and trained to provide genuine support and meaningful conversations."
                />
                <FeatureCard 
                  icon={Users}
                  title="No pressure. Just presence."
                  description="Talk at your own pace. Share what you want, when you want. It's all about being present for each other."
                />
              </div>
            </div>
          </section>

          <section className="py-32 md:py-40" data-testid="section-how-it-works">
            <div className="max-w-5xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">How It Works</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Three simple steps to meaningful connections
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <StepCard 
                  number={1}
                  title="Browse profiles or connect randomly"
                  description="Explore SuperHost profiles to find someone who resonates with you, or let serendipity guide you with random matching."
                />
                <StepCard 
                  number={2}
                  title="Choose call type (audio/video)"
                  description="Pick what feels right for the moment. Voice-only for deeper listening or video for face-to-face connection."
                />
                <StepCard 
                  number={3}
                  title="Talk your heart out—privately"
                  description="Share, listen, laugh, and support each other in a completely private, judgment-free space."
                />
              </div>
            </div>
          </section>

          <section className="py-32 md:py-40 bg-accent/20" data-testid="section-trust-safety">
            <div className="max-w-6xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">At Tokzee, your safety comes first</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Talk openly and safely, with no need to share your identity. Your privacy is always protected.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <TrustBadge 
                  icon={Lock}
                  title="End-to-End Encryption"
                  description="All conversations are encrypted and secure"
                />
                <TrustBadge 
                  icon={CheckCircle}
                  title="Verified SuperHosts"
                  description="Background checks and training for all SuperHosts"
                />
                <TrustBadge 
                  icon={EyeOff}
                  title="Anonymous by Design"
                  description="No personal information required or shared"
                />
                <TrustBadge 
                  icon={Clock}
                  title="24/7 Monitoring"
                  description="AI-powered safety monitoring and human oversight"
                />
              </div>
            </div>
          </section>


          <section className="py-32 md:py-40" data-testid="section-testimonials">
            <div className="max-w-6xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Listen to tales of your Dostts</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <TestimonialCard 
                  quote="Joining Tokzee was the best decision during tough times"
                  author="Simran"
                  age={25}
                />
                <TestimonialCard 
                  quote="I found someone who listened to me without judgement"
                  author="Amit"
                  age={28}
                />
                <TestimonialCard 
                  quote="It's easier to share when my identity is not revealed"
                  author="Smruthika"
                  age={22}
                />
                <TestimonialCard 
                  quote="I found everyone to be really warm and thoughtful"
                  author="Joyful"
                  age={26}
                />
              </div>
            </div>
          </section>

          <section className="py-40 md:py-48 bg-accent/30" data-testid="section-cta">
            <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Find your Super Host. Let the conversation begin.
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
                Join thousands who've found connection, support, and genuine friendship through meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg"
                  className="rounded-full px-10 py-6 text-lg"
                  data-testid="button-download-cta"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=live.videocall.chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('download_app', 'engagement', 'cta_primary')}
                  >
                    Download App
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
