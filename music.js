// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block"; // Show the section
    } else {
        section.style.display = "none"; // Hide the section
    }
}

// Ensure sections are hidden when the page loads
window.onload = function() {
    document.querySelectorAll('.hidden-section').forEach(function(section) {
        section.style.display = 'none';
    });
};
