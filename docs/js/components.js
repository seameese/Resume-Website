/**
 * Modular Component Renderers
 * Pure functions converting RESUME_DATA into semantic, accessible HTML.
 * Privacy-hardened: Email and Phone numbers omitted to prevent web scraping.
 * Resume PDF download/viewer disabled.
 */

import { RESUME_DATA } from './data.js';

// SVG Icon Helpers
const ICONS = {
  linkedin: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  mapPin: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  arrowDown: `<svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>`,
  external: `<svg class="btn-icon" style="width:12px;height:12px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  menu: `<svg style="width:24px;height:24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg style="width:24px;height:24px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`
};

export function renderHeader() {
  const { profile } = RESUME_DATA;
  return `
    <header class="site-header" role="banner">
      <div id="scroll-progress" aria-hidden="true"></div>
      <div class="container header-inner">
        <a href="#hero" class="brand" aria-label="Seamus R. Howrigan - Home">
          <span class="brand-monogram">SH</span>
          <div class="brand-info">
            <span class="brand-name">${profile.name}</span>
            <span class="brand-role">${profile.primaryTitle}</span>
          </div>
        </a>

        <nav class="nav-menu" id="primary-navigation" aria-label="Primary Navigation">
          <a href="#overview" class="nav-link">Overview</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#skills" class="nav-link">Software &amp; Tools</a>
          <a href="#education" class="nav-link">Education</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="header-actions">
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="View LinkedIn Profile">
            ${ICONS.linkedin}
            <span>LinkedIn</span>
          </a>
          <button class="mobile-toggle" id="mobile-toggle" aria-expanded="false" aria-controls="primary-navigation" aria-label="Toggle navigation menu">
            ${ICONS.menu}
          </button>
        </div>
      </div>
    </header>
  `;
}

export function renderHero() {
  const { profile } = RESUME_DATA;
  return `
    <section id="hero" class="hero" aria-label="Introduction">
      <div class="container hero-grid">
        <div class="hero-main">
          <div class="hero-badge">
            <span class="hero-badge-dot" aria-hidden="true"></span>
            <span class="hero-badge-text">
              <span class="badge-role">${profile.currentRole}</span>
              <span class="badge-sep">&bull;</span>
              <span class="badge-company">${profile.currentCompany}</span>
            </span>
          </div>

          <h1 class="hero-title">${profile.name}</h1>
          <p class="hero-subtitle">${profile.primaryTitle} &amp; Mechanical Engineer</p>

          <p class="hero-lead">
            ${profile.summary}
          </p>

          <div class="hero-actions">
            <a href="#experience" class="btn btn-primary">
              <span>Explore Experience</span>
              ${ICONS.arrowDown}
            </a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
              ${ICONS.linkedin}
              <span>Connect on LinkedIn</span>
            </a>
            <a href="#contact" class="btn btn-text">
              <span>Get in Touch &rarr;</span>
            </a>
          </div>
        </div>

        <aside class="hero-aside" aria-label="Professional Details">
          <h2 class="aside-title">Some Basic Info</h2>
          <div class="meta-list">
            <div class="meta-item">
              <span class="meta-label">Location</span>
              <span class="meta-value">${profile.location}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Education</span>
              <span class="meta-value">B.S. Mechanical Engineering<br><span style="font-weight:400;color:var(--color-text-muted);">University of Vermont &bull; May 2026</span></span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Current Role</span>
              <span class="meta-value">${profile.currentRole}<br><span style="font-weight:400;color:var(--color-text-muted);">${profile.currentCompany}</span></span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Professional Profile</span>
              <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="meta-link">
                ${profile.linkedinDisplay} ${ICONS.external}
              </a>
            </div>
<!--
          </div>
          <div class="meta-provenance-tag">
            <strong>Verified Record:</strong><br>
            Content derived strictly from original engineering credentials. Direct contact managed via verified professional network.
          </div>
--!>
        </aside>
      </div>
    </section>
  `;
}

export function renderOverview() {
  const { skills } = RESUME_DATA;
  return `
    <section id="overview" class="section" aria-labelledby="overview-heading">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Executive Overview</span>
          <h2 id="overview-heading" class="section-title">Core Engineering Capabilities</h2>
          <p class="section-description">
            Specific areas of demonstrated laboratory and engineering competency drawn directly from professional experience and research at Flexaseal, AIAA, and Beta Technologies.
          </p>
        </div>

        <div class="competency-grid">
          ${skills.technicalDomains.map(domain => `
            <article class="competency-card">
              <div class="competency-header">
                <h3 class="competency-title">${domain.title}</h3>
              </div>
              <p class="competency-body">${domain.detail}</p>
              <div style="margin-top: var(--space-sm); font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-bronze);">
                &bull; Source: ${domain.sourceReference}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderExperience() {
  const { experience } = RESUME_DATA;

  return `
    <section id="experience" class="section" aria-labelledby="experience-heading">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Career (Almost) Chronology</span>
          <h2 id="experience-heading" class="section-title">Professional Experience</h2>
          <p class="section-description">
            Hands-on R&amp;D engineering, aerospace flight testing, instructional leadership, and lifelong operational responsibilities.
          </p>
        </div>

        <div class="experience-filters" role="group" aria-label="Filter experience by category">
          <button class="filter-btn active" data-filter="all">All Roles (${experience.length})</button>
          <button class="filter-btn" data-filter="engineering">Engineering &amp; R&amp;D</button>
          <button class="filter-btn" data-filter="leadership">Aerospace &amp; Leadership</button>
          <button class="filter-btn" data-filter="academic">Academic &amp; Instruction</button>
          <button class="filter-btn" data-filter="operations">Operations &amp; Service</button>
        </div>

        <div class="timeline" role="list">
          ${experience.map((item) => `
            <article 
              class="experience-card ${item.period.includes('Present') ? 'is-current' : ''}" 
              data-category="${item.category}" 
              id="${item.id}"
              role="listitem"
            >
              <div class="timeline-node" aria-hidden="true">
                <div class="timeline-marker"></div>
              </div>

              <div class="timeline-content">
                <header class="role-header">
                  <div class="role-top">
                    <h3 class="role-title">${item.role}</h3>
                    <span class="role-period">${item.period}</span>
                  </div>
                  <div class="role-org-row">
                    <span class="role-org">${item.organization}</span>
                    <span class="role-location">${item.location}</span>
                  </div>
                </header>

                <ul class="role-bullets">
                  ${item.responsibilities.map(bullet => `
                    <li class="bullet-item">${bullet}</li>
                  `).join('')}
                </ul>

                <div class="role-tags" aria-label="Role competencies">
                  ${item.highlights.map(tag => `
                    <span class="role-tag">${tag}</span>
                  `).join('')}
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

export function renderSkills() {
  const { skills } = RESUME_DATA;
  return `
    <section id="skills" class="section" aria-labelledby="skills-heading">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Technical Toolkit</span>
          <h2 id="skills-heading" class="section-title">${skills.sectionTitle}</h2>
          <p class="section-description">
            Software, simulation packages, data science libraries, and CAD suites explicitly cited in the resume.
          </p>
        </div>

        <div class="skills-editorial-box">
          <h3 class="skills-group-title">Software, Simulation &amp; Programming Languages</h3>
          <div class="tools-grid">
            ${skills.tools.map(tool => `
              <div class="tool-badge">
                <span class="tool-name">${tool.name}</span>
                <span class="tool-category">${tool.category}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderEducation() {
  const { education } = RESUME_DATA;
  const edu = education[0];
  return `
    <section id="education" class="section" aria-labelledby="education-heading">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Academic Background</span>
          <h2 id="education-heading" class="section-title">Education</h2>
          <p class="section-description">
            Foundational mechanical engineering degree and advanced theoretical coursework.
          </p>
        </div>

        <div class="education-card">
          <div class="edu-top-row">
            <h3 class="edu-institution">${edu.institution}</h3>
            <span class="edu-location-date">${edu.location} &bull; ${edu.graduationDate}</span>
          </div>
          <div class="edu-degree">${edu.degree}</div>

          <div class="coursework-box">
            <h4 class="coursework-title">Relevant Coursework</h4>
            <div class="coursework-chips">
              ${edu.relevantCoursework.map(course => `
                <span class="coursework-chip">${course}</span>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderContact() {
  const { profile } = RESUME_DATA;
  return `
    <section id="contact" class="contact-section" aria-labelledby="contact-heading">
      <div class="container">
        <div class="contact-card">
          <div class="section-header" style="margin-bottom: var(--space-xl);">
            <span class="section-label">Inquiries &amp; Collaboration</span>
            <h2 id="contact-heading" class="section-title">Contact &amp; Connect</h2>
            <p class="section-description">
              Professional inquiries, technical collaboration, and opportunities.
            </p>
          </div>

          <div class="contact-grid">
            <div class="contact-channels">
              <div class="channel-item">
                <div class="channel-icon-wrap">${ICONS.linkedin}</div>
                <div class="channel-detail">
                  <span class="channel-label">Professional Profile</span>
                  <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="channel-value channel-link">
                    ${profile.linkedinDisplay} ${ICONS.external}
                  </a>
                </div>
              </div>

              <div class="channel-item">
                <div class="channel-icon-wrap">${ICONS.mapPin}</div>
                <div class="channel-detail">
                  <span class="channel-label">Location</span>
                  <span class="channel-value">${profile.location}</span>
                </div>
              </div>
            </div>

            <div class="contact-actions-box">
              <h3 style="font-size: var(--text-lg); font-weight: 600; color: var(--color-text-primary);">Professional Inquiries</h3>
              <p class="contact-note">
                Please reach out on LinkedIn where I'd be happy to connect and provide my resume and other forms of contact.
              </p>

              <div>
                <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                  ${ICONS.linkedin}
                  <span>Connect on LinkedIn</span>
                  ${ICONS.external}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderFooter() {
  const { profile } = RESUME_DATA;
  return `
    <footer class="site-footer" role="contentinfo">
      <div class="container footer-inner">
        <div class="footer-top">
          <div>
            <div class="brand-name" style="font-size: var(--text-xl);">${profile.name}</div>
            <div style="font-size: var(--text-sm); color: var(--color-text-muted); margin-top: 4px;">
              ${profile.currentRole} &bull; ${profile.location}
            </div>
          </div>

          <a href="#hero" class="back-to-top">
            <span>Back to top &uarr;</span>
          </a>
        </div>

        <div class="footer-bottom">
          <div>
            100% Resume-Driven Editorial Portfolio &bull; Colchester, VT
          </div>
          <div>
            &copy; ${new Date().getFullYear()} ${profile.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  `;
}
