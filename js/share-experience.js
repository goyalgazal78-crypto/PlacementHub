/* ==========================================================================
   Share Experience - PlacementHub
   Handles form validation, collecting responses, saving them to localStorage,
   and redirecting back to the experience explorer page.
   ========================================================================== */

const shareForm = document.getElementById('share-form');

/**
 * Reads and trims an input field's value by ID.
 * Returns an empty string if element is not found or empty.
 */
const readValue = (id) => document.getElementById(id)?.value.trim() || '';

/**
 * Builds initials for the student's avatar.
 * e.g., "Priya Singh" -> "PS", "Amit" -> "A", "" -> "AS"
 */
const buildInitials = (fullName) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'AS';
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
};

/**
 * Collects interview rounds (1 through 5), skipping any left blank.
 */
const collectRounds = () => {
  const rounds = [];
  for (let i = 1; i <= 5; i++) {
    const title = readValue(`round-title-${i}`);
    const detail = readValue(`round-detail-${i}`);

    if (title || detail) {
      rounds.push({
        title: title || `Round ${i}`,
        detail: detail || 'No details shared.'
      });
    }
  }
  return rounds;
};

/**
 * Collects all checked topic tags (e.g. Arrays, System Design).
 */
const collectTopics = () =>
  Array.from(document.querySelectorAll('input[name="topics"]:checked'), el => el.value);

/**
 * Validates that a URL is a valid http or https web address.
 */
const sanitiseUrl = (url) => {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : '';
  } catch {
    return '';
  }
};

/**
 * Shows or hides an inline error message element.
 */
const toggleError = (id, show) => {
  const el = document.getElementById(id);
  if (el) el.hidden = !show;
};

/**
 * Validates company selection, consent checkbox, and native form fields.
 * Returns the checked company input element on success, or null if invalid.
 */
const validateForm = () => {
  const company = document.querySelector('input[name="company"]:checked');
  const consent = document.getElementById('consent');

  toggleError('company-error', !company);
  toggleError('consent-error', consent && !consent.checked);

  // If no company selected, smoothly scroll up to the picker
  if (!company) {
    document.querySelector('.company-picker')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return null;
  }

  // Trigger browser's native field validation (required, email, url, etc.)
  if (!shareForm.checkValidity()) {
    const firstInvalid = shareForm.querySelector(':invalid');
    if (firstInvalid && firstInvalid.type !== 'radio') {
      firstInvalid.focus();
      firstInvalid.reportValidity();
    }
    return null;
  }

  return company;
};

/**
 * Bundles the form fields into an experience object for saving.
 */
const buildExperience = (companyId) => {
  const isAnonymous = document.getElementById('anonymous')?.checked;
  const rawName = readValue('name');

  return {
    id: Date.now(),
    company: companyId,
    name: isAnonymous ? 'Anonymous Student' : rawName,
    initials: isAnonymous ? 'AS' : buildInitials(rawName),
    branch: readValue('branch'),
    batch: readValue('batch'),
    role: readValue('role'),
    jobType: document.querySelector('input[name="jobType"]:checked')?.value || 'Full-time',
    year: readValue('year'),
    package: readValue('package'),
    mode: readValue('mode'),
    summary: readValue('summary'),
    tip: readValue('tip'),
    topics: collectTopics(),
    rounds: collectRounds(),
    videoUrl: sanitiseUrl(readValue('video-url')),
    videoTitle: readValue('video-title') || 'Watch this experience on YouTube'
  };
};

/**
 * Enables clicking company card labels to reliably check the underlying radio.
 */
const setupCompanyPicker = () => {
  document.querySelectorAll('.company-card').forEach(label => {
    label.addEventListener('click', (e) => {
      e.preventDefault();
      const radio = document.getElementById(label.getAttribute('for'));
      if (radio) {
        radio.checked = true;
        radio.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
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

// Form submission handler
if (shareForm) {
  shareForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const company = validateForm();
    if (!company) return;

    const saved = ExperienceStore.add(buildExperience(company.value));
    if (!saved) {
      alert('Your browser blocked local storage, so this experience could not be saved. Try disabling private browsing.');
      return;
    }

    // Redirect to the experience explorer and select the submitted company
    window.location.href = `experience.html?submitted=${company.value}`;
  });
}

// Initialize listeners
setupMobileNav();
setupCompanyPicker();

// Initialize listeners
setupMobileNav();
setupCompanyPicker();

