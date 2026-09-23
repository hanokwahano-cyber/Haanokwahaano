// Mobile navigation
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}


// Contact form
function submitForm(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const formMessage = document.getElementById("formMessage");

    formMessage.textContent =
        "Thank you, " + name + ". Your message has been received.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}


// Automatically display current year
document.getElementById("year").textContent =
    new Date().getFullYear();
    // =========================
// CONTACT FORM
// =========================

function submitContactForm(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    const message =
        document.getElementById("contactFormMessage");

    message.textContent =
        "Thank you, " + name +
        ". Your message has been received.";

    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";
}