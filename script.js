// JavaScript for Pop-up and Animation
document.addEventListener('DOMContentLoaded', function() {
    // Show the pop-up on page load
    const popup = document.querySelector('.popup');
    popup.style.display = 'block';

    // Close the pop-up when the "Got It" button is clicked
    const closePopupButton = document.getElementById('close-popup');
    closePopupButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Remove the loading screen when the page is fully loaded
    const loadingScreen = document.querySelector('.loading-screen');
    window.addEventListener('load', function() {
        loadingScreen.style.display = 'none';
    });

    // Theme switcher functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', function() {
        const body = document.body;
        if (this.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });

    // Handle file upload
    const fileInput = document.getElementById('file-input');
    const fileDropZone = document.querySelector('.file-drop-zone');

    fileDropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    });

    fileDropZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
    });

    fileDropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        handleFileUpload(file);
    });

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        handleFileUpload(file);
    });

    function handleFileUpload(file) {
        if (file && file.type === 'application/vnd.android.package-archive') {
            // Handle the uploaded APK file, e.g., display it in an iframe
            alert(`Uploaded APK file: ${file.name}`);
        } else {
            alert('Please upload a valid APK file.');
        }
    }
});
