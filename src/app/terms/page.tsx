import type { Metadata } from "next";
import { NextSeo } from "next-seo";

export const metadata: Metadata = {
  title: "Terms and Conditions - TokenRadar Labs",
  description: "Terms and conditions for TokenRadar Labs - Rules, obligations, and user rights when accessing our services.",
};

export default function TermsAndConditions() {
  return (
    <main>
      <NextSeo 
        title="Terms and Conditions - TokenRadar Labs"
        description="Terms and conditions for TokenRadar Labs - Rules, obligations, and user rights when accessing our services."
        canonical="https://tokenradarlabs.com/terms"
        openGraph={{
          url: 'https://tokenradarlabs.com/terms',
          title: 'Terms and Conditions - TokenRadar Labs',
          description: 'Terms and conditions for TokenRadar Labs - Rules, obligations, and user rights when accessing our services.',
          images: [
            {
              url: 'https://tokenradarlabs.com/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'TokenRadar Labs Terms and Conditions',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'terms of service, terms and conditions, user agreement, crypto terms, token radar terms'
          }
        ]}
      />
      <div className="w-full bg-white dark:bg-slate-950">
        <section className="py-16 px-4 max-w-7xl mx-auto">
          {/* Main headline with gradient */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Terms and Conditions
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto text-center">
            Please read these terms and conditions carefully before using TokenRadar Labs services.
          </p>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Agreement to Terms */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Agreement to Terms</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  By accessing or using TokenRadar Labs services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. We will always post the most current version on our website. By continuing to use our platform after such modifications, you agree to be bound by the updated terms.
                </p>
              </div>
            </div>
            
            {/* User Accounts */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">User Accounts</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  When you create an account with us, you must provide accurate, complete, and up-to-date information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
                </p>
                <p>
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Maintaining the confidentiality of your account and password</li>
                  <li>Restricting access to your computer and/or account</li>
                  <li>All activities that occur under your account and/or password</li>
                </ul>
                <p>
                  You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </div>
            
            {/* User Responsibilities */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">User Responsibilities</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  As a user of TokenRadar Labs services, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services for any illegal purpose or in violation of any laws</li>
                  <li>Violate our intellectual property rights or those of any third party</li>
                  <li>Transmit any viruses, malware, or other harmful code</li>
                  <li>Harvest or collect personally identifiable information</li>
                  <li>Impersonate any person or entity</li>
                  <li>Interfere with or disrupt the services or servers</li>
                  <li>Engage in any data mining, scraping, or similar data gathering activities</li>
                  <li>Use our services to send unsolicited communications</li>
                </ul>
              </div>
            </div>
            
            {/* Intellectual Property */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Intellectual Property</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  The content, features, and functionality of TokenRadar Labs services, including but not limited to text, graphics, logos, icons, images, audio clips, and software, are owned by TokenRadar Labs and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reproduce, distribute, modify, or create derivative works of our content</li>
                  <li>Use any of our trademarks or service marks without express written permission</li>
                  <li>Remove any copyright, trademark, or other proprietary notices</li>
                </ul>
                <p>
                  Limited license: We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our services for personal or internal business purposes.
                </p>
              </div>
            </div>
            
            {/* Disclaimers */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Disclaimers</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  TokenRadar Labs services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The accuracy, reliability, or completeness of content</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>Correction of defects or errors</li>
                  <li>That our services will meet your specific requirements</li>
                </ul>
                <p>
                  We do not provide financial advice. Information provided through our services is for informational purposes only and should not be considered financial, investment, or trading advice.
                </p>
              </div>
            </div>
            
            {/* Limitation of Liability */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Limitation of Liability</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  To the maximum extent permitted by applicable law, TokenRadar Labs and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                  <li>Damages resulting from the use or inability to use our services</li>
                  <li>Damages resulting from any communication or interaction with other users or third parties</li>
                </ul>
                <p>
                  This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                </p>
              </div>
            </div>
            
            {/* Governing Law */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Governing Law</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p>
                  Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
                </p>
              </div>
            </div>
            
            {/* Termination */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Termination</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including but not limited to a breach of the Terms.
                </p>
                <p>
                  Upon termination, your right to use our services will immediately cease. If you wish to terminate your account, you may simply discontinue using our services or contact us to request account deletion.
                </p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Contact Us</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="font-medium">
                  Email: legal@tokenradarlabs.com
                </p>
                <p className="font-medium">
                  Address: TokenRadar Labs, 123 Blockchain Street, Crypto City, 12345
                </p>
              </div>
            </div>
            
            {/* Last Updated */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <div className="text-slate-600 dark:text-slate-300">
                <p className="font-medium">
                  Last Updated: June 22, 2025
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 