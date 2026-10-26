/* ==========================================================================
   Interview Experiences Page - PlacementHub
   Renders user-submitted experiences from localStorage, updates company
   experience counters, displays submission alerts, and sets up interactions.
   ========================================================================== */

/**
 * Escapes HTML characters in user-provided text to prevent XSS.
 */
const escapeHtml = (value) => String(value ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

/**
 * Builds the student meta line, e.g. "Computer Science · Batch 2026 · Software Engineer".
 */
const buildMetaLine = (exp) =>
  [exp.branch, exp.batch && `Batch ${exp.batch}`, exp.role].filter(Boolean).join(' · ');

/**
 * Generates topic chips list HTML if any topics were selected.
 */
const buildTagList = (topics) => {
  if (!topics?.length) return '';
  const tags = topics.map(t => `<li class="tag">${escapeHtml(t)}</li>`).join('');
  return `<ul class="tag-list">${tags}</ul>`;
};

/**
 * Generates collapsible round breakdown HTML matching the static cards.
 */
const buildRounds = (rounds) => {
  if (!rounds?.length) return '';
  const items = rounds.map(r => `
    <li>
      <strong>${escapeHtml(r.title)}</strong>
      <span>${escapeHtml(r.detail)}</span>
    </li>
  `).join('');

  return `
    <details class="round-details">
      <summary>View round-by-round breakdown</summary>
      <ol class="round-list">${items}</ol>
    </details>
  `;
};

/**
 * Generates YouTube preview card HTML if a video link was provided.
 */
const buildVideoCard = (exp) => {
  if (!exp.videoUrl) return '';
  return `
    <a class="video-card" href="${escapeHtml(exp.videoUrl)}" target="_blank" rel="noopener">
      <span class="video-thumb"><img src="images/youtube.svg" alt="YouTube"></span>
      <span class="video-info">
        <span class="video-title">${escapeHtml(exp.videoTitle)}</span>
        <span class="video-channel"><i class="fas fa-circle-play"></i> Watch on YouTube</span>
      </span>
    </a>
  `;
};

/**
 * Generates junior advice callout HTML if provided.
 */
const buildTip = (tip) => {
  if (!tip) return '';
  return `
    <p class="experience-tip">
      <i class="fas fa-lightbulb"></i>
      <span>${escapeHtml(tip)}</span>
    </p>
  `;
};

/**
 * Assembles a complete experience card DOM element for a user submission.
 */
const buildExperienceCard = (exp) => {
  const card = document.createElement('div');
  card.className = 'experience-card user-submitted';
  card.dataset.id = exp.id;
  card.innerHTML = `
    <div class="experience-card-head">
      <span class="student-avatar">${escapeHtml(exp.initials)}</span>
      <div class="student-info">
        <h4>${escapeHtml(exp.name)}</h4>
        <p class="student-meta">${escapeHtml(buildMetaLine(exp))}</p>
      </div>
      <span class="submission-flag">Your submission</span>
      <button type="button" class="remove-submission" data-id="${escapeHtml(exp.id)}" title="Remove this submission">
        <i class="fas fa-trash-can"></i>
      </button>
    </div>
    <p class="experience-summary">${escapeHtml(exp.summary)}</p>
    ${buildTagList(exp.topics)}
    ${buildRounds(exp.rounds)}
    ${buildTip(exp.tip)}
    ${buildVideoCard(exp)}
  `;
  return card;
};

/**
 * Recalculates and updates the "N experiences" badge on each company's card.
 */
const refreshCompanyCounts = () => {
  Object.keys(ExperienceStore.COMPANIES).forEach(companyId => {
    const panel = document.getElementById(`p-${companyId}`);
    const counter = document.querySelector(`label[for="c-${companyId}"] .company-count`);
    if (panel && counter) {
      const count = panel.querySelectorAll('.experience-card').length;
      counter.textContent = `${count} ${count === 1 ? 'experience' : 'experiences'}`;
    }
  });
};

/**
 * Loads all saved submissions from localStorage and prepends them to their respective panels.
 */
const renderSavedExperiences = () => {
  ExperienceStore.getAll().forEach(exp => {
    const list = document.querySelector(`#p-${exp.company} .experience-list`);
    if (list) list.prepend(buildExperienceCard(exp));
  });
  refreshCompanyCounts();
};

/**
 * Displays a success banner and activates the company tab when redirected from the share form.
 */
const showSubmissionAlert = () => {
  const companyId = new URLSearchParams(window.location.search).get('submitted');
  if (!companyId) return;

  const company = ExperienceStore.COMPANIES[companyId];
  const alertBox = document.getElementById('submission-alert');
  if (!company || !alertBox) return;

  alertBox.innerHTML = `
    <i class="fas fa-circle-check"></i>
    <span>
      <strong>Thanks for sharing!</strong>
      Your ${escapeHtml(company.name)} experience is now live at the top of the panel below.
    </span>
  `;
  alertBox.hidden = false;

  const radio = document.getElementById(`c-${companyId}`);
  if (radio) radio.checked = true;
};

/**
 * Enables smooth scrolling to the corresponding panel when a company card is clicked.
 */
const setupCompanyScroll = () => {
  document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('click', () => {
      const inputId = card.getAttribute('for');
      if (!inputId) return;

      const panel = document.getElementById(`p-${inputId.slice(2)}`);
      if (panel) {
        requestAnimationFrame(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    });
  });
};

/**
 * Sets up click listener to delete user submissions from localStorage and DOM.
 */
const setupRemoveButtons = () => {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('.remove-submission');
    if (!button) return;

    if (confirm('Remove this experience from your browser?')) {
      ExperienceStore.remove(button.dataset.id);
      button.closest('.experience-card')?.remove();
      refreshCompanyCounts();
    }
  });
};

/**
 * Controls mobile hamburger navigation menu open/close behavior.
 */
const setupMobileNav = () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  if (!navbar || !hamburger) return;

  // Toggle nav drawer on hamburger tap
  hamburger.addEventListener('click', () => navbar.classList.toggle('nav-open'));

  // Close when tapping any navigation link
  navbar.querySelectorAll('.navbar-center a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });

  // Close when tapping outside the navbar
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) navbar.classList.remove('nav-open');
  });
};

// Initialize page functionality
renderSavedExperiences();
showSubmissionAlert();
setupRemoveButtons();
setupMobileNav();
setupCompanyScroll();
