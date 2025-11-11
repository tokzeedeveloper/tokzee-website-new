import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - BetterFriend"
        description="How BetterFriend collects, uses, stores, and shares your personal information, and the choices you have about your data."
        canonical="https://www.betterfriend.live/privacy"
      />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <article className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                Last updated: October 26, 2025
              </p>
              <h1 className="text-4xl font-display font-bold mb-2">Privacy Policy</h1>
              <p className="text-base text-muted-foreground">
                Welcome to BetterFriend’s Privacy Policy. This document explains how Brewing Conversations Pvt Ltd
                (“BetterFriend”, “we”, “us”, or “our”) collects, uses, stores, and shares your personal information while
                you use BetterFriend, and how you can manage your data and privacy choices while using the app.
              </p>
              <p className="text-base text-muted-foreground">
                We believe in being transparent about how your data is handled. This policy outlines the types of
                information we collect, the purposes for which we use it, and the tools we offer to help you control
                what you share and with whom. This Privacy Policy applies to all features, products, and services
                offered through BetterFriend. Please read this Privacy Policy along with our{" "}
                <a href="/terms" className="underline">Terms and Conditions of Use</a>. In case of any conflict between
                the two, this Privacy Policy will override the Terms. If you have any questions, email{" "}
                <a href="mailto:support@betterfriend.live" className="underline">support@betterfriend.live</a>.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section id="information-we-collect" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">
                  1. The Information We Collect and How We Use It
                </h2>
                <p className="text-muted-foreground">
                  We collect personal information to set up and operate your account, provide our services, comply with
                  legal requirements, and improve BetterFriend. The table below outlines the categories of data we
                  collect, how we collect it, and how we use it.
                </p>

                <div className="overflow-x-auto mt-6">
                  <table className="w-full text-left border border-border">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="p-3 border-b border-border">Category</th>
                        <th className="p-3 border-b border-border">Data We Collect</th>
                        <th className="p-3 border-b border-border">Purpose of Collection and Use</th>
                      </tr>
                    </thead>
                    <tbody className="align-top">
                      <tr>
                        <td className="p-3 border-b border-border">Account setup and log-in data</td>
                        <td className="p-3 border-b border-border">
                          User ID, name, age, mobile number, password, gender, voice sample, IP address
                        </td>
                        <td className="p-3 border-b border-border">
                          Create/manage account; send notifications (incl. policy updates); support; personalise
                          language/location/experience; detect fraud and enforce Terms; troubleshooting/analytics; improve services
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Profile information</td>
                        <td className="p-3 border-b border-border">Username, birth year, gender, language preference</td>
                        <td className="p-3 border-b border-border">Populate profile; personalise experience</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Moderation of audio/video call and chat</td>
                        <td className="p-3 border-b border-border">Voice &amp; video data, call activity patterns</td>
                        <td className="p-3 border-b border-border">
                          Detect/prevent guideline violations; enable real-time &amp; post-call/chat moderation; generate content
                          suggestions/prompts; improve automated safety tools and moderation systems (incl. model retraining)
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">AI-generated interaction features</td>
                        <td className="p-3 border-b border-border">Audio, video, chat content, transcripts, usage patterns</td>
                        <td className="p-3 border-b border-border">
                          Generate real-time prompts/replies; support chatbot interactions; improve quality/responsiveness; some AI
                          services are third-party and may process data outside the app; enhance accuracy and relevance of AI features
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Device data</td>
                        <td className="p-3 border-b border-border">
                          Device model, OS version, app version, browser type, plugins, battery, storage, signal strength,
                          foreground/background status, device language
                        </td>
                        <td className="p-3 border-b border-border">
                          Optimise performance; improve security/troubleshooting; customise experience for your device
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Identifiers and signals</td>
                        <td className="p-3 border-b border-border">Device ID, advertising IDs, Bluetooth signals, nearby Wi-Fi/cell towers</td>
                        <td className="p-3 border-b border-border">Personalise content/advertising; enhance security &amp; app functionality</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Location and media access</td>
                        <td className="p-3 border-b border-border">
                          GPS/location, address, time zone; camera/microphone/photos/media (with permission)
                        </td>
                        <td className="p-3 border-b border-border">
                          Enable features requiring media/camera/mic; personalise content based on location; detect suspicious
                          activity; prevent unauthorised access; maintain platform security/integrity
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Network and connection info</td>
                        <td className="p-3 border-b border-border">Carrier, ISP, IP address, time zone, connection speed, language</td>
                        <td className="p-3 border-b border-border">
                          Ensure service availability/optimise performance; detect suspicious activity; protect access/integrity
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Call, chat &amp; interaction data</td>
                        <td className="p-3 border-b border-border">
                          Interactions list, timestamps, duration, pick-up rate
                        </td>
                        <td className="p-3 border-b border-border">
                          Enable calls/chat; safety monitoring/moderation; enforce guidelines; detect suspicious activity
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Log data &amp; technical info</td>
                        <td className="p-3 border-b border-border">Cookies, beacons, scripts, logs, crash reports, referral URLs</td>
                        <td className="p-3 border-b border-border">Diagnostics; usage tracking; performance optimisation</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Information from other sources</td>
                        <td className="p-3 border-b border-border">
                          Data from providers/subcontractors/analytics (e.g., name, image, email, phone, country, device, ad campaign
                          interactions)
                        </td>
                        <td className="p-3 border-b border-border">
                          Analytics; abuse/fraud detection; AI features (suggestions/moderation outcomes); enable third-party login
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Marketing metadata</td>
                        <td className="p-3 border-b border-border">Traffic source, medium, campaign, ad/content type</td>
                        <td className="p-3 border-b border-border">
                          Understand discovery &amp; acquisition (incl. interest forms); improve marketing &amp; engagement
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Account security</td>
                        <td className="p-3 border-b border-border">Phone number; SMS OTP access</td>
                        <td className="p-3 border-b border-border">Identity verification; protect access; prevent misuse</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Customer support</td>
                        <td className="p-3 border-b border-border">Any data shared with support</td>
                        <td className="p-3 border-b border-border">Investigate/resolve issues; improve support quality</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Transactional &amp; financial data</td>
                        <td className="p-3 border-b border-border">
                          Purchases (coins/features), biller name/ID, amount, transaction ID, average order value, lifetime spends
                        </td>
                        <td className="p-3 border-b border-border">
                          Process payments; maintain records; comply with legal/tax; show relevant offers
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 border-b border-border">Verification &amp; banking details</td>
                        <td className="p-3 border-b border-border">
                          PAN, Aadhaar and number, link status, name/DOB/gender on IDs, UPI ID, bank details, account holder name
                        </td>
                        <td className="p-3 border-b border-border">
                          Identity verification for payment-related purposes; secure processing; legal compliance
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Information from other users &amp; third parties</td>
                        <td className="p-3">Reports/data from users, affiliates, providers, authorities</td>
                        <td className="p-3">
                          Investigate complaints/policy violations; prevent abuse/fraud; comply with legal obligations
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-muted-foreground mt-6">
                  In addition, we may use personal data to perform analytics (including aggregated or pseudonymised
                  data) to understand usage and improve performance, design, and safety.
                </p>
              </section>

              <section id="sharing" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">2. How We Share Your Information</h2>
                <h3 className="text-xl font-semibold mt-6 mb-2">With other users you interact with</h3>
                <p className="text-muted-foreground">
                  During calls/chats, limited profile info (e.g., username, profile picture if provided, call status) may
                  be visible to the other party. We do not share your phone number or sensitive personal data unless you
                  choose to disclose it.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With your consent</h3>
                <p className="text-muted-foreground">
                  We share information with third-party services/platforms only when you explicitly allow it (e.g., sending
                  a call invitation via WhatsApp or SMS). Their privacy policies apply to the shared data.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With our service providers</h3>
                <p className="text-muted-foreground">
                  We use trusted providers for cloud hosting, call infrastructure, analytics/diagnostics, support tools,
                  security/fraud detection, notifications/engagement, and AI services (e.g., moderation, chatbot
                  infrastructure, prompt generation). They process data on our behalf under confidentiality and data
                  protection obligations.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">For legal and safety reasons</h3>
                <p className="text-muted-foreground">
                  We may disclose information to comply with law or valid requests; respond to law enforcement; enforce
                  our Terms or investigate violations; detect/prevent fraud, abuse, or technical issues; or protect the
                  rights, safety, and property of BetterFriend, users, or the public.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">With our group entities</h3>
                <p className="text-muted-foreground">
                  We may share information with our parent, subsidiaries, and affiliates to provide, improve, and secure
                  BetterFriend.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">In case of a business transfer</h3>
                <p className="text-muted-foreground">
                  If involved in a merger, acquisition, restructuring, or sale of assets, we may transfer data as part of
                  the transaction and will notify you where required by law.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Aggregated or de-identified information</h3>
                <p className="text-muted-foreground">
                  We may share data that does not identify you with partners/third parties for analytics, research, or
                  service improvement.
                </p>
              </section>

              <section id="security" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">3. How We Protect Your Personal Information</h2>
                <p className="text-muted-foreground">
                  We use technical, physical, and administrative measures designed for the nature of data collected and
                  associated risks. You must keep your login details confidential. While we take reasonable steps to
                  protect your information, no system is completely secure. If we identify a suspected breach, we will act
                  per our procedures and, where required by law, notify you and relevant authorities.
                </p>
              </section>

              <section id="changes" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">4. Changes to this Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically. For material changes affecting your rights or how we use
                  data, we may notify you in-app or via SMS. Please review this page from time to time.
                </p>
              </section>

              <section id="retention" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain personal information as long as needed to provide services and for other lawful purposes. If
                  you delete your account or content, we will remove data from active systems, though copies may persist in
                  backups or archives. Content shared or saved by others (e.g., screenshots/forwards) may continue to exist
                  outside our control.
                </p>
              </section>

              <section id="your-rights" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">6. Your Rights</h2>
                <h3 className="text-xl font-semibold mt-6 mb-2">Review and correction</h3>
                <p className="text-muted-foreground">
                  You may review the personal data you provided and request correction of incomplete or inaccurate
                  information. We may verify the accuracy of updates before making changes.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Withdraw consent</h3>
                <p className="text-muted-foreground">
                  Where processing relies on consent, you may withdraw it at any time without affecting prior lawful
                  processing. If you withdraw consent, object to processing, or decline to provide certain data, some or
                  all services may become unavailable.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">How to exercise your rights</h3>
                <p className="text-muted-foreground">
                  Email{" "}
                  <a href="mailto:support@betterfriend.live" className="underline">
                    support@betterfriend.live
                  </a>
                  . For your safety, we may require identity verification before processing requests.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Marketing communications</h3>
                <p className="text-muted-foreground">
                  You can opt out of marketing at any time by emailing{" "}
                  <a href="mailto:support@betterfriend.live" className="underline">
                    support@betterfriend.live
                  </a>
                  . We may still send service-related messages as permitted by law.
                </p>
              </section>

              <section id="grievance" className="mb-12">
                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Grievance Redressal Mechanism</h2>

                <h3 className="text-xl font-semibold mt-6 mb-2">In-App Reporting</h3>
                <p className="text-muted-foreground">
                  Report user profiles or make complaints via the in-app Help &amp; Support section.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Email Support</h3>
                <p className="text-muted-foreground">
                  For service-related issues, contact{" "}
                  <a href="mailto:support@betterfriend.live" className="underline">
                    support@betterfriend.live
                  </a>
                  .
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2">Grievance Officer (designation only)</h3>
                <address className="not-italic text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:support@betterfriend.live" className="underline">
                    support@betterfriend.live
                  </a>
                  <br />
                  Address: 48-B Ambamata Scheme, Udaipur, Rajasthan, 313003
                </address>
              </section>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
}
