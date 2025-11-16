import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles, Star } from "lucide-react";
import heroImage from "@assets/generated_images/Indian_video_calling_app_hero_121ba65f.png";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10">
      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-12 text-center w-full">
        {/* Playful badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 border-2 border-primary/20">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">100% Verified Profiles</span>
          <Star className="w-5 h-5 fill-primary" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight text-foreground mb-8">
          Real Voices. Real Comfort. Anytime.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto mb-12 leading-relaxed">
          Connect with verified experts for private audio & video calls — a safe space to share, learn, and grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg"
            className="rounded-full px-10 py-6 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            data-testid="button-download-hero"
          >
            <a 
              href="#download" 
              className="flex items-center gap-2"
              onClick={() => trackEvent('download_app', 'engagement', 'hero_primary')}
            >
              <Smartphone className="w-5 h-5" />
              Download App
            </a>
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>2.5M+ Active Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>100% Anonymous</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span>24/7 Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
