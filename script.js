// Get the modal and modal content elements
var modal = document.getElementById("gameModal");
var modalTitle = document.getElementById("modalTitle");
var modalImage = document.getElementById("modalImage");
var modalDescription = document.getElementById("modalDescription");
var assetLink = document.getElementById("assetLink");

// Get all game cards
var gameCards = document.getElementsByClassName("game-card");

// Function to open the modal with game details
function openModal(title, imageSrc, description, link) {
    modalTitle.textContent = title;
    modalImage.src = imageSrc;
    modalDescription.textContent = description;
    assetLink.href = link;
    modal.style.display = "block";
}

// Add click event listener to each game card
for (var i = 0; i < gameCards.length; i++) {
    gameCards[i].addEventListener("click", function () {
        var title = this.querySelector("h3").textContent;
        var imageSrc = this.querySelector("img").src;
        var description = this.getAttribute("data-description");
        var link = this.getAttribute("data-link");

        openModal(title, imageSrc, description, link);
    });
}

// Close the modal when the close button is clicked
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the button element
var gamesButton = document.getElementById("gamesButton");

// Add click event listener to the button
gamesButton.addEventListener("click", function () {
    // Get the games section element
    var gamesSection = document.getElementById("games");

    // Scroll to the games section
    gamesSection.scrollIntoView({ behavior: 'smooth' });
});
