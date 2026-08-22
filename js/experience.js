/* Experience Page */

/** Escapes user text before it goes anywhere near innerHTML. */
const escapeHtml = (value) => String(value === undefined || value === null ? '' : value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

/** Builds the "Computer Science · Batch 2026 · Software Engineer" line. */
const buildMetaLine = (experience) => {
  const parts = [];
  if (experience.branch) parts.push(experience.branch);
  if (experience.batch) parts.push(`Batch ${experience.batch}`);
  if (experience.role) parts.push(experience.role);
  return parts.join(' · ');
};

/** Renders the topic chips, or nothing when no topic was picked. */
const buildTagList = (topics) => {
  if (!topics || !topics.length) return '';
  const items = topics.map(topic => `<li class="tag">${escapeHtml(topic)}</li>`).join('');
  return `<ul class="tag-list">${items}</ul>`;
};

/** Renders the collapsible round breakdown, matching the static cards. */
const buildRounds = (rounds) => {
  if (!rounds || !rounds.length) return '';

  const items = rounds.map(round => `
    <li>
      <strong>${escapeHtml(round.title)}</strong>
      <span>${escapeHtml(round.detail)}</span>
    </li>`).join('');

  return `
    <details class="round-details">
      <summary>View round-by-round breakdown</summary>
      <ol class="round-list">${items}</ol>
    </details>`;
};

/** Renders the YouTube card, or nothing when no link was given. */
const buildVideoCard = (experience) => {
  if (!experience.videoUrl) return '';

  return `
    <a class="video-card" href="${escapeHtml(experience.videoUrl)}" target="_blank" rel="noopener">
      <span class="video-thumb"><img src="images/youtube.svg" alt="YouTube"></span>
      <span class="video-info">
        <span class="video-title">${escapeHtml(experience.videoTitle)}</span>
        <span class="video-channel"><i class="fas fa-circle-play"></i> Watch on YouTube</span>
      </span>
    </a>`;
};

/** Renders the optional "tip for juniors" callout. */
const buildTip = (tip) => {
  if (!tip) return '';
  return `
    <p class="experience-tip">
      <i class="fas fa-lightbulb"></i>
      <span>${escapeHtml(tip)}</span>
    </p>`;
};

/** Builds one complete experience card element. */
const buildExperienceCard = (experience) => {
  const card = document.createElement('div');
  card.className = 'experience-card user-submitted';
  card.dataset.id = experience.id;

  card.innerHTML = `
    <div class="experience-card-head">
      <span class="student-avatar">${escapeHtml(experience.initials)}</span>
      <div class="student-info">
        <h4>${escapeHtml(experience.name)}</h4>
        <p class="student-meta">${escapeHtml(buildMetaLine(experience))}</p>
      </div>
      <span class="submission-flag">Your submission</span>
      <button type="button" class="remove-submission" data-id="${escapeHtml(experience.id)}" title="Remove this submission">
        <i class="fas fa-trash-can"></i>
      </button>
    </div>
    <p class="experience-summary">${escapeHtml(experience.summary)}</p>
    ${buildTagList(experience.topics)}
    ${buildRounds(experience.rounds)}
    ${buildTip(experience.tip)}
    ${buildVideoCard(experience)}`;

  return card;
};

/** Rewrites each company's "N experiences" label from what is on screen. */
const refreshCompanyCounts = () => {
  Object.keys(ExperienceStore.COMPANIES).forEach(companyId => {
    const panel = document.getElementById(`p-${companyId}`);
    const counter = document.querySelector(`label[for="c-${companyId}"] .company-count`);
    if (!panel || !counter) return;

    const total = panel.querySelectorAll('.experience-card').length;
    counter.textContent = `${total} ${total === 1 ? 'experience' : 'experiences'}`;
  });
};

/** Puts every saved submission at the top of its company panel. */
const renderSavedExperiences = () => {
  ExperienceStore.getAll().forEach(experience => {
    const panel = document.getElementById(`p-${experience.company}`);
    if (!panel) return;

    const list = panel.querySelector('.experience-list');
    if (list) list.prepend(buildExperienceCard(experience));
  });

  refreshCompanyCounts();
};

/** Shows the success message after a redirect from the share form. */
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
    </span>`;
  alertBox.hidden = false;

  // Open that company's tab so the new card is immediately visible.
  const radio = document.getElementById(`c-${companyId}`);
  if (radio) radio.checked = true;
};

/** Opens/closes the mobile nav menu when the hamburger icon is tapped. */
const setupMobileNav = () => {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  if (!navbar || !hamburger) return;

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
  });

  // Tapping a link should close the menu instead of leaving it open
  // behind the page it navigates to.
  navbar.querySelectorAll('.navbar-center a').forEach(link => {
    link.addEventListener('click', () => navbar.classList.remove('nav-open'));
  });

  // Tapping anywhere outside the menu closes it too.
  document.addEventListener('click', (event) => {
    if (navbar.classList.contains('nav-open') && !navbar.contains(event.target)) {
      navbar.classList.remove('nav-open');
    }
  });
};

/** Scrolls the matching experience panel into view whenever a company card is picked. */
const setupCompanyScroll = () => {
  document.querySelectorAll('.company-card').forEach(card => {
    card.addEventListener('click', () => {
      const companyId = card.getAttribute('for');
      if (!companyId) return;

      const panel = document.getElementById(`p-${companyId.slice(2)}`);
      if (!panel) return;

      // Wait a frame so the radio's :checked state (and the CSS panel
      // swap it drives) has applied before we scroll to it.
      requestAnimationFrame(() => panel.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    });
  });
};

/** Lets a visitor delete a submission they made on this device. */
const setupRemoveButtons = () => {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.remove-submission');
    if (!button) return;

    if (!confirm('Remove this experience from your browser?')) return;

    ExperienceStore.remove(button.dataset.id);
    const card = button.closest('.experience-card');
    if (card) card.remove();
    refreshCompanyCounts();
  });
};

renderSavedExperiences();
showSubmissionAlert();
setupRemoveButtons();
setupMobileNav();
setupCompanyScroll();
