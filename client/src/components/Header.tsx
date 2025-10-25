import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" data-testid="link-home">
            <span className="text-2xl font-display font-bold text-primary">Tokzee</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" data-testid="link-nav-home">
              <span className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
                Home
              </span>
            </Link>
            <Link href="/terms" data-testid="link-nav-terms">
              <span className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
                Terms & Conditions
              </span>
            </Link>
            <Link href="/privacy" data-testid="link-nav-privacy">
              <span className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
                Privacy Policy
              </span>
            </Link>
            <Link href="/guidelines" data-testid="link-nav-guidelines">
              <span className="text-sm font-medium hover-elevate px-3 py-2 rounded-md transition-colors">
                Community Guidelines
              </span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button 
              asChild 
              className="rounded-full"
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
        <div className="md:hidden border-t" data-testid="mobile-menu">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link href="/" data-testid="link-mobile-home">
              <span className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md">
                Home
              </span>
            </Link>
            <Link href="/terms" data-testid="link-mobile-terms">
              <span className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md">
                Terms & Conditions
              </span>
            </Link>
            <Link href="/privacy" data-testid="link-mobile-privacy">
              <span className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md">
                Privacy Policy
              </span>
            </Link>
            <Link href="/guidelines" data-testid="link-mobile-guidelines">
              <span className="block px-3 py-2 text-sm font-medium hover-elevate rounded-md">
                Community Guidelines
              </span>
            </Link>
            <Button 
              asChild 
              className="rounded-full w-full"
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
