import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-display font-bold text-primary">Tokzee</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/privacy" data-testid="link-nav-privacy">
              <span className="text-base font-medium hover-elevate px-4 py-2 rounded-md transition-colors">
                Privacy
              </span>
            </Link>
            <Link href="/terms" data-testid="link-nav-terms">
              <span className="text-base font-medium hover-elevate px-4 py-2 rounded-md transition-colors">
                Terms
              </span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button 
              asChild 
              className="rounded-full px-8 py-3"
              data-testid="button-download-header"
            >
              <a 
                href="https://play.google.com/store/apps/details?id=live.videocall.chat" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent('download_app', 'engagement', 'header')}
              >
                Download App
              </a>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden" data-testid="mobile-menu">
          <nav className="flex flex-col px-8 py-6 space-y-4">
            <Link href="/privacy" data-testid="link-mobile-privacy">
              <span className="block px-4 py-3 text-base font-medium hover-elevate rounded-md">
                Privacy
              </span>
            </Link>
            <Link href="/terms" data-testid="link-mobile-terms">
              <span className="block px-4 py-3 text-base font-medium hover-elevate rounded-md">
                Terms
              </span>
            </Link>
            <Button 
              asChild 
              className="rounded-full w-full py-6"
              data-testid="button-download-mobile"
            >
              <a 
                href="https://play.google.com/store/apps/details?id=live.videocall.chat" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackEvent('download_app', 'engagement', 'mobile_menu')}
              >
                Download App
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
