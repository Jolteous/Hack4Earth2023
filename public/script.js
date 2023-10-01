// JavaScript to handle user registration
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform registration logic (e.g., send data to a server)
});


// JavaScript for user login
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Perform login logic (e.g., verify credentials on the server)
});


// JavaScript to display garden listings
const gardenListings = [
    { name: "Community Garden 1", location: "Location 1" },
    { name: "Community Garden 2", location: "Location 2" },
    // Add more garden data
];

function displayGardenListings() {
    const gardenList = document.getElementById("gardenList");
    gardenList.innerHTML = "";

    gardenListings.forEach((garden) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${garden.name} - ${garden.location}`;
        gardenList.appendChild(listItem);
    });
}
// Get references to the button and the popup container
const addListingButton = document.getElementById("addListingButton");
const listingFormPopup = document.getElementById("listingFormPopup");

// Add a click event listener to the button
addListingButton.addEventListener("click", () => {
    listingFormPopup.style.display = "block"; // Show the popup
});

// Function to hide the popup when the form is submitted
function hidePopup() {
    listingFormPopup.style.display = "none"; // Hide the popup
}
// Get a reference to the garden listing form element
const listingForm = document.getElementById("listingForm");

// Get a reference to the container where garden listings will be displayed
const listingsContainer = document.getElementById("listingsContainer");

// Function to handle the form submission
// Function to handle the form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting (for now)

    // Get the form input values
    const gardenName = document.getElementById("gardenName").value;
    const location = document.getElementById("location").value;

    // TODO: Validate the input data. You can check if the fields are not empty or meet specific criteria.

    // TODO: If validation passes, create a new listing object and add it to the gardenListings array.
    if (gardenName && location) {
        const newListing = { name: gardenName, location: location };
        gardenListings.push(newListing);

        // Clear the form fields
        document.getElementById("gardenName").value = "";
        document.getElementById("location").value = "";

        // After successfully adding the garden listing, you can call hidePopup() to hide the popup form.
        hidePopup();

        // Update the displayed garden listings
        displayGardenListings();
    }
}


// Add a submit event listener to the form
listingForm.addEventListener("submit", handleFormSubmission);


displayGardenListings();
