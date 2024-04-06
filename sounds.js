document.addEventListener('DOMContentLoaded', function() {
    function changeToColorScheme1() {
        document.body.style.backgroundColor = "#e5e0d3";
        document.body.style.color = "#6d835a";
        
        let navBar = document.querySelector('.nav-bar');
        if (navBar) {
            navBar.style.backgroundColor = "#6d835a";
            let navLinks = navBar.querySelectorAll('a');
            navLinks.forEach(function(link) {
                link.style.color = "#ffbf73";
            });
        }
        let soundContainers = document.querySelectorAll('.sound-contianers > div');
        soundContainers.forEach(function(container) {
            container.style.backgroundColor = "#e5e0d3";
            let soundTexts = container.querySelectorAll('p');
            soundTexts.forEach(function(text) {
                text.style.color = "#6d835a";
            });
        });

        let soundHeader = document.querySelector('.sound-header h1');
        if (soundHeader) {
            soundHeader.style.color = "#6d835a";
        }
        let buttons = document.querySelectorAll('#Buttons button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = "#6d835a";
            button.style.color = "#e5e0d3";
        });
    }

    function changeToColorScheme2() {
        document.body.style.backgroundColor = "#f7f5f5"; 
        document.body.style.color = "#323232";
        
        let navBar = document.querySelector('.nav-bar');
        if (navBar) {
            navBar.style.backgroundColor = "#323232"; 
            let navLinks = navBar.querySelectorAll('a');
            navLinks.forEach(function(link) {
                link.style.color = "#ffffff"; 
            });
        }

        let soundContainers = document.querySelectorAll('.sound-contianers > div');
        soundContainers.forEach(function(container) {
            container.style.backgroundColor = "#f7f5f5"; 
            let soundTexts = container.querySelectorAll('p');
            soundTexts.forEach(function(text) {
                text.style.color = "#323232"; 
            });
        });

        let soundHeader = document.querySelector('.sound-header h1');
        if (soundHeader) {
            soundHeader.style.color = "#323232"; 
        }

        let buttons = document.querySelectorAll('#Buttons button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = "#323232"; 
            button.style.color = "#ffffff"; 
        });
    }

    function changeToColorScheme3() {
        document.body.style.backgroundColor = "#f2f0f0"; 
        document.body.style.color = "#535252"; 
        
        let navBar = document.querySelector('.nav-bar');
        if (navBar) {
            navBar.style.backgroundColor = "#535252"; 
            let navLinks = navBar.querySelectorAll('a');
            navLinks.forEach(function(link) {
                link.style.color = "#cacaca"; 
            });
        }

        let soundContainers = document.querySelectorAll('.sound-contianers > div');
        soundContainers.forEach(function(container) {
            container.style.backgroundColor = "#f2f0f0"; 
            let soundTexts = container.querySelectorAll('p');
            soundTexts.forEach(function(text) {
                text.style.color = "#535252"; 
            });
        });

        let soundHeader = document.querySelector('.sound-header h1');
        if (soundHeader) {
            soundHeader.style.color = "#535252"; 
        }

        let buttons = document.querySelectorAll('#Buttons button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = "#535252"; 
            button.style.color = "#cacaca"; 
        });
    }

    document.getElementById('Colour1').addEventListener('click', changeToColorScheme1);
    document.getElementById('Colour2').addEventListener('click', changeToColorScheme2);
    document.getElementById('Colour3').addEventListener('click', changeToColorScheme3);
});
