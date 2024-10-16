// Select all anchor tags within the navigation menu
document.querySelectorAll('nav ul a').forEach(anchor => {
    // Add a click event listener to each anchor
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor click behavior (jumping to the section)

        // Get the href attribute of the clicked anchor (e.g., "#about")
        const targetId = this.getAttribute('href');

        // Scroll smoothly to the target section referenced by the href attribute
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth' // Enable smooth scrolling effect
        });
    });
});