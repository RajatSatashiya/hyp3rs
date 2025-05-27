// src/app/privacy-policy/page.tsx

"use client"; // This directive marks the component as a Client Component

import React from "react";
import Head from "next/head";

const PrivacyPolicyPage = () => {
  const appName = "Hyp3rs";
  const serviceProvider = "Rajat Satashiya";
  const providerEmail = "rajat09satashiya@gmail.com";
  const lastEffectiveDate = "2025-05-27";
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans text-gray-800 antialiased">
      <Head>
        <title>{appName} - Privacy Policy</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* You might want to link Inter font here if not already in layout.tsx */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}
      </Head>

      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 text-center mb-10">
            Effective as of {lastEffectiveDate}
          </p>

          {/* Intro Section */}
          <section className="mb-8 border-b pb-6 border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
              Introduction
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              This privacy policy applies to the{" "}
              <span className="font-bold">{appName}</span> app (hereby referred
              to as &quot;Application&quot;) for mobile devices that was created
              by <span className="font-bold">{serviceProvider}</span> (hereby
              referred to as &quot;Service Provider&quot;) as a Free service.
              This service is intended for use &quot;AS IS&quot;.
            </p>
          </section>

          {/* Information Collection and Use */}
          <section className="mb-8 border-b pb-6 border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
              Information Collection and Use
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-2">
              The Application currently does not collect any user information
              whatsoever.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              The Application does not gather information about the location of
              your mobile device.
            </p>
          </section>

          {/* Children */}
          <section className="mb-8 border-b pb-6 border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
              Children
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              The Service Provider does not use the Application to knowingly
              solicit data from or market to children under the age of 13.
            </p>
            {/* THIS SECTION WAS HIDDEN IN YOUR ORIGINAL HTML. REVIEW CAREFULLY IF YOU NEED IT. */}
            <p className="text-base leading-relaxed text-gray-600">
              The Service Provider does not knowingly collect personally
              identifiable information from children. The Service Provider
              encourages all children to never submit any personally
              identifiable information through the Application and/or Services.
              The Service Provider encourage parents and legal guardians to
              monitor their children&apos;s Internet usage and to help enforce
              this Policy by instructing their children never to provide
              personally identifiable information through the Application and/or
              Services without their permission. If you have reason to believe
              that a child has provided personally identifiable information to
              the Service Provider through the Application and/or Services,
              please contact the Service Provider ({" "}
              <a
                href={`mailto:${providerEmail}`}
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                {providerEmail}
              </a>
              ) so that they will be able to take the necessary actions. You
              must also be at least 13 years of age to consent to the processing
              of your personally identifiable information in your country (in
              some countries we may allow your parent or guardian to do so on
              your behalf).
            </p>
          </section>

          {/* Changes */}
          <section className="mb-8 border-b pb-6 border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
              Changes
            </h2>
            <p className="text-base leading-relaxed text-gray-600 mb-4">
              This Privacy Policy may be updated from time to time for any
              reason. The Service Provider will notify you of any changes to the
              Privacy Policy by updating this page with the new Privacy Policy.
              You are advised to consult this Privacy Policy regularly for any
              changes, as continued use is deemed approval of all changes.
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              This privacy policy is effective as of {lastEffectiveDate}.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-3">
              Contact Us
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              If you have any questions regarding privacy while using the
              Application, or have questions about the practices, please contact
              the Service Provider via email at{" "}
              <a
                href={`mailto:${providerEmail}`}
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                hyp3rs-support
              </a>
              .
            </p>
          </section>

          <footer className="text-center text-gray-500 text-sm mt-8 pt-4 border-t border-gray-200">
            &copy; {new Date().getFullYear()} {serviceProvider}. All rights
            reserved.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
