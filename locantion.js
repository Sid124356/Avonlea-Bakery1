document.addEventListener('DOMContentLoaded', function() {
  
    let paragraphs = document.querySelectorAll('.hour-locantion-content p');

    paragraphs.forEach(function(paragraph) {
        paragraph.addEventListener('mouseover', function() {
            this.style.color = 'black';
        });

        paragraph.addEventListener('mouseout', function() {
            this.style.color = ''; 
        });
    });
});