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

          <section className="py-20 md:py-24" data-testid="section-why-tokzee">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Tokzee App?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real connections, real conversations, real support
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <section className="py-20 md:py-24 bg-card" data-testid="section-how-it-works">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Three simple steps to meaningful connections
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

          <section className="py-20 md:py-24" data-testid="section-trust-safety">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trust & Safety</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Your safety and privacy are our top priorities
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          <section className="py-20 md:py-24 bg-card" data-testid="section-languages">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Connect in Your Language</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find SuperHosts who speak your language and understand your culture
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <LanguageCard language="Telugu" speakers="2.1M+" available={true} />
                <LanguageCard language="Tamil" speakers="890K+" available={true} />
                <LanguageCard language="Malayalam" speakers="650K+" available={true} />
                <LanguageCard language="Hindi" speakers="480K+" available={true} />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-6">
                  Don't see your language? We're constantly adding new languages based on community demand.
                </p>
                <Button 
                  variant="outline" 
                  className="rounded-full" 
                  data-testid="button-request-language"
                  onClick={() => trackEvent('request_language', 'engagement', 'language_section')}
                >
                  Request a Language
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-24" data-testid="section-stats">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by Millions</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join a global community of meaningful connections
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <StatCard value="2.5M+" label="Active Users" />
                <StatCard value="15M+" label="Conversations" />
                <StatCard value="50+" label="Countries" />
                <StatCard value="24/7" label="Support" />
              </div>
            </div>
          </section>

          <section className="py-20 md:py-24 bg-card" data-testid="section-differentiators">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Makes Us Different</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Unique features that set Tokzee apart
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <DifferentiatorCard 
                  icon={Zap}
                  title="Instant Connection"
                  description="Connect with SuperHosts in seconds, not days. No endless swiping or waiting."
                />
                <DifferentiatorCard 
                  icon={Heart}
                  title="Genuine Empathy"
                  description="Our SuperHosts are trained in active listening and emotional support."
                />
                <DifferentiatorCard 
                  icon={Globe}
                  title="Global Community"
                  description="Connect with people from 50+ countries and experience diverse perspectives."
                />
                <DifferentiatorCard 
                  icon={ShieldCheck}
                  title="Complete Safety"
                  description="Advanced AI monitoring and human oversight ensure a safe environment."
                />
              </div>
            </div>
          </section>

          <section className="py-20 md:py-24" data-testid="section-testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real User Moments</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Stories of connection and support
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <TestimonialCard 
                  quote="I was going through a tough time and found someone who just listened. No judgment, just pure empathy. It changed my week."
                  author="Sarah"
                  age={28}
                />
                <TestimonialCard 
                  quote="The anonymity made it so easy to open up. I connected with someone who understood exactly what I was feeling."
                  author="Alex"
                  age={34}
                />
                <TestimonialCard 
                  quote="Sometimes you just need someone to talk to. Tokzee App gave me that connection when I needed it most."
                  author="Jordan"
                  age={26}
                />
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 bg-primary text-primary-foreground" data-testid="section-cta">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Find your Super Host. Let the conversation begin.
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands who've found connection, support, and genuine friendship through meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full bg-white/10 backdrop-blur-md text-primary-foreground border-primary-foreground/30 hover:bg-white/20"
                  data-testid="button-ios-cta"
                  onClick={() => trackEvent('ios_interest', 'engagement', 'cta_section')}
                >
                  Coming Soon on iOS
                </Button>
                <Button 
                  asChild 
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-white/90"
                  data-testid="button-download-cta"
                >
                  <a 
                    href="https://play.google.com/store/apps/details?id=live.videocall.chat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('download_app', 'engagement', 'cta_primary')}
                  >
                    Download for Android
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
