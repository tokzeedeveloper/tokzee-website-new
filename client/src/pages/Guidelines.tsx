import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Guidelines() {
  return (
    <>
      <SEOHead 
        title="Community Guidelines - Better Friend"
        description="Read Better Friend's community guidelines for respectful, safe interactions. Learn about our standards for meaningful conversations and user conduct."
        canonical="https://www.betterfriend.live/guidelines"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <article className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Last updated: October 25, 2025</p>
              <h1 className="text-4xl font-display font-bold mb-6">Community Guidelines</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Our Mission</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Better Friend exists to create a safe, supportive space for meaningful human connections. These guidelines help ensure every conversation is respectful, empathetic, and positive.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Core Values</h2>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground"><strong>Empathy:</strong> Listen actively and respond with understanding</li>
                  <li className="text-base leading-relaxed text-muted-foreground"><strong>Respect:</strong> Treat everyone with dignity and kindness</li>
                  <li className="text-base leading-relaxed text-muted-foreground"><strong>Safety:</strong> Create a judgment-free, secure environment</li>
                  <li className="text-base leading-relaxed text-muted-foreground"><strong>Authenticity:</strong> Be genuine and present in conversations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Expected Behavior</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-8">Be Respectful</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Treat all users with courtesy and respect</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Honor different perspectives, backgrounds, and experiences</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Use appropriate language at all times</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Respect boundaries when someone is uncomfortable</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-8">Be Supportive</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Practice active listening without judgment</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Offer encouragement and validation</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Ask thoughtful questions to understand better</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Acknowledge the courage it takes to share</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-8">Protect Privacy</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Do not share personal identifying information</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Respect the confidential nature of conversations</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Do not record, screenshot, or share conversation content</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Maintain anonymity for yourself and others</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Prohibited Behavior</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-8">Zero Tolerance For:</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Harassment, bullying, or threatening behavior</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Sexual content, advances, or inappropriate solicitations</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Hate speech, discrimination, or prejudice</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Violence, self-harm, or dangerous content</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Illegal activities or content</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Spam, scams, or commercial solicitations</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Impersonation or deception</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Attempting to circumvent safety measures</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">SuperHost Standards</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  SuperHosts are held to additional standards:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Maintain professionalism and empathy</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Provide non-judgmental, supportive listening</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Recognize when to recommend professional help</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Never provide medical or legal advice</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Report serious safety concerns immediately</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Safety & Reporting</h2>
                
                <h3 className="text-xl font-semibold mb-3 mt-8">If You Feel Unsafe</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">End the conversation immediately</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Use the in-app reporting feature</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Provide details about the violation</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Block users who make you uncomfortable</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-8">What We Do</h3>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Review all reports within 24 hours</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Take immediate action on serious violations</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Suspend or ban violators permanently</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Continuously improve safety measures</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Mental Health Resources</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Better Friend is not a substitute for professional mental health services. If you or someone you know is experiencing a mental health crisis:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Contact local emergency services immediately</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Reach out to crisis hotlines in your country</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Seek help from licensed mental health professionals</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Tell someone you trust about what you're experiencing</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Consequences of Violations</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  Violations of these guidelines may result in:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-relaxed text-muted-foreground">Warning and educational outreach</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Temporary suspension of account</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Permanent ban from the platform</li>
                  <li className="text-base leading-relaxed text-muted-foreground">Report to law enforcement when appropriate</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Updates to Guidelines</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  We may update these guidelines to address new challenges and improve our community. Significant changes will be communicated through the app.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 mt-12">Contact Us</h2>
                <p className="text-base leading-relaxed text-muted-foreground mb-4">
                  For questions about these guidelines or to report concerns:<br />
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
