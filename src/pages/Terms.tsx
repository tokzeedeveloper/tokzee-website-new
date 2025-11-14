import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Terms() {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions - Better Friend"
        description="Read Better Friend's terms and conditions for using our anonymous audio and video calling platform. Learn about user responsibilities and service guidelines."
        canonical="https://www.betterfriend.live/terms"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <article className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Last updated: October 25, 2025</p>
              <h1 className="text-4xl font-display font-bold mb-6">Terms & Conditions</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">1. Acceptance of Terms</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  By accessing and using Better Friend, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">2. Use of Service</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Better Friend provides a platform for connecting users with verified companions for anonymous audio and video conversations. You must be at least 18 years old to use this service.
                </p>
                <h3 className="text-xl font-semibold mb-3 mt-8">User Responsibilities</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Maintain respectful and appropriate communication at all times</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Do not share personal identifying information</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Report any violations of community guidelines</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">3. Privacy and Data Protection</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Your privacy is important to us. All conversations are encrypted end-to-end. We collect minimal data necessary to provide our service. For more details, please review our Privacy Policy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">4. Companion Guidelines</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  All companions undergo verification and training. They are expected to provide empathetic, non-judgmental support. Companions are not licensed therapists or medical professionals.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">5. Prohibited Activities</h2>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Harassment, abuse, or threatening behavior</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Sharing inappropriate or illegal content</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Attempting to bypass safety measures or monitoring</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Using the service for commercial purposes without authorization</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">6. Limitation of Liability</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Better Friend is provided "as is" without warranties of any kind. We are not responsible for the content of conversations between users and companions. Our service is not a substitute for professional mental health services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">7. Termination</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We reserve the right to suspend or terminate your access to Better Friend at any time, without notice, for conduct that we believe violates these terms or is harmful to other users.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">8. Changes to Terms</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We may modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">9. Contact Information</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  For questions about these terms, please contact us at:<br />
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
