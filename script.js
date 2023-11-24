function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const hamburgerNav= document.getElementById("hamburger-nav");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    hamburgerNav.classList.toggle("open");
}

document.querySelectorAll('.workBody img').forEach(img => {
    img.onclick = () => {
        document.querySelector('.popup-work1').style.display = 'block';
        document.querySelector('.popup-work1 img').src = img.getAttribute('src');
    }
});

document.querySelector('.popup-work1 span').onclick = () =>{
    document.querySelector('.popup-work1').style.display = 'none';
};


// q

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = encodeURIComponent(document.getElementById('firstName').value);
    var lastName = encodeURIComponent(document.getElementById('lastName').value);
    var userEmail = encodeURIComponent(document.getElementById('userEmail').value);
    var userMessage = encodeURIComponent(document.getElementById('userMessage').value);

    var emailBody = `FirstName: ${firstName}%0D%0ALastName: ${lastName}%0D%0AEmail: ${userEmail}%0D%0A%0D%0AMessage:%0D%0A${userMessage}`;
    var mailtoLink = `mailto:bikibalami1999@gmail.com?subject=Message from ${firstName + lastName}&body=${emailBody}`;

    window.location.href = mailtoLink;
});
