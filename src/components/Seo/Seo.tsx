import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Frontend Engineer with 5+ years of React, Next.js, and TypeScript expertise. Proven track record of developing scalable web applications and productivity tools across international tech ecosystems. Specialized in creating high performance, responsive interfaces with a strong focus on Microsoft Dynamics 365, Chrome extensions, and enterprise solutions." />
      <meta name="keywords" content="web development, SEO, front-end development, React.js, next.js,Frontend Engineer, React Developer, Next.js Expert, TypeScript Specialist, Scalable Web Applications, Web Application Development, Productivity Tools, Responsive Interfaces, Microsoft Dynamics 365, Chrome Extension Developer, Enterprise Solutions Developer, High-Performance Frontend, Web Development Expert, Cross-Platform Web Applications, JavaScript Engineer, Frontend Development with React, UI/UX Development, Enterprise Frontend Engineer, International Tech Ecosystems, Web Application Performance Optimization, TypeScript Frontend Development." />

      {/* Open Graph Meta Tags for Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Eljan Simuratli" />
      <meta property="og:description" content="Frontend Engineer with 5+ years of React, Next.js, and TypeScript expertise. Proven track record of developing scalable web applications and productivity tools across international tech ecosystems. Specialized in creating high performance, responsive interfaces with a strong focus on Microsoft Dynamics 365, Chrome extensions, and enterprise solutions." />
      <meta property="og:image" content="/bg.png" />
      <meta property="og:url" content="https://simuratli.com" />

      {/* Twitter Card Meta Tags for Twitter-specific previews */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Title for Twitter" />
      <meta name="twitter:description" content="Frontend Engineer with 5+ years of React, Next.js, and TypeScript expertise. Proven track record of developing scalable web applications and productivity tools across international tech ecosystems. Specialized in creating high performance, responsive interfaces with a strong focus on Microsoft Dynamics 365, Chrome extensions, and enterprise solutions" />
      <meta name="twitter:image" content="/bg.png" />
      <meta name="twitter:creator" content="@simuratli1" />

      {/* Canonical Link for SEO (to prevent duplicate content issues) */}
      {/* <link rel="canonical" href="https://example.com/your-page-url" /> */}

      {/* Alternate Links for Multilingual Sites */}
      {/* <link rel="alternate" href="https://example.com/fr" hrefLang="fr" /> */}
      {/* <link rel="alternate" href="https://example.com/es" hrefLang="es" /> */}

      {/* Schema.org Structured Data for Rich Snippets */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Eljan Simuratli",
          "description": "Frontend Engineer with 5+ years of React, Next.js, and TypeScript expertise. Proven track record of developing scalable web applications and productivity tools across international tech ecosystems. Specialized in creating high performance, responsive interfaces with a strong focus on Microsoft Dynamics 365, Chrome extensions, and enterprise solutions",
          "url": "https://simuratli.com",
          "image": "/bg.png"
        }
        `}
      </script>

      {/* Favicon for the website */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* Mobile Optimization (Touch Icons) */}
      <link rel="apple-touch-icon" href="logo192.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export default SEO;