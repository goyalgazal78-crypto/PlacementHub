/* Experience Store */

/* (Shared localStorage layer for the Experience and Share Experience pages.Everything lives in the visitor's own browser — there is no server. Submissions are visible only on the device and browser
that created them.) */

const ExperienceStore = (() => {
  const STORAGE_KEY = 'placementhub_experiences';

  // Maps a company id (the radio value) to its display name and logo.
  const COMPANIES = {
    google: { name: 'Google', logo: 'images/companies/google.svg' },
    microsoft: { name: 'Microsoft', logo: 'images/companies/microsoft.svg' },
    amazon: { name: 'Amazon', logo: 'images/companies/amazon.svg' },
    adobe: { name: 'Adobe', logo: 'images/companies/adobe.svg' },
    infosys: { name: 'Infosys', logo: 'images/companies/infosys.svg' },
    tcs: { name: 'TCS', logo: 'images/companies/tcs.svg' },
    accenture: { name: 'Accenture', logo: 'images/companies/accenture.svg' },
    wipro: { name: 'Wipro', logo: 'images/companies/wipro.svg' },
    oracle: { name: 'Oracle', logo: 'images/companies/oracle.svg' },
    capgemini: { name: 'Capgemini', logo: 'images/companies/capgemini.svg' },
    'goldman-sachs': { name: 'Goldman Sachs', logo: 'images/companies/goldman-sachs.svg' },
    'american-express': { name: 'American Express', logo: 'images/companies/american-express.svg' },
    'jp-morgan': { name: 'J.P. Morgan', logo: 'images/companies/jp-morgan.svg' },
    cisco: { name: 'Cisco', logo: 'images/companies/cisco.svg' },
    atlassian: { name: 'Atlassian', logo: 'images/companies/atlassian.svg' },
    flipkart: { name: 'Flipkart', logo: 'images/companies/flipkart.svg' },
    zomato: { name: 'Zomato', logo: 'images/companies/zomato.svg' },
    linkedin: { name: 'LinkedIn', logo: 'images/companies/linkedin.svg' },
    paypal: { name: 'PayPal', logo: 'images/companies/paypal.svg' },
    blinkit: { name: 'Blinkit', logo: 'images/companies/blinkit.svg' },
    meesho: { name: 'Meesho', logo: 'images/companies/meesho.svg' },
    cognizant: { name: 'Cognizant', logo: 'images/companies/cognizant.svg' }
  };

  /**
   * Reads every saved experience.
   * Returns an empty array if storage is unavailable or corrupted,
   * so a bad value can never break the page.
   */
  const getAll = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.warn('Could not read saved experiences:', error);
      return [];
    }
  };

  /** Writes the full list back to storage. */
  const writeAll = (experiences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(experiences));
      return true;
    } catch (error) {
      console.warn('Could not save experience:', error);
      return false;
    }
  };

  /** Appends one experience and returns whether it was stored. */
  const add = (experience) => {
    const experiences = getAll();
    experiences.push(experience);
    return writeAll(experiences);
  };

  /** Deletes one experience by its id. */
  const remove = (id) => {
    const remaining = getAll().filter(item => String(item.id) !== String(id));
    return writeAll(remaining);
  };

  /** Returns only the experiences saved for one company. */
  const getByCompany = (companyId) =>
    getAll().filter(item => item.company === companyId);

  return { COMPANIES, getAll, getByCompany, add, remove };
})();
