import React from 'react';
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import PropTypes from 'prop-types';
import './_globals/globals.scss';

export const metadata = {
  title: "Tech Leads Onboarding 2025-2026",
  description: "Tech Lead Repo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
