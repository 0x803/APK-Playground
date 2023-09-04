document.addEventListener('DOMContentLoaded', function () {
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
        })
        .catch(error => {
            // Handle any errors (e.g., network issues)
            console.error('Error:', error);
        });
    });
});
