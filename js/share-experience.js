/* Share Experience Page */

/* Validates the form, saves the submission to localStorage,
   then hands the visitor back to the Experience page. */

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

setupMobileNav();

const setupCompanyPicker = () => {
  document.querySelectorAll('.company-card').forEach(label => {
    label.addEventListener('click', (event) => {
      event.preventDefault();
 
      const input = document.getElementById(label.getAttribute('for'));
      if (!input) return;
 
      input.checked = true;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      input.focus({ preventScroll: true });
    });
  });
};
 
setupCompanyPicker();

const shareForm = document.getElementById('share-form');

/** Reads a field's trimmed value, or an empty string if it is missing. */
const readValue = (id) => {
  const field = document.getElementById(id);
  return field ? field.value.trim() : '';
};

/** Builds two-letter initials for the avatar, e.g. "Priya Singh" -> "PS". */
const buildInitials = (fullName) => {
  const parts = fullName.split(/\s+/).filter(Boolean);
  if (!parts.length) return 'AS';
  const first = parts[0].charAt(0);
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
  return (first + last).toUpperCase();
};

/** Collects the filled-in rounds, skipping any the student left blank. */
const collectRounds = () => {
  const rounds = [];

  for (let index = 1; index <= 5; index++) {
    const title = readValue(`round-title-${index}`);
    const detail = readValue(`round-detail-${index}`);

    if (title || detail) {
      rounds.push({
        title: title || `Round ${index}`,
        detail: detail || 'No details shared.'
      });
    }
  }

  return rounds;
};

/** Collects every ticked topic chip. */
const collectTopics = () => {
  const checked = document.querySelectorAll('input[name="topics"]:checked');
  return Array.from(checked).map(topic => topic.value);
};

/** Only http and https links are stored, so a saved link can never be script. */
const sanitiseUrl = (url) => {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : '';
  } catch (error) {
    return '';
  }
};

/** Shows or hides one of the inline error messages. */
const toggleError = (id, show) => {
  const message = document.getElementById(id);
  if (message) message.hidden = !show;
};

/**
 * Runs validation and reports the first problem.
 * Returns the selected company element, or null when the form is not ready.
 */
const validateForm = () => {
  const company = document.querySelector('input[name="company"]:checked');
  const consent = document.getElementById('consent');

  toggleError('company-error', !company);
  toggleError('consent-error', consent && !consent.checked);

  // The company radios are visually hidden, so the browser cannot focus them
  // to show a native message. Scroll to the picker manually instead.
  if (!company) {
    document.querySelector('.company-picker').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return null;
  }

  // Everything else can use native validation.
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

/** Turns the filled-in form into the object stored in localStorage. */
const buildExperience = (companyId) => {
  const isAnonymous = document.getElementById('anonymous').checked;
  const name = isAnonymous ? 'Anonymous Student' : readValue('name');
  const branch = readValue('branch');
  const batch = readValue('batch');
  const role = readValue('role');
  const jobType = document.querySelector('input[name="jobType"]:checked');
  const videoUrl = sanitiseUrl(readValue('video-url'));

  return {
    id: Date.now(),
    company: companyId,
    name,
    initials: isAnonymous ? 'AS' : buildInitials(readValue('name')),
    branch,
    batch,
    role,
    jobType: jobType ? jobType.value : 'Full-time',
    year: readValue('year'),
    package: readValue('package'),
    mode: readValue('mode'),
    summary: readValue('summary'),
    tip: readValue('tip'),
    topics: collectTopics(),
    rounds: collectRounds(),
    videoUrl,
    videoTitle: readValue('video-title') || 'Watch this experience on YouTube'
  };
};

if (shareForm) {
  shareForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const company = validateForm();
    if (!company) return;

    const saved = ExperienceStore.add(buildExperience(company.value));

    if (!saved) {
      alert('Your browser blocked local storage, so this experience could not be saved. Try disabling private browsing.');
      return;
    }

    // Hand off to the Experience page, which opens this company's panel
    // and highlights the new card.
    window.location.href = `experience.html?submitted=${company.value}`;
  });
}
