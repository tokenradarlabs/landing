import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - TokenRadar Labs",
  description: "Privacy policy for TokenRadar Labs - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="w-full bg-white dark:bg-slate-950">
        <section className="py-16 px-4 max-w-7xl mx-auto">
          {/* Main headline with gradient */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans text-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto text-center">
            At TokenRadar Labs, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {/* Data Collection */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Data Collection</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  We collect the following types of information when you use our services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, and contact details when you register or contact us.</li>
                  <li><strong>Usage Data:</strong> Information on how you interact with our platform, including IP address, browser type, and device information.</li>
                  <li><strong>Blockchain Information:</strong> Public wallet addresses and transaction data when you connect your wallet to our services.</li>
                  <li><strong>Cookies and Similar Technologies:</strong> Information collected through cookies and similar technologies to enhance your experience.</li>
                </ul>
              </div>
            </div>
            
            {/* Data Usage */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">How We Use Your Data</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our services</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our services</li>
                  <li>To monitor the usage of our services</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </div>
            </div>
            
            {/* Data Sharing */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Third-Party Sharing</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  We may share your information with third parties in the following situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We may engage trusted third-party companies to perform services on our behalf.</li>
                  <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your data may be transferred.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                </ul>
                <p>
                  We do not sell or rent your personal information to third parties for marketing purposes.
                </p>
              </div>
            </div>
            
            {/* User Rights */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Your Privacy Rights</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  Depending on your location, you may have the following rights regarding your data:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> You can request copies of your personal information.</li>
                  <li><strong>Rectification:</strong> You can request that we correct inaccurate information about you.</li>
                  <li><strong>Erasure:</strong> You can request that we delete your personal information in certain circumstances.</li>
                  <li><strong>Restriction of Processing:</strong> You can request that we restrict the processing of your information.</li>
                  <li><strong>Data Portability:</strong> You can request that we transfer your information to another organization or directly to you.</li>
                  <li><strong>Object to Processing:</strong> You can object to our processing of your personal information.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the information provided in the Contact section.
                </p>
              </div>
            </div>
            
            {/* Data Security */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Data Security</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its &quot;absolute&quot; security.
                </p>
                <p>
                  We implement appropriate technical and organizational measures to protect your data against unauthorized or unlawful processing, accidental loss, destruction, or damage.
                </p>
              </div>
            </div>
            
            {/* GDPR & CCPA Compliance */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">GDPR & CCPA Compliance</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  We comply with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) in our data processing activities:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We process data lawfully, fairly, and transparently.</li>
                  <li>We collect data for specified, explicit, and legitimate purposes.</li>
                  <li>We limit data collection to what is necessary.</li>
                  <li>We ensure data accuracy and keep it up to date.</li>
                  <li>We store data only as long as necessary.</li>
                  <li>We process data securely and protect against unauthorized processing, loss, or damage.</li>
                </ul>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Contact Us</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="font-medium">
                  Email: privacy@tokenradarlabs.com
                </p>
                <p className="font-medium">
                  Address: TokenRadar Labs, 123 Blockchain Street, Crypto City, 12345
                </p>
              </div>
            </div>
            
            {/* Updates to Privacy Policy */}
            <div className="bg-white dark:bg-slate-800/60 rounded-lg border shadow-md p-8">
              <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mb-4">Updates to This Policy</h2>
              <div className="text-slate-600 dark:text-slate-300 space-y-4">
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
                <p>
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
                <p className="font-medium mt-4">
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