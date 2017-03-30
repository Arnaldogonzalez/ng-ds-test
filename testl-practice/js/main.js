(function() {
    var menuButton = document.getElementById('menu-button');
    var menuClose = document.getElementById('menu-close');
    var menuButtons = document.querySelectorAll('nav a');
    var nav = document.getElementsByTagName('nav')[0];

    menuButton.addEventListener('click', function() {
        nav.classList.remove('hideMenu');
    });

    menuClose.addEventListener('click', function() {
        nav.classList.add('hideMenu');
    });

    for(var i = 0, x = menuButtons.length; i < x; i++) {
        menuButtons[i].addEventListener('click', function() {
            nav.classList.add('hideMenu');
        });
    }

})();
