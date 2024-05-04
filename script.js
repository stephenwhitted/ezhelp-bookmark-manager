document.addEventListener('DOMContentLoaded', function() {
    // Caching DOM elements
    const appContainer = document.getElementById('app');
    const form = document.getElementById('bookmarkForm');
    const urlInput = document.querySelector('#urlInput');
    const titleInput = document.querySelector('#titleInput');
    const bookmarkList = document.getElementById('bookmarkList');
    const modal = document.getElementById('editModal');
    const editInput = document.querySelector('#editTitle');

    // Adding/managing bookmarks
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const url = urlInput.value;
        const title = titleInput.value;
        if (!url || !title) {
            alert('Please fill in both fields.');
            return;
        }

        // Create new bookmark entry
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = url;
        a.textContent = title;
        a.target = '_blank';
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        // Append elements to DOM
        li.appendChild(a);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        bookmarkList.appendChild(li);

        // Clear input fields
        urlInput.value = '';
        titleInput.value = '';

        // Dynamic modifications and event handling
        a.style.color = 'red'; // link color -> red for better visibility
        li.setAttribute('data-url', url); // Store the URL in a data attribute for potential future use

        deleteBtn.addEventListener('click', function() {
            bookmarkList.removeChild(li);
        });

        editBtn.addEventListener('click', function() {
            editBookmark(a);
        });
    });

    function editBookmark(aElement) {
        editInput.value = aElement.textContent; // Set current title for editing
        modal.style.display = 'block'; // Display modal

        // Handle edit form submission
        document.getElementById('editBookmarkForm').onsubmit = function(e) {
            e.preventDefault();
            if (editInput.value.trim() !== '') {
                aElement.textContent = editInput.value.trim(); // Update title
                modal.style.display = 'none'; // Hide modal
            } else {
                alert('Title cannot be empty!');
            }
        };
    }

    // Close modal functionality
    document.querySelector('.close').onclick = function() {
        modal.style.display = 'none';
    };

    // BOM usage: window resize listener and local storage for persistent storage (example)
    window.addEventListener('resize', function() {
        console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
        localStorage.setItem('lastKnownWidth', window.innerWidth); // Store last known width
    });

    // Validate URL input dynamically
    urlInput.addEventListener('input', function() {
        if (!this.validity.valid) {
            this.style.borderColor = 'red'; // Visual feedback
        } else {
            this.style.borderColor = 'initial';
        }
    });
});
