// Function to calculate age
function calculateAge() {
    // Reset error messages and styles
    resetErrors();

    // Get user input
    const birthDay = parseInt(document.getElementById("birthDay").value);
    const birthMonth = parseInt(document.getElementById("birthMonth").value);
    const birthYear = parseInt(document.getElementById("birthYear").value);

    // Get the current date
    const currentDate = new Date();

    // Validate day
    if (isNaN(birthDay) || birthDay < 1 || birthDay > 31) {
        displayError("dayError", "Must be a valid day");
    }

    // Validate month
    if (isNaN(birthMonth) || birthMonth < 1 || birthMonth > 12) {
        displayError("monthError", "Must be a valid month");
    }

    // Validate year
    if (isNaN(birthYear) || birthYear < 1900 || birthYear > currentDate.getFullYear()) {
        displayError("yearError", "Must be in the past");
    }

    // Check if any field is empty
    if (!birthDay || !birthMonth || !birthYear) {
        // displayError("required", "This field is required");
        if (!birthDay) {
            displayError("dayError", "This field is required");
        }
        if (!birthMonth) {
            displayError("monthError", "This field is required");
        }
        if (!birthYear) {
            displayError("yearError", "This field is required");
        }
    }

    // Check if all validations passed
    if (!isNaN(birthDay) && !isNaN(birthMonth) && !isNaN(birthYear) && birthDay >= 1 && birthDay <= 31 && birthMonth >= 1 && birthMonth <= 12 && birthYear >= 1900 && birthYear <= currentDate.getFullYear()) {
        // Calculate age
        const birthDate = new Date(`${birthMonth}/${birthDay}/${birthYear}`);
        const ageInMilliseconds = currentDate - birthDate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInMonths = ageInDays / 30.44; // average days in a month
        const ageInYears = ageInDays / 365.25; // average days in a year

        const years = Math.floor(ageInYears);
        const months = Math.floor(ageInMonths % 12);
        const days = Math.floor(ageInDays % 30.44);

        // Update result
        updateResult(years, months, days);
    }
}

// Function to update result
function updateResult(years, months, days) {
    document.getElementById("Years").innerText = years;
    document.getElementById("Months").innerText = months;
    document.getElementById("Days").innerText = days;
}

// Function to display error messages
function displayError(errorId, errorMessage) {
    document.getElementById(errorId).innerText = errorMessage;
    document.getElementById(errorId).style.display = "block";
    // Change input border color and label color to red
    document.getElementById("birthDay").style.borderColor = "red";
    document.getElementById("birthMonth").style.borderColor = "red";
    document.getElementById("birthYear").style.borderColor = "red";
    document.querySelectorAll('label[for^="birth"]').forEach(label => {
        label.style.color = "red";
    });
}

// Function to reset error messages and styles
function resetErrors() {
    document.querySelectorAll(".error").forEach(error => {
        error.innerText = "";
        error.style.display = "none";
    });
    // Reset input border color and label color
    document.getElementById("birthDay").style.borderColor = "";
    document.getElementById("birthMonth").style.borderColor = "";
    document.getElementById("birthYear").style.borderColor = "";
    document.querySelectorAll('label[for^="birth"]').forEach(label => {
        label.style.color = "";
    });
}



document.getElementById('submitBtn').addEventListener('click', function () {
    // Toggle the 'clicked' class on the container
    document.querySelector('.submitContainer').classList.toggle('clicked');

    // Toggle the 'rotateImage' class on the image
    document.getElementById('submitImage').classList.toggle('rotateImage');

    // You can also trigger other actions or functions here if needed
    // calculateAge();
});
