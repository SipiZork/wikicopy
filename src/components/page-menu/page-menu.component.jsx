import React from 'react'

import './page-menu.styles.scss'

const PageMenu = () => (
  <aside className="page-menu">
    <div className="logo">
      <img src="https://en.wikipedia.org/static/images/project-logos/enwiki.png" alt="logo" />
    </div>
    <div className="menu-items">
      <a href="http://localhost:3000">Main page</a>
      <a href="http://localhost:3000">Contents</a>
      <a href="http://localhost:3000">Featured content</a>
      <a href="http://localhost:3000">Current events</a>
      <a href="http://localhost:3000">Random article</a>
      <a href="http://localhost:3000">Donate to Wikipedia</a>
      <a href="http://localhost:3000">Wikipedia store</a>
      <span className="menu-sub-title">Interaction</span>
      <a href="http://localhost:3000">Help</a>
      <a href="http://localhost:3000">About Wikipedia</a>
      <a href="http://localhost:3000">Community Portal</a>
      <a href="http://localhost:3000">Recent changes</a>
      <a href="http://localhost:3000">Contact page</a>
      <span className="menu-sub-title">Tools</span>
      <a href="http://localhost:3000">What links here</a>
      <a href="http://localhost:3000">Related changes</a>
      <a href="http://localhost:3000">Upload file</a>
      <a href="http://localhost:3000">Special pages</a>
      <a href="http://localhost:3000">Permanent link</a>
      <a href="http://localhost:3000">Page information</a>
      <a href="http://localhost:3000">Wikidata item</a>
      <a href="http://localhost:3000">Cite this page</a>
      <span className="menu-sub-title">Print/export</span>
      <a href="http://localhost:3000">Download as PDF</a>
      <a href="http://localhost:3000">Printable version</a>
      <span className="menu-sub-title">Languages</span>
      <a href="http://localhost:3000">Español</a>
    </div>
  </aside>
)

export default PageMenu