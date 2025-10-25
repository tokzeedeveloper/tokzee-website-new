import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t py-16 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-primary">Tokzee</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real connections, real conversations, real support
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://play.google.com/store/apps/details?id=live.videocall.chat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-download"
                >
                  Download App
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" data-testid="link-footer-terms">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" data-testid="link-footer-privacy">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/guidelines" data-testid="link-footer-guidelines">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Community Guidelines
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <address className="text-sm text-muted-foreground not-italic leading-relaxed" data-testid="text-address">
              48-B Ambamata Scheme<br />
              Udaipur, Rajasthan<br />
              India
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tokzee App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
