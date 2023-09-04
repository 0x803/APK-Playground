document.addEventListener('DOMContentLoaded', function () {
    // Get references to the popup elements
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopupButton = document.getElementById('close-popup');

    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'flex';
    }

    // Function to close the popup
    function closePopup() {
        popupOverlay.style.display = 'none';
    }

    // Add a click event listener to the "Got It" button
    closePopupButton.addEventListener('click', function () {
        closePopup();
    });

    // Initially hide the popup (optional)
    closePopup();

    // Add an event listener to the form for submission
    document.getElementById('upload-form').addEventListener('submit', function (e) {
        e.preventDefault();

        // Reference to the file input element
        const apkFileInput = document.getElementById('apkFile');

        // Check if a file was selected
        if (!apkFileInput.files[0]) {
            alert('Please select an APK file to upload.');
            return;
        }

        // Create a FormData object to send the file to the server
        const formData = new FormData();
        formData.append('apkFile', apkFileInput.files[0]);

        // Send the form data to the server using fetch API (adjust the URL)
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle the server response here (e.g., show success message)
            alert(data.message); // Display a success message
            // You can also perform further actions based on the response

            // Close the popup after successful upload (optional)
            closePopup();
        })
        .catch(error => {
            // Handle any errors (e.g., network issues)
            console.error('Error:', error);
        });
    });
});
