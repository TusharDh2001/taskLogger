import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the POGO application ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. License to Use</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license to use our application for your personal or commercial use, subject to the restrictions in these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Provide accurate and complete information during registration</li>
                <li>Maintain the confidentiality of your password</li>
                <li>Accept all risks associated with unauthorized access to your account</li>
                <li>Not use the Service for any illegal or unauthorized purpose</li>
                <li>Not violate any applicable laws or regulations</li>
                <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Acceptable Use Policy</h2>
              <p className="mb-2">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Harass, abuse, or threaten others</li>
                <li>Post or publish obscene or abusive material</li>
                <li>Send unsolicited advertising or spam</li>
                <li>Engage in phishing or attempt to obtain passwords or private information</li>
                <li>Upload viruses or malicious code</li>
                <li>Circumvent security or authentication measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property Rights</h2>
              <p>
                The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by POGO, its licensors, or other providers of such material and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. User Content</h2>
              <p className="mb-2">
                You retain ownership of any content you upload to the Service. By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, and display such content. You represent and warrant that you own or have the necessary rights to the content you upload.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
              <p className="mb-2">
                TO THE FULLEST EXTENT PERMISSIBLE BY LAW, IN NO EVENT SHALL POGO, ITS OPERATORS, AFFILIATES OR AGENTS, NOR THEIR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR REPRESENTATIVES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST DATA, OR LOSS OF USE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Disclaimer of Warranties</h2>
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS SERVICE OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED ON THIS SERVICE.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless POGO, its officers, directors, employees, agents, and successors from and against any and all losses, damages, liabilities, and expenses (including attorney's fees) arising out of your use of the Service or violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">10. Termination</h2>
              <p>
                We reserve the right to terminate your account and access to the Service at any time, in our sole discretion, for any reason, including if we believe you have violated these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Your continued use of the Service following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">12. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which POGO is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">13. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                <strong>Email:</strong> support@pogo.app
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
