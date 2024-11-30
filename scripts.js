
document.getElementById("generateLink").addEventListener("click", function() {
    const inputLink = document.getElementById("driveLink").value;
    const fileId = extractFileId(inputLink);
    const resultDiv = document.getElementById("result");
    
    if (fileId) {
        const directLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
        document.getElementById("directDownloadLink").href = directLink;
        document.getElementById("directDownloadLink").innerText = directLink;
        
        // Show result with fade-in effect
        resultDiv.classList.add('show');
        resultDiv.hidden = false; // Ensure it's visible
    } else {
        alert("Invalid Google Drive link. Please ensure it's a valid shareable link.");
        resultDiv.classList.remove('show');
        resultDiv.hidden = true; // Hide the result
    }
});

lert('Link copied to clipboard!'); // Alert for user feedback
}

