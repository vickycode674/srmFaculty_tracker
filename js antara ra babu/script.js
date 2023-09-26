function getFacultyDetails() {
    const day = document.getElementById("day").value;
    const period = document.getElementById("period").value;

    // Replace this with actual faculty data retrieval logic
    const facultyData = {
        name: "John Doe",
        facultyNumber: "F12345",
        subject: "Computer Science",
    };

    // Update the UI with faculty details
    document.getElementById("faculty-name").textContent = facultyData.name;
    document.getElementById("faculty-number").textContent = facultyData.facultyNumber;
    document.getElementById("faculty-subject").textContent = facultyData.subject;

    // Show the faculty details
    document.getElementById("faculty-details").classList.remove("hidden");
}
