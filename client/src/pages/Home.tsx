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
import { Shield, Heart, Users, Lock, CheckCircle, EyeOff, Clock, Zap, Globe, ShieldCheck, Smartphone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function Home() {
  return (
    <>
      <SEOHead 
        title="Better Friend - Your Companion for Meaningful Conversations | Anonymous Audio & Video Calling"
        description="Connect with verified companions for meaningful, anonymous conversations. Audio and video calls in a safe, encrypted environment. Available 24/7 in 50+ countries."
        canonical="https://www.betterfriend.live"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />

          <section className="py-32 md:py-40 relative" data-testid="section-why-betterfriend">
            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="max-w-6xl mx-auto px-8 lg:px-12 relative">
              <div className="text-center mb-20">
                <div className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-6">
                  ✨ Why Choose Better Friend
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Private audio & video calls
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Every profile on Better Friend is 100% verified, so you are always talking to real people
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

          <section className="py-32 md:py-40 bg-gradient-to-br from-primary/5 via-background to-accent/5" data-testid="section-how-it-works">
            <div className="max-w-5xl mx-auto px-8 lg:px-12">
              <div className="text-center mb-24">
                <div className="inline-block px-6 py-2 bg-accent/20 rounded-full text-accent font-semibold mb-6">
                  🚀 Super Easy
                </div>
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

          <section className="py-32 md:py-40 bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 relative" data-testid="section-trust-safety">
            {/* Decorative shapes */}
            <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-ping" />
            <div className="absolute bottom-40 right-40 w-3 h-3 bg-accent rounded-full animate-ping delay-500" />
            
            <div className="max-w-6xl mx-auto px-8 lg:px-12 relative">
              <div className="text-center mb-20">
                <div className="inline-block px-6 py-2 bg-primary/20 rounded-full text-primary font-semibold mb-6">
                  🛡️ Your Safety First
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">At Better Friend, your safety comes first</h2>
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


          <section className="py-32 md:py-40 relative" data-testid="section-testimonials">
            {/* Playful decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="max-w-6xl mx-auto px-8 lg:px-12 relative">
              <div className="text-center mb-20">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-primary font-semibold mb-6">
                  💬 Real Stories
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Listen to tales of your Dostts
                </h2>
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

          <section className="py-40 md:py-48 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 relative overflow-hidden" data-testid="section-cta">
            {/* Animated background shapes */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="max-w-4xl mx-auto px-8 lg:px-12 text-center relative z-10">
              <div className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold mb-8 shadow-lg">
                ✨ Join 2.5M+ Happy Users
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Find your Super Host. Let the conversation begin.
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto">
                Join thousands who've found connection, support, and genuine friendship through meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  asChild 
                  size="lg"
                  className="rounded-full px-12 py-7 text-lg shadow-2xl shadow-primary/30 hover:shadow-3xl hover:scale-105 transition-all"
                  data-testid="button-download-cta"
                >
                  <a 
                    href="#download"
                    onClick={() => trackEvent('download_app', 'engagement', 'cta_primary')}
                    className="flex items-center gap-2"
                  >
                    <Smartphone className="w-6 h-6" />
                    Download App Now
                  </a>
                </Button>
              </div>
              
              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-2 bg-white/50 dark:bg-card/50 px-6 py-3 rounded-full backdrop-blur-sm">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="font-semibold">Free Forever</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 dark:bg-card/50 px-6 py-3 rounded-full backdrop-blur-sm">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="font-semibold">No Ads</span>
                </div>
                <div className="flex items-center gap-2 bg-white/50 dark:bg-card/50 px-6 py-3 rounded-full backdrop-blur-sm">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="font-semibold">100% Safe</span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
