import React from 'react';

import LandingPage from '../components/LandingPage/LandingPage';

export default function Home() {
  const baseClass = 'jsn-lmr';
  const headerClass = `${baseClass}-header`;
  const footerClass = `${baseClass}-footer`;

  return (
    <div className={`${baseClass}`}>
      <header className={headerClass}>
        <div>Coming Soon...</div>
      </header>
      <LandingPage />
      <footer className={footerClass}>
        <span className={`${footerClass}-text`}>
          © 2021 Jason Lamar
        </span>
      </footer>
    </div>
  );
}
