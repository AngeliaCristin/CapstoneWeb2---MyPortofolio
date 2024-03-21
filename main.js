const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const contactContainer = document.querySelector('.contact-container');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    contactContainer.classList.toggle('contact-container-dark');

    const icon = darkModeToggle.querySelector('i');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// 

function highlightNavItem() {
    const sections = document.querySelectorAll('article[id]');
    sections.forEach((section) => {
        const navLink = document.querySelector(`a[href="#${section.id}"]`);
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
}

window.addEventListener('load', highlightNavItem);
window.addEventListener('scroll', highlightNavItem);

// 

const certificates = [
    { imgSrc: "assets/certificate/certi-1.jpg", title: "Digital Marketing" },
    { imgSrc: "assets/certificate/certi-2.jpg", title: "Staff BIRO INFORSA" },
    { imgSrc: "assets/certificate/certi-3.jpg", title: "Lomba Tari & Dance INSEVENT" },
    { imgSrc: "assets/certificate/certi-4.jpg", title: "GEAR FT 2022" },
    { imgSrc: "assets/certificate/certi-5.jpg", title: "Panitia INSEVENT" },
    { imgSrc: "assets/certificate/certi-6.jpg", title: "Panitia MAKRAB 2022" },
    { imgSrc: "assets/certificate/certi-7.jpg", title: "Oracle Database Design" },
    { imgSrc: "assets/certificate/certi-8.jpg", title: "Oracle Database Programming" }
];

function createCertificateParts() {
    const certificateSection = document.getElementById("certificate");
    const certificateRow = certificateSection.querySelector(".row");

    certificates.forEach(certificate => {
        const certificatePart = document.createElement("div");
        certificatePart.classList.add("certificate-part", "col-11", "col-md-5", "m-3");

        certificatePart.innerHTML = `
            <div class="certificate-img d-flex justify-content-center">
                <img src="${certificate.imgSrc}" alt="">
            </div>
            <h4 class="my-2 text-center fw-bold">${certificate.title}</h4>
        `;

        certificateRow.appendChild(certificatePart);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    createCertificateParts();
});

// 

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let alertMessage = "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Phone Number: " + phone + "\n" +
                        "Message: " + message + "\n" +
                        "Your message has been sent!";
    alert(alertMessage);

    let formData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
});

window.onload = function() {
    let storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
        document.getElementById("name").value = storedData.name;
        document.getElementById("email").value = storedData.email;
        document.getElementById("phone").value = storedData.phone;
        document.getElementById("message").value = storedData.message;
    }
};