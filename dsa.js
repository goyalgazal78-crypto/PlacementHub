/* DSA page - simple JavaScript */

var companyMap = {
  G: "Google",
  A: "Amazon",
  M: "Microsoft",
  F: "Facebook",
  Ap: "Apple",
  Ad: "Adobe",
  B: "Bloomberg"
};

var videoMap = {
  "Reverse Array": "https://www.youtube.com/results?search_query=reverse+array+tutorial",
  "Max Subarray Sum (Kadane's)": "https://www.youtube.com/results?search_query=kadane+algorithm+tutorial",
  "Two Sum Problem": "https://www.youtube.com/results?search_query=two+sum+leetcode+tutorial",
  "3Sum Problem": "https://www.youtube.com/results?search_query=3sum+problem+tutorial",
  "Longest Consecutive Sequence": "https://www.youtube.com/results?search_query=longest+consecutive+sequence+tutorial",
  "Merge Sorted Arrays": "https://www.youtube.com/results?search_query=merge+sorted+arrays+tutorial",
  "Reverse String": "https://www.youtube.com/results?search_query=reverse+string+tutorial",
  "Palindrome Check": "https://www.youtube.com/results?search_query=palindrome+check+tutorial",
  "Longest Substring Without Repeating": "https://www.youtube.com/results?search_query=longest+substring+without+repeating+tutorial",
  "Anagram Check": "https://www.youtube.com/results?search_query=anagram+check+tutorial",
  "Regular Expression Matching": "https://www.youtube.com/results?search_query=regular+expression+matching+tutorial",
  "Reverse Linked List": "https://www.youtube.com/results?search_query=reverse+linked+list+tutorial",
  "Detect Cycle in Linked List": "https://www.youtube.com/results?search_query=detect+cycle+linked+list+tutorial",
  "Merge Two Sorted Lists": "https://www.youtube.com/results?search_query=merge+two+sorted+lists+tutorial",
  "LRU Cache": "https://www.youtube.com/results?search_query=LRU+cache+tutorial",
  "Remove Nth Node From End": "https://www.youtube.com/results?search_query=remove+nth+node+from+end+tutorial",
  "Palindrome Linked List": "https://www.youtube.com/results?search_query=palindrome+linked+list+tutorial",
  "Flatten Multilevel List": "https://www.youtube.com/results?search_query=flatten+multilevel+list+tutorial",
  "Copy List with Random Pointer": "https://www.youtube.com/results?search_query=copy+list+random+pointer+tutorial",
  "Valid Parentheses": "https://www.youtube.com/results?search_query=valid+parentheses+tutorial",
  "Implement Queue Using Stacks": "https://www.youtube.com/results?search_query=queue+using+stacks+tutorial",
  "Trapping Rain Water": "https://www.youtube.com/results?search_query=trapping+rain+water+tutorial",
  "Largest Rectangle in Histogram": "https://www.youtube.com/results?search_query=largest+rectangle+histogram+tutorial",
  "Min Stack": "https://www.youtube.com/results?search_query=min+stack+tutorial",
  "Inorder Traversal": "https://www.youtube.com/results?search_query=inorder+traversal+tutorial",
  "Level Order Traversal": "https://www.youtube.com/results?search_query=level+order+traversal+tutorial",
  "Same Tree": "https://www.youtube.com/results?search_query=same+tree+tutorial",
  "Invert Binary Tree": "https://www.youtube.com/results?search_query=invert+binary+tree+tutorial",
  "Maximum Depth": "https://www.youtube.com/results?search_query=maximum+depth+binary+tree+tutorial",
  "Balanced Binary Tree": "https://www.youtube.com/results?search_query=balanced+binary+tree+tutorial",
  "Path Sum": "https://www.youtube.com/results?search_query=path+sum+tutorial",
  "Path Sum II": "https://www.youtube.com/results?search_query=path+sum+ii+tutorial",
  "Binary Tree Maximum Path Sum": "https://www.youtube.com/results?search_query=binary+tree+maximum+path+sum+tutorial",
  "Number of Islands": "https://www.youtube.com/results?search_query=number+of+islands+tutorial",
  "Surrounded Regions": "https://www.youtube.com/results?search_query=surrounded+regions+tutorial",
  "Clone Graph": "https://www.youtube.com/results?search_query=clone+graph+tutorial",
  "Word Search": "https://www.youtube.com/results?search_query=word+search+tutorial",
  "Word Search II": "https://www.youtube.com/results?search_query=word+search+ii+tutorial",
  "Course Schedule": "https://www.youtube.com/results?search_query=course+schedule+tutorial",
  "Course Schedule II": "https://www.youtube.com/results?search_query=course+schedule+ii+tutorial",
  "Alien Dictionary": "https://www.youtube.com/results?search_query=alien+dictionary+tutorial",
  "Network Delay Time": "https://www.youtube.com/results?search_query=network+delay+time+tutorial",
  "Climbing Stairs": "https://www.youtube.com/results?search_query=climbing+stairs+tutorial",
  "House Robber": "https://www.youtube.com/results?search_query=house+robber+tutorial",
  "House Robber II": "https://www.youtube.com/results?search_query=house+robber+ii+tutorial",
  "Word Break": "https://www.youtube.com/results?search_query=word+break+tutorial",
  "Word Break II": "https://www.youtube.com/results?search_query=word+break+ii+tutorial",
  "LIS": "https://www.youtube.com/results?search_query=longest+increasing+subsequence+tutorial",
  "LCS": "https://www.youtube.com/results?search_query=longest+common+subsequence+tutorial",
  "Edit Distance": "https://www.youtube.com/results?search_query=edit+distance+tutorial",
  "Distinct Subsequences": "https://www.youtube.com/results?search_query=distinct+subsequences+tutorial",
  "Best Time to Buy Stock": "https://www.youtube.com/results?search_query=best+time+buy+stock+tutorial",
  "Unique Paths": "https://www.youtube.com/results?search_query=unique+paths+tutorial",
  "Minimum Path Sum": "https://www.youtube.com/results?search_query=minimum+path+sum+tutorial",
  "Maximal Square": "https://www.youtube.com/results?search_query=maximal+square+tutorial",
  "Interleaving String": "https://www.youtube.com/results?search_query=interleaving+string+tutorial"
};

/* Run everything after HTML is ready */
document.addEventListener("DOMContentLoaded", function () {
  setupSections();
  setupSidebar();
  setupSaves();
  setupCompleteButtons();
  setupCheckboxes();
  setupYoutubeLinks();
  setupCompanyNames();
  setupTimers();
  loadSaved();
  loadCompleted();
  setupHeaderButtons();
});

/* Expand / collapse */
function setupSections() {
  document.querySelectorAll(".section-header").forEach(function (header) {
    header.addEventListener("click", function (event) {
      if (event.target.closest(".section-toggle")) return;
      toggleSection(header);
    });

    var button = header.querySelector(".section-toggle");
    if (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleSection(header);
      });
    }
  });
}

function toggleSection(header) {
  header.closest(".dsa-section").classList.toggle("collapsed");
}

/* Mobile sidebar */
function setupSidebar() {
  var sidebar = document.querySelector(".dsa-sidebar");
  var toggle = document.querySelector(".sidebar-toggle");

  if (toggle) {
    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      sidebar.classList.toggle("open");
    });
  }

  document.querySelectorAll(".sidebar-link").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelectorAll(".sidebar-link").forEach(function (item) {
        item.classList.remove("active");
      });
      link.classList.add("active");

      if (window.innerWidth < 768) {
        sidebar.classList.remove("open");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (
      window.innerWidth < 768 &&
      sidebar &&
      !sidebar.contains(event.target) &&
      toggle &&
      !toggle.contains(event.target)
    ) {
      sidebar.classList.remove("open");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      sidebar.classList.remove("open");
    }
  });
}

/* Save */
function setupSaves() {
  document.querySelectorAll(".save-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      saveProblem(button);
    });
  });
}

function saveProblem(button) {
  var row = button.closest("tr");
  if (!row) return;

  var name = row.querySelector(".col-problem").textContent.trim();
  var difficulty = row.querySelector(".level-badge").textContent.trim();

  var saved = JSON.parse(localStorage.getItem("savedProblems")) || [];
  var index = saved.findIndex(function (item) {
    return item.name === name;
  });

  if (index === -1) {
    saved.push({
      name: name,
      difficulty: difficulty.toLowerCase(),
      savedAt: new Date().toLocaleString()
    });
    button.classList.add("saved");
    alert("✓ Saved: " + name);
  } else {
    saved.splice(index, 1);
    button.classList.remove("saved");
    alert("✓ Removed: " + name);
  }

  localStorage.setItem("savedProblems", JSON.stringify(saved));
}

function loadSaved() {
  var saved = JSON.parse(localStorage.getItem("savedProblems")) || [];

  document.querySelectorAll(".save-btn").forEach(function (button) {
    var row = button.closest("tr");
    if (!row) return;

    var name = row.querySelector(".col-problem").textContent.trim();
    var found = saved.some(function (item) {
      return item.name === name;
    });

    if (found) button.classList.add("saved");
  });
}

/* Complete */
function setupCompleteButtons() {
  document.querySelectorAll(".complete-btn").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      markComplete(button);
    });
  });
}

function markComplete(button) {
  var row = button.closest("tr");
  if (!row) return;

  var name = row.querySelector(".col-problem").textContent.trim();
  var difficulty = row.querySelector(".level-badge").textContent.trim().toLowerCase();
  var completed = JSON.parse(localStorage.getItem("completedProblems")) || [];

  var index = completed.findIndex(function (item) {
    return item.name === name;
  });

  if (index === -1) {
    completed.push({
      name: name,
      difficulty: difficulty,
      completedAt: new Date().toLocaleString()
    });

    button.innerHTML = '<i class="fas fa-check-circle"></i>';
    button.classList.add("completed");
    row.style.opacity = "0.6";
  } else {
    completed.splice(index, 1);
    button.innerHTML = '<i class="far fa-check-circle"></i>';
    button.classList.remove("completed");
    row.style.opacity = "1";
  }

  localStorage.setItem("completedProblems", JSON.stringify(completed));
}

function loadCompleted() {
  var completed = JSON.parse(localStorage.getItem("completedProblems")) || [];

  document.querySelectorAll(".complete-btn").forEach(function (button) {
    var row = button.closest("tr");
    if (!row) return;

    var name = row.querySelector(".col-problem").textContent.trim();

    if (completed.some(function (item) { return item.name === name; })) {
      button.innerHTML = '<i class="fas fa-check-circle"></i>';
      button.classList.add("completed");
      row.style.opacity = "0.6";
    }
  });
}

/* Checkbox / progress */
function setupCheckboxes() {
  document.querySelectorAll(".problems-table").forEach(function (table) {
    var top = table.querySelector("thead input[type='checkbox']");
    var boxes = table.querySelectorAll("tbody input[type='checkbox']");

    if (!top) return;

    top.addEventListener("change", function () {
      boxes.forEach(function (box) {
        box.checked = top.checked;
        updateCheckboxRow(box);
      });
    });

    boxes.forEach(function (box) {
      box.addEventListener("change", function () {
        updateCheckboxRow(box);

        var checked = table.querySelectorAll(
          "tbody input[type='checkbox']:checked"
        ).length;

        top.checked = checked === boxes.length;
        top.indeterminate = checked > 0 && checked < boxes.length;
      });
    });
  });
}

function updateCheckboxRow(checkbox) {
  var row = checkbox.closest("tr");
  var name = row.querySelector(".col-problem").textContent.trim();
  var level = row.querySelector(".level-badge").textContent.trim().toLowerCase();

  var progress = JSON.parse(localStorage.getItem("dsaProgress")) || {
    solved: 0,
    streak: 0,
    hours: 0,
    accuracy: 0,
    easy: 0,
    medium: 0,
    hard: 0
  };

  if (checkbox.checked) {
    row.style.opacity = "0.6";
    row.style.textDecoration = "line-through";

    progress.solved++;
    progress.streak++;

    if (level === "easy") progress.easy++;
    if (level === "medium") progress.medium++;
    if (level === "hard") progress.hard++;
  } else {
    row.style.opacity = "1";
    row.style.textDecoration = "none";

    if (progress.solved > 0) progress.solved--;
    if (progress.streak > 0) progress.streak--;

    if (level === "easy" && progress.easy > 0) progress.easy--;
    if (level === "medium" && progress.medium > 0) progress.medium--;
    if (level === "hard" && progress.hard > 0) progress.hard--;
  }

  localStorage.setItem("dsaProgress", JSON.stringify(progress));
  localStorage.setItem("solvedProblems", JSON.stringify(getCheckedProblems()));
}

function getCheckedProblems() {
  var names = [];

  document.querySelectorAll(".problems-table tbody tr").forEach(function (row) {
    var box = row.querySelector(".col-checkbox input");
    if (box && box.checked) {
      names.push(row.querySelector(".col-problem").textContent.trim());
    }
  });

  return names;
}

/* YouTube links */
function setupYoutubeLinks() {
  document.querySelectorAll(".problems-table tbody tr").forEach(function (row) {
    var problem = row.querySelector(".col-problem");
    var cell = row.querySelector(".col-youtube");
    if (!problem || !cell) return;

    var name = problem.textContent.trim();
    var link = cell.querySelector("a");

    if (!link) {
      link = document.createElement("a");
      cell.appendChild(link);
    }

    link.href = videoMap[name] ||
      "https://www.youtube.com/results?search_query=" +
      encodeURIComponent(name + " tutorial");

    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = '<i class="fas fa-play-circle"></i>';
  });
}

/* Company names */
function setupCompanyNames() {
  document.querySelectorAll(".company-logo").forEach(function (logo) {
    var abbreviation = logo.textContent.trim();
    var name = companyMap[abbreviation] || abbreviation;
    logo.dataset.company = name;
    logo.title = name;
  });
}

/* Timer */
function setupTimers() {
  document.querySelectorAll(".timer-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var seconds = parseInt(button.dataset.duration, 10) * 60;
      var original = button.textContent;

      button.disabled = true;
      button.style.backgroundColor = "#4CAF50";

      var timer = setInterval(function () {
        var minutes = Math.floor(seconds / 60);
        var remaining = seconds % 60;

        button.textContent =
          minutes + ":" + String(remaining).padStart(2, "0");

        seconds--;

        if (seconds < 0) {
          clearInterval(timer);
          button.textContent = original;
          button.disabled = false;
          button.style.backgroundColor = "";
          alert("Time is up!");
        }
      }, 1000);
    });
  });
}

/* Calendar + saved questions */
function setupHeaderButtons() {
  var calendar = document.getElementById("calendar-btn");
  var saved = document.getElementById("saved-btn");

  if (calendar) calendar.addEventListener("click", showCalendarModal);
  if (saved) saved.addEventListener("click", showSavedQuestionsModal);
}

function createModal() {
  var modal = document.createElement("div");
  modal.className = "dsa-modal";

  modal.addEventListener("click", function (event) {
    if (event.target === modal) modal.remove();
  });

  document.body.appendChild(modal);
  return modal;
}

function closeModal(modal) {
  modal.remove();
}

function showCalendarModal() {
  var modal = createModal();
  var content = document.createElement("div");
  content.className = "dsa-modal-content";

  var today = new Date();
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var html = "";
  html += '<div class="modal-heading">';
  html += "<h2>Study Calendar</h2>";
  html += "<p>" + months[today.getMonth()] + " " + today.getFullYear() + "</p>";
  html += "</div>";

  html += '<div class="calendar-grid">';
  days.forEach(function (day) {
    html += '<div class="calendar-day-name">' + day + "</div>";
  });

  for (var i = 1; i <= 31; i++) {
    var todayClass = i === today.getDate() ? " today" : "";
    html += '<div class="calendar-date' + todayClass + '">' + i + "</div>";
  }

  html += "</div>";
  html += '<button class="modal-close">Close</button>';

  content.innerHTML = html;
  modal.appendChild(content);

  content.querySelector(".modal-close").addEventListener("click", function () {
    closeModal(modal);
  });
}

function showSavedQuestionsModal() {
  var saved = JSON.parse(localStorage.getItem("savedProblems")) || [];
  var modal = createModal();
  var content = document.createElement("div");
  content.className = "dsa-modal-content saved-modal";

  var html = "";
  html += '<div class="modal-heading">';
  html += "<h2>Saved Questions</h2>";
  html += "<p>" + saved.length + " question" +
    (saved.length !== 1 ? "s" : "") + " saved</p>";
  html += "</div>";

  html += '<div class="saved-list">';

  if (saved.length) {
    saved.forEach(function (problem) {
      html += '<div class="saved-item">';
      html += "<span>" + escapeHtml(problem.name) + "</span>";
      html += '<span class="saved-level">' +
        escapeHtml(problem.difficulty) + "</span>";
      html += "</div>";
    });
  } else {
    html += '<p class="no-saved">No saved questions yet. Click the bookmark icon to save problems!</p>';
  }

  html += "</div>";
  html += '<button class="modal-close">Close</button>';

  content.innerHTML = html;
  modal.appendChild(content);

  content.querySelector(".modal-close").addEventListener("click", function () {
    closeModal(modal);
  });
}

function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
