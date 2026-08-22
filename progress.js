// Progress page JavaScript
// Features and behavior are kept the same.

const CATEGORIES = {
      'Array': ['Reverse Array', 'Max Subarray Sum (Kadane\'s)', 'Two Sum Problem', '3Sum Problem', 'Longest Consecutive Sequence', 'Merge Sorted Arrays'],
      'Strings': ['Reverse String', 'Palindrome Check', 'Longest Substring Without Repeating', 'Anagram Check', 'Regular Expression Matching'],
      'Linked List': ['Reverse Linked List', 'Detect Cycle in Linked List', 'Merge Two Sorted Lists', 'LRU Cache'],
      'Stacks & Queues': ['Valid Parentheses', 'Implement Queue Using Stacks', 'Trapping Rain Water', 'Largest Rectangle in Histogram', 'Min Stack'],
      'Trees': ['Inorder Traversal', 'Level Order Traversal', 'Same Tree', 'Invert Binary Tree', 'Maximum Depth'],
      'Graphs': ['Number of Islands', 'Surrounded Regions', 'Clone Graph', 'Word Search', 'Word Search II'],
      'Dynamic Programming': ['Climbing Stairs', 'House Robber', 'House Robber II', 'Word Break', 'Word Break II']
    };

    function loadProgress() {
      const saved = JSON.parse(localStorage.getItem('savedProblems')) || [];
      const completed = JSON.parse(localStorage.getItem('completedProblems')) || [];
      const total = saved.length;
      const comp = completed.length;
      const rate = total > 0 ? Math.round((comp/total)*100) : 0;

      document.getElementById('totalProblems').textContent = total;
      document.getElementById('completedCount').textContent = comp;
      document.getElementById('completionRate').textContent = rate + '%';
      document.getElementById('savedBar').style.width = (Math.min(total,193)/193*100) + '%';
      document.getElementById('completedBar').style.width = rate + '%';
      document.getElementById('rateBar').style.width = rate + '%';

      const diffs = {'easy': 41, 'medium': 119, 'hard': 33};
      Object.keys(diffs).forEach(d => {
        const completedInDiff = completed.filter(c => (c.difficulty === d || c.difficulty === d.charAt(0).toUpperCase() + d.slice(1))).length;
        const totalInDiff = diffs[d];
        const pct = totalInDiff > 0 ? Math.round((completedInDiff/totalInDiff)*100) : 0;
        document.getElementById(d+'Count').textContent = completedInDiff + ' / ' + totalInDiff;
        document.getElementById(d+'Bar').style.width = pct + '%';
      });

      updateCategoryProgress(saved, completed);
      let streak = parseInt(localStorage.getItem('streak')) || 0;
      document.getElementById('streakDays').textContent = streak;
    }

    function updateCategoryProgress(saved, completed) {
      const container = document.getElementById('categoryProgress');
      if(saved.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary); padding: var(--spacing-3xl) var(--spacing-lg);">Save problems from DSA sheet to see category breakdown</p>';
        return;
      }

      let html = '';
      Object.keys(CATEGORIES).forEach(category => {
        const categoryProblems = CATEGORIES[category];
        const completedInCategory = completed.filter(c => categoryProblems.includes(c.name)).length;
        const pct = Math.round((completedInCategory / categoryProblems.length) * 100);

        html += `
          <div class="category-item">
            <div class="category-name">${category}</div>
            <div class="category-stats">
              <div class="category-bar">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${pct}%; background: var(--primary);"></div>
                </div>
              </div>
              <div class="category-count">${completedInCategory}/${categoryProblems.length}</div>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    }

    function resetProgress() {
      if(confirm('Reset all progress?')) {
        localStorage.removeItem('completedProblems');
        loadProgress();
        alert('Progress reset!');
      }
    }

    function exportProgress() {
      const data = JSON.stringify({saved: JSON.parse(localStorage.getItem('savedProblems'))||[], completed: JSON.parse(localStorage.getItem('completedProblems'))||[]}, null, 2);
      const blob = new Blob([data], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'progress.json';
      a.click();
    }

    window.addEventListener('load', loadProgress);
