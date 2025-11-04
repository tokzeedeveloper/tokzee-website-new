import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-primary">Tokzee</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Talk & feel better
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" data-testid="link-footer-terms">
                  <span className="text-base text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/privacy" data-testid="link-footer-privacy">
                  <span className="text-base text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/guidelines" data-testid="link-footer-guidelines">
                  <span className="text-base text-muted-foreground hover:text-foreground transition-colors">
                    Community Guidelines
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Contact</h4>
            <address className="text-base text-muted-foreground not-italic leading-relaxed" data-testid="text-address">
              79, Panchwati, Nr Kids Kingdom<br />
              School, Udaipur, Rajasthan<br />
              India
            </address>
          </div>
        </div>

        <div className="pt-8 border-t text-center">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} Tokzee App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
