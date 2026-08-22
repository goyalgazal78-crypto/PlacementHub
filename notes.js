// Notes page JavaScript
// Features and behavior are kept the same.

// Toggle note card
    function toggleNote(header) {
      const card = header.closest('.note-card');
      card.classList.toggle('expanded');
    }

    // Get note content by ID
    function getNoteContent(noteId) {
      const card = document.querySelector(`[data-note-id="${noteId}"]`);
      if (!card) return '';

      let content = card.querySelector('.note-preview').innerHTML;

      // Ensure all text elements have dark color
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;

      // Apply dark colors to all elements
      tempDiv.querySelectorAll('p, h4, li, td, tr').forEach(el => {
        el.style.color = '#333';
      });
      tempDiv.querySelectorAll('h3').forEach(el => {
        el.style.color = '#1e40af';
      });

      return tempDiv.innerHTML;
    }

    // Preview PDF
    function previewPDF(noteId, title) {
      const content = getNoteContent(noteId);
      const modal = document.getElementById('pdfModal');
      document.getElementById('pdfTitle').textContent = title + ' - PDF Preview';
      document.getElementById('pdfContent').innerHTML = `
        <style>
          #pdfContent * { color: #1a1a1a !important; }
          #pdfContent p { color: #333 !important; }
          #pdfContent h4 { color: #1a1a1a !important; }
          #pdfContent h3 { color: #1e40af !important; }
          #pdfContent ul, #pdfContent li { color: #333 !important; }
          #pdfContent table { color: #333 !important; }
        </style>
        <div style="padding: 40px; font-family: Arial, sans-serif; line-height: 1.8; color: #1a1a1a;">
          <h1 style="text-align: center; color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 20px; margin-bottom: 30px; font-size: 28px;">${title}</h1>
          <div style="font-size: 14px; color: #333;">${content}</div>
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #ccc; color: #555;">
            <p style="font-size: 12px; color: #555;">This is a preview of the complete PDF. Download to get the full formatted PDF for offline use.</p>
            <button onclick="downloadPDF('${noteId}', '${title}')" style="padding: 10px 24px; background-color: #1e40af; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">Download Full PDF</button>
          </div>
        </div>
      `;
      modal.classList.add('active');
    }

    // Download PDF
    function downloadPDF(noteId, title) {
      const content = getNoteContent(noteId);

      const element = document.createElement('div');
      element.innerHTML = `
        <style>
          .pdf-wrapper * { color: #1a1a1a !important; }
          .pdf-wrapper p { color: #333 !important; }
          .pdf-wrapper h4 { color: #1a1a1a !important; }
          .pdf-wrapper h3 { color: #1e40af !important; }
          .pdf-wrapper ul, .pdf-wrapper li { color: #333 !important; }
          .pdf-wrapper table { color: #333 !important; }
        </style>
        <div class="pdf-wrapper" style="padding: 40px; font-family: Arial, sans-serif; line-height: 1.8; color: #1a1a1a;">
          <h1 style="text-align: center; color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 20px; margin-bottom: 30px; font-size: 28px;">${title}</h1>
          <div style="color: #333; font-size: 14px;">${content}</div>
          <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #ccc; color: #555; font-size: 12px;">
            <p style="color: #555;"><strong>Downloaded from PlacementHub - Comprehensive DSA Notes</strong></p>
            <p style="color: #555;">Date: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `;

      const options = {
        margin: 10,
        filename: `${title}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      };

      html2pdf().set(options).from(element).save();

      // Save to localStorage
      let downloads = JSON.parse(localStorage.getItem('downloadedNotes')) || [];
      const exists = downloads.find(n => n.id === noteId);
      if (!exists) {
        downloads.push({
          id: noteId,
          title: title,
          content: content,
          downloadedAt: new Date().toLocaleString()
        });
        localStorage.setItem('downloadedNotes', JSON.stringify(downloads));
      }

      updateDownloadCount();
      alert(`✓ ${title} has been downloaded as PDF!`);
    }

    // Update download count
    function updateDownloadCount() {
      const downloads = JSON.parse(localStorage.getItem('downloadedNotes')) || [];
      document.getElementById('download-count').textContent = downloads.length;
    }

    // Show downloads
    function showDownloads() {
      const downloads = JSON.parse(localStorage.getItem('downloadedNotes')) || [];
      const modal = document.getElementById('downloadsModal');
      const body = document.getElementById('downloadsBody');

      if (downloads.length === 0) {
        body.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-secondary);">
            <i class="fas fa-inbox" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
            <h3 style="color: var(--text-primary); margin-top: 16px;">No Downloads Yet</h3>
            <p>Click "Download PDF" on any note to save it here.</p>
          </div>
        `;
      } else {
        body.innerHTML = downloads.map((note, idx) => `
          <div style="padding: 16px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: background-color 0.2s;" onmouseover="this.style.backgroundColor='rgba(99, 102, 241, 0.05)'" onmouseout="this.style.backgroundColor='transparent'">
            <div style="flex: 1; cursor: pointer;" onclick="viewDownloadedNote(${idx})">
              <div style="font-weight: 600; color: var(--text-primary); margin-bottom: 4px;"><i class="fas fa-file-pdf" style="color: #ef4444;"></i> ${note.title}</div>
              <div style="font-size: 12px; color: var(--text-tertiary);">Downloaded: ${note.downloadedAt}</div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button onclick="viewDownloadedNote(${idx})" style="padding: 6px 12px; background-color: rgba(99, 102, 241, 0.15); border: 1px solid var(--primary); color: var(--primary); border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">
                <i class="fas fa-eye"></i> View
              </button>
              <button onclick="deleteDownload(${idx})" style="padding: 6px 12px; background-color: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; color: #ef4444; border-radius: 4px; cursor: pointer; font-size: 12px; font-weight: 600;">
                <i class="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        `).join('');
      }

      modal.classList.add('active');
    }

    // Delete download
    function deleteDownload(idx) {
      if (confirm('Delete this downloaded note?')) {
        let downloads = JSON.parse(localStorage.getItem('downloadedNotes')) || [];
        downloads.splice(idx, 1);
        localStorage.setItem('downloadedNotes', JSON.stringify(downloads));
        updateDownloadCount();
        showDownloads();
      }
    }

    // View downloaded note in fullscreen
    function viewDownloadedNote(idx) {
      const downloads = JSON.parse(localStorage.getItem('downloadedNotes')) || [];
      const note = downloads[idx];

      if (note) {
        const modal = document.getElementById('fullscreenPDFModal');
        document.getElementById('fullscreenTitle').textContent = note.title + ' - Downloaded Notes';
        document.getElementById('fullscreenContent').innerHTML = `
          <div style="padding: 40px; font-family: Arial, sans-serif; line-height: 1.8; color: #1a1a1a;">
            <h1 style="text-align: center; color: #1e40af; border-bottom: 3px solid #1e40af; padding-bottom: 20px; margin-bottom: 30px; font-size: 28px;">${note.title}</h1>
            <div style="font-size: 14px; line-height: 1.8; color: #333;">${note.content}</div>
            <div style="text-align: center; margin-top: 60px; padding-top: 30px; border-top: 2px solid #ccc; color: #555; font-size: 12px;">
              <p><strong>Downloaded from PlacementHub</strong></p>
              <p>Comprehensive DSA Notes for Interview Preparation</p>
              <p>Downloaded on: ${note.downloadedAt}</p>
            </div>
          </div>
        `;

        // Store current note for download function
        window.currentDownloadNote = note;

        modal.classList.add('active');
        closeDownloadsModal();
      }
    }

    // Download current fullscreen PDF
    function downloadCurrentPDF() {
      if (window.currentDownloadNote) {
        const note = window.currentDownloadNote;
        const element = document.createElement('div');
        element.innerHTML = document.getElementById('fullscreenContent').innerHTML;

        const options = {
          margin: 10,
          filename: `${note.title}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
        };

        html2pdf().set(options).from(element).save();
        alert('✓ PDF downloaded successfully!');
      }
    }

    // Close fullscreen PDF
    function closeFullscreenPDF() {
      document.getElementById('fullscreenPDFModal').classList.remove('active');
    }

    // Close modals
    function closePDFModal() {
      document.getElementById('pdfModal').classList.remove('active');
    }

    function closeDownloadsModal() {
      document.getElementById('downloadsModal').classList.remove('active');
    }

    // Initialize on load
    window.addEventListener('load', () => {
      updateDownloadCount();
    });

    // Close on outside click
    document.getElementById('pdfModal').addEventListener('click', (e) => {
      if (e.target.id === 'pdfModal') closePDFModal();
    });

    document.getElementById('downloadsModal').addEventListener('click', (e) => {
      if (e.target.id === 'downloadsModal') closeDownloadsModal();
    });

    document.getElementById('fullscreenPDFModal').addEventListener('click', (e) => {
      if (e.target.id === 'fullscreenPDFModal') closeFullscreenPDF();
    });

    // Keyboard shortcut - ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeFullscreenPDF();
        closePDFModal();
        closeDownloadsModal();
      }
    });
