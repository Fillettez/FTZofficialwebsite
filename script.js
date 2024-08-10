document.addEventListener("DOMContentLoaded", function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.navbar ul');

    if (mobileMenuButton && navList) {
        mobileMenuButton.addEventListener('click', function() {
            navList.classList.toggle('showing');
        });
    }

    // Smooth Scroll for anchor links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

    // Members Carousel
    const members = document.querySelectorAll('.member');
    let currentIndex = 0;

    function updateMembers() {
        members.forEach((member, i) => {
            member.classList.remove('active');
        });

        members[currentIndex].classList.add('active');
    }

    function nextMember() {
        currentIndex = (currentIndex + 1) % members.length;
        updateMembers();
    }

    if (members.length > 0) {
        updateMembers(); // Initial setup
        setInterval(nextMember, 3000); // Change every 3 seconds
    }

    // Smooth Scroll
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
