import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_diverse_video_calling_dea317a5.png";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden min-h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/10 to-background/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-12 text-center w-full">
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-tight text-foreground mb-8">
          Talk & Feel Better
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          A simple, safe space where you can connect with genuine people, share your thoughts, and feel heard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg"
            className="rounded-full px-10 py-6 text-lg"
            data-testid="button-download-hero"
          >
            <a 
              href="https://play.google.com/store/apps/details?id=live.videocall.chat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              onClick={() => trackEvent('download_app', 'engagement', 'hero_primary')}
            >
              <Smartphone className="w-5 h-5" />
              Download App
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
