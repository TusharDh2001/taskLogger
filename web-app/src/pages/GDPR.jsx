import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function GDPR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/auth" className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <ArrowLeft className="w-5 h-5" />
            Back to Login
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 text-slate-300">
          <h1 className="text-4xl font-bold text-white mb-8">GDPR Compliance Statement</h1>

          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Overview</h2>
              <p>
                POGO is committed to compliance with the General Data Protection Regulation (GDPR) and the protection of your personal data. This statement outlines how we handle your data in accordance with GDPR requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Lawful Basis for Processing</h2>
              <p className="mb-2">We process personal data on the following lawful bases:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Performance of Contract:</strong> Processing necessary to provide our Service</li>
                <li><strong>Consent:</strong> You have explicitly consented to the processing</li>
                <li><strong>Legal Obligation:</strong> We are required to process data by law</li>
                <li><strong>Legitimate Interests:</strong> We have legitimate business interests to process your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Data Subject Rights</h2>
              <p className="mb-2">Under GDPR, you have the following rights:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Right of Access:</strong> You can request access to your personal data</li>
                <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> You can request deletion of your data (with exceptions)</li>
                <li><strong>Right to Restrict Processing:</strong> You can restrict how we process your data</li>
                <li><strong>Right to Data Portability:</strong> You can receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> You can object to processing of your data</li>
                <li><strong>Rights Related to Automated Decision Making:</strong> You have the right not to be subject to decisions based solely on automated processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Processing and Storage</h2>
              <p className="mb-2">
                Personal data is stored in databases with security measures including encryption, access controls, and regular backups. Data is stored for the duration of your account with POGO and will be deleted upon account termination, unless we have a legal obligation to retain it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. International Data Transfers</h2>
              <p>
                If we transfer your personal data outside the EU/EEA, we ensure appropriate safeguards are in place, including Standard Contractual Clauses or Binding Corporate Rules, to ensure compliance with GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Protection Impact Assessment</h2>
              <p>
                We conduct Data Protection Impact Assessments (DPIA) for high-risk processing activities to ensure compliance with GDPR and to identify and mitigate potential risks to your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Data Breach Notification</h2>
              <p>
                In the event of a data breach that poses a risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours, as required by GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Data Protection Officer</h2>
              <p>
                If you have questions about our data processing practices or wish to exercise your GDPR rights, you can contact our Data Protection Officer at:
                <br />
                <strong>Email:</strong> dpo@pogo.app
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Supervisory Authority</h2>
              <p>
                If you believe your rights have been violated, you have the right to lodge a complaint with your local data protection authority (supervisory authority).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Cookies and Tracking</h2>
              <p className="mb-2">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings. Categories of cookies we use:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Essential Cookies:</strong> Required for the Service to function</li>
                <li><strong>Performance Cookies:</strong> Help us understand how you use the Service</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver personalized content (optional)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Consent Management</h2>
              <p>
                You can withdraw your consent at any time by accessing your account settings or contacting us directly. Withdrawal of consent will not affect the lawfulness of processing before the withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Third-Party Services</h2>
              <p>
                Some third-party services we use may also process your data. We have Data Processing Agreements in place with all third-party processors to ensure compliance with GDPR.
              </p>
            </section>

            <p className="text-xs text-slate-500 mt-8">
              <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
