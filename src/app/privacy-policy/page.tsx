// src/app/privacy-policy/page.tsx

"use client"; // This directive marks the component as a Client Component

import React from "react";
import Head from "next/head"; // For setting page title and meta tags
// For web, use standard <a> tag or window.open

// --- Correction for Web: Remove React Native's Linking. ---
// For a Next.js (web) app, you handle links with standard HTML <a> tags.
// If you truly need programmatic opening, you'd use window.open.
// I will remove the import and simplify the email handling.

const PrivacyPolicyPage: React.FC = () => {
  // Hardcode the values directly within the component for a static page
  const lastUpdatedDate = "May 27, 2025";
  const contactEmail = "rajat09satashiya@gmail.com"; // Your actual support email
  const appName = "Hyp3rs";
  const companyName = "Hyp3rs Team";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 font-inter text-gray-800 antialiased">
      {/* Head component for SEO and page title */}
      <Head>
        <title>{appName} - Privacy Policy</title>
        <meta
          name="description"
          content={`Privacy Policy for the ${appName} mobile application.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Inter font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:p-10 p-6">
          <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-6 tracking-tight">
            {appName} App - Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 text-center mb-10">
            <span className="font-semibold">Last updated:</span>{" "}
            {lastUpdatedDate}
          </p>

          {/* Section 1: Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              1. Introduction
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              This Privacy Policy describes how the {appName} mobile application
              (&quot;App&quot;) handles information. This App is currently a{" "}
              <span className="font-bold text-indigo-600">
                mock application
              </span>{" "}
              designed for demonstration purposes only. It is in the early
              ideation and development phase.
            </p>
          </section>

          {/* Section 2: Data Collection and Use */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              2. Data Collection and Use
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 mb-4">
              As of its current version, the {appName} mock application{" "}
              <span className="font-bold text-red-500">
                does not collect, store, process, or transmit
              </span>{" "}
              any personal data or any other information from its users.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              The App does not use cookies, trackers, or any third-party
              services that collect user data.
            </p>
          </section>

          {/* Section 3: Changes to This Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              3. Changes to This Privacy Policy
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          {/* Section 4: Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              4. Contact Us
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              If you have any questions about this Privacy Policy, please
              contact us at:{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                Support Mail
              </a>
              .
            </p>
          </section>

          <footer className="text-center text-gray-500 text-sm mt-12 pt-6 border-t border-gray-200">
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </footer>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
