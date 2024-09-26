function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block"; // Show the section
    } else {
        section.style.display = "none"; // Hide the section
    }
}

// Function to play a selected track and pause others
function playTrack(trackId) {
    var audioElements = document.querySelectorAll('audio');
    audioElements.forEach(function(audio) {
        audio.pause(); // Pause all other tracks
        audio.currentTime = 0; // Reset the time to the beginning
    });
    var selectedTrack = document.getElementById(trackId);
    selectedTrack.play(); // Play the selected track
}
