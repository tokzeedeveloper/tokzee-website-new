import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_diverse_video_calling_dea317a5.png";
import { trackEvent } from "@/lib/analytics";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Talk. Bond. Bloom.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Find a SuperHost and share what's on your mind—privately, anytime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg"
            className="rounded-full bg-primary/90 backdrop-blur-md hover:bg-primary/80 border border-primary-border"
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
              Download for Android
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="rounded-full bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
            data-testid="button-ios-hero"
          >
            Coming Soon on iOS
          </Button>
        </div>
      </div>
    </section>
  );
}
