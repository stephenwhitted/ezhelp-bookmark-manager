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

       