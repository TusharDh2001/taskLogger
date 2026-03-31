import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Welcome to POGO ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-2">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Personal Data:</strong> Name, email address, phone number, and password</li>
                <li><strong>Task Data:</strong> Tasks, reminders, and calendars you create</li>
                <li><strong>Device Information:</strong> Device type, operating system, and device identifiers</li>
                <li><strong>Usage Data:</strong> How you interact with our application</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Use of Your Information</h2>
              <p className="mb-2">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Create and manage your user account</li>
                <li>Process your tasks and reminders</li>
                <li>Generate invoices and receive payments</li>
                <li>Improve our services and develop new features</li>
                <li>Communicate with you about updates and changes</li>
                <li>Prevent fraudulent transactions and protect against malicious activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Disclosure of Your Information</h2>
              <p className="mb-2">We may share information we have collected about you in certain situations:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect our rights</li>
                <li><strong>Service Providers:</strong> We may share data with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, bankruptcy, or other business transaction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
              <p>
                We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. The retention period may vary depending on the context of the processing and our legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Your Privacy Rights</h2>
              <p className="mb-2">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure ("right to be forgotten")</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br />
                <strong>Email:</strong> privacy@pogo.app
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes to our practices, technology, legal requirements, or other factors. We will notify you of any material changes by updating the effective date of this policy.
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
