/* ===========================
   Shared Save/Load Functionality
=========================== */

function loadSavedProblems() {
  try {
    const container = document.getElementById('saved-list');
    if (!container) {
      console.error('❌ Container not found!');
      return;
    }

    const savedProblems = JSON.parse(localStorage.getItem('savedProblems')) || [];
    console.log('📌 Loaded from localStorage:', savedProblems);

    if (savedProblems.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">
            <i class="fas fa-bookmark"></i>
          </div>
          <h3>No Saved Problems Yet</h3>
          <p>Go to the DSA Sheet and bookmark problems you want to save!</p>
        </div>
      `;
      console.log('⚠️ No saved problems found');
      return;
    }

    let html = '';
    savedProblems.forEach((problem, index) => {
      const difficulty = (problem.difficulty || 'medium').toLowerCase();
      html += `
        <div class="saved-item" data-difficulty="${difficulty}">
          <div class="saved-info">
            <div class="saved-problem-name">${problem.name}</div>
            <div class="saved-meta">
              <span class="saved-difficulty difficulty-${difficulty}">
                ${(problem.difficulty || 'MEDIUM').toUpperCase()}
              </span>
              <span><i class="fas fa-code"></i> Practice on LeetCode</span>
            </div>
          </div>
          <div class="saved-actions">
            <button class="action-icon" title="View Solution" onclick="viewSolution('${problem.name.replace(/'/g, "\\'")}')">
              <i class="fas fa-eye"></i>
            </button>
            <button class="action-icon" title="Remove" onclick="removeSavedProblem(${index})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    console.log('✅ Displayed', savedProblems.length, 'problems');
  } catch (error) {
    console.error('❌ Error loading problems:', error);
  }
}

function removeSavedProblem(index) {
  try {
    let savedProblems = JSON.parse(localStorage.getItem('savedProblems')) || [];
    const removed = savedProblems[index];
    savedProblems.splice(index, 1);
    localStorage.setItem('savedProblems', JSON.stringify(savedProblems));
    console.log('🗑️ Removed:', removed.name);
    loadSavedProblems();
  } catch (error) {
    console.error('❌ Error removing problem:', error);
  }
}

function filterProblems(difficulty) {
  try {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const items = document.querySelectorAll('.saved-item');
    items.forEach(item => {
      if (difficulty === 'all' || item.getAttribute('data-difficulty') === difficulty) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
    console.log('🔍 Filtered by:', difficulty);
  } catch (error) {
    console.error('❌ Error filtering:', error);
  }
}

function testLocalStorage() {
  try {
    const data = localStorage.getItem('savedProblems');
    console.log('🧪 Testing localStorage...');
    console.log('📦 Raw data:', data);

    if (data) {
      const parsed = JSON.parse(data);
      alert('✅ Found ' + parsed.length + ' saved problems!\n\n' + parsed.map(p => `• ${p.name} (${p.difficulty})`).join('\n'));
      loadSavedProblems();
    } else {
      alert('❌ No saved problems found in localStorage\n\nMake sure you save problems from the DSA Sheet first!');
    }
  } catch (error) {
    console.error('❌ Error testing localStorage:', error);
    alert('❌ Error: ' + error.message);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 Page loaded, loading saved problems...');
  loadSavedProblems();
});

window.addEventListener('load', function() {
  setTimeout(loadSavedProblems, 100);
});
