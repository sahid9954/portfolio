document.addEventListener("DOMContentLoaded", function() {
    var toggleBtn = document.getElementById('toggleBtn');
    var menu = document.querySelector('nav ul.menu');

    toggleBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
