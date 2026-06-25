import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const sections = [


  {
    title: 'Fusion Resources',
    image: 'img/icons/icon_main_head_big.png',
    links: [
    ],
  },
  {
    title: 'Manuals and Learning',
    image: 'img/icons/icon_main_head_learning.png',
    links: [
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'Fusion under Linux', href: '/docs/linux/fusion-under-linux' },
      { label: 'Fusion Manual', href: 'http://manual.vfxpedia.com/' },
      { label: 'Tips and Techniques', href: '/docs/tips-and-techniques' },
      { label: 'FAQ', href: '/docs/faq' },
      { label: 'System Administrators Guide to Fusion', href: '/docs/system-administrators-guide' },
      { label: 'Video Tutorials', href: '/docs/video-tutorials' },
    ],
  },
  {
    title: 'Tools and Examples',
    image: 'img/icons/icon_main_head_toolsandexamples.png',
    links: [
      { label: 'Comps', href: '/docs/comps' },
      { label: 'Settings and Macros', href: '/docs/settings-and-macros' },
      { label: 'Useful Scripts', href: '/docs/useful-scripts' },
      { label: 'Simple Expressions', href: '/docs/simple-expressions' },
      { label: 'Third Party Fuses', href: '/docs/third-party-fuses' },
      { label: 'Plugins', href: '/docs/plugins' },
    ],
  },
  {
    title: 'Developer\'s Corner',
    image: 'img/icons/icon_main_head_developer.png',
    links: [
      { label: 'Scripting Manual', href: '/docs/script' },
      { label: 'Fusion Classes', href: '/docs/script/reference/applications/fusion/classes' },
      { label: 'Fuses & Script Plugins', href: '/docs/script/reference/applications/fuse' },
    ],
  },
    {
    title: 'Feedback',
    image: 'img/icons/icon_main_head_feedback.png',
    links: [
      { label: 'Wishlist', href: '/docs/wishlist' },
      { label: 'Bug Reports', href: '/docs/bug-reports' },
    ],
  },
  {
    title: 'External Resources',
    image: 'img/icons/icon_main_head_externalresources.png',
    links: [
      { label: 'Community Portal', href: '/docs/community-portal' },
      { label: 'Eyeon Interviews', href: '/docs/eyeon-interviews' },
      { label: 'Articles & Case Studies', href: '/docs/articles-and-case-studies' },
    ],
  },
];

export default function Home() {
  return (
    <Layout
      title="VFXPedia"
      description="A central resource for visual effects artists">
      <main className="vfx-main-page">
        <div className="vfx-hero">
          <h1>Welcome to VFXPedia</h1>
          <p>A central resource for visual effects artists</p>
        </div>
        <div className="vfx-sections-grid">
          {sections.map((section, idx) => (
            <div key={idx} className="vfx-section-card">
              <img src={useBaseUrl(section.image)} alt={section.title} className="vfx-section-icon" />
              <ul>
                {section.links.map((link, i) => (
                  <li key={i}>
                    {link.href.startsWith('http') ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                    ) : (
                      <Link to={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
