// Function to toggle the visibility of the services list
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

// Close services list if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}
