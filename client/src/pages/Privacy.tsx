import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Privacy() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - Tokzee App"
        description="Learn how Tokzee App protects your privacy. Read our comprehensive privacy policy covering data collection, encryption, and your rights."
        canonical="https://www.tokzee.live/privacy"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <article className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Last updated: October 25, 2025</p>
              <h1 className="text-4xl font-display font-bold mb-6">Privacy Policy</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">1. Introduction</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  At Tokzee App, we are committed to protecting your privacy and ensuring your anonymity. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-3 mt-8">Anonymous Usage Data</h3>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We collect minimal, anonymized data to improve our service:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Device type and operating system</li>
                  <li className="text-base leading-relaxed text-muted-foreground">App usage patterns and session duration</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Language preferences</li>
                  <li className="text-base leading-relaxed text-muted-foreground">General location (country-level only)</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3 mt-8">What We Don't Collect</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Your name, email, or phone number</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Content of your conversations</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Photos, videos, or recordings from calls</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Precise location data</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">3. End-to-End Encryption</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  All audio and video conversations on Tokzee App are protected by end-to-end encryption. This means:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Only you and the SuperHost can access conversation content</li>
                  <li className="text-base leading-relaxed text-muted-foreground">We cannot access, read, or listen to your conversations</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Your conversations are not stored on our servers</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Third parties cannot intercept your communications</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">4. How We Use Your Information</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  The minimal data we collect is used solely to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Match you with appropriate SuperHosts</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Improve service quality and user experience</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Ensure platform safety and detect abuse</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">5. Data Sharing</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We do not sell, rent, or share your data with third parties for marketing purposes. We may share anonymized, aggregated data with:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Service providers who help operate our platform</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Law enforcement when legally required</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Analytics partners to improve our service</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">6. Safety Monitoring</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  To ensure user safety, we employ AI-powered monitoring that:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Detects potential violations without accessing conversation content</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Analyzes metadata patterns for safety concerns</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Flags suspicious behavior for human review</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Protects users from harassment and abuse</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">7. Your Rights</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Request deletion of any data associated with your device</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Opt out of analytics collection</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Access information about data we've collected</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Withdraw consent for data processing</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">8. Data Retention</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We retain minimal data for the shortest time necessary. Session data is typically deleted within 30 days. Conversation content is never stored.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">9. Children's Privacy</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Tokzee App is intended for users aged 18 and above. We do not knowingly collect information from minors.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">10. Changes to This Policy</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We may update this Privacy Policy periodically. Significant changes will be communicated through the app. Continued use after changes constitutes acceptance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">11. Contact Us</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  For privacy-related questions or concerns, contact us at:<br />
                  48-B Ambamata Scheme, Udaipur, Rajasthan, India
                </p>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
