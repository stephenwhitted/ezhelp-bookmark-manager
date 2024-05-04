document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookmarkForm');
    const urlInput = document.querySelector('#urlInput');
    const titleInput = document.querySelector('#titleInput');
    const bookmarkList = document.getElementById('bookmarkList');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const url = urlInput.value;
        const title = titleInput.value;
        if (!url || !title) {
            alert('Please fill in both fields.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `<a href="${url}" target="_blank">${title}</a> <button class="deleteBtn">Delete</button>`;
        bookmarkList.appendChild(li);

        urlInput.value = '';
        titleInput.value = '';

        // Add delete functionality
        li.querySelector('.deleteBtn').addEventListener('click', function() {
            bookmarkList.removeChild(li);
        });

        // Modify styles and attributes dynamically
        li.style.backgroundColor = '#cfc';
        li.firstChild.style.color = 'red'; // First child is the <a> tag
        li.setAttribute('data-url', url);
    });

    window.addEventListener('resize', function() {
        console.log('Window resized to: ' + window.innerWidth + 'x' + window.innerHeight);
    });

    // DOM event-based validation
    urlInput.addEventListener('input', function() {
        if (!this.validity.valid) {
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = 'initial';
        }
    });
});
