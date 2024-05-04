const phrases = ["Software Engineer", "Web Developer", "Problem Solver"];
let index = 0;
let isTyping = true;
let textIndex = 0;
const speed = 100; // typing speed in milliseconds

function typeEffect() {
    if (isTyping) {
        if (textIndex < phrases[index].length) {
            document.getElementById('typing-text').innerHTML += phrases[index].charAt(textIndex);
            textIndex++;
            setTimeout(typeEffect, speed);
        } else {
            isTyping = false;
            setTimeout(typeEffect, 1000); // Wait for 1 second before starting erasing
        }
    } else {
        if (textIndex >= 0) {
            document.getElementById('typing-text').innerHTML = phrases[index].substring(0, textIndex);
            textIndex--;
            setTimeout(typeEffect, speed);
        } else {
            isTyping = true;
            index = (index + 1) % phrases.length; // Move to the next phrase
            setTimeout(typeEffect, 1000); // Wait for 1 second before starting typing again
        }
    }
}

window.onload = typeEffect;

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// Callback function to handle intersection changes
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // The "Skills" section is now in the viewport
            entry.target.querySelectorAll('.box-container').forEach((block, index) => {
                setTimeout(() => {
                    block.classList.add('animate');
                }, index * 200); // Adjust delay as needed
            });
        } else {
            // The "Skills" section is out of the viewport
            entry.target.querySelectorAll('.box-container').forEach((block, index) => {
                setTimeout(() => {
                    block.classList.remove('animate');
                }, index * 200); // Adjust delay as needed
            });
        }
    });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0 // Trigger when 50% of the element is in view
});


document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills');
    observer.observe(skillsSection);
});

function downloadFile(filePath,fileName) {
    fetch(filePath)
    .then(response => response.blob())
    .then(blob => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        window.URL.revokeObjectURL(link.href);
    })
    .catch(error => console.error('Error downloading file:', error));
}

function previewFile(src){
    var modal = document.getElementById('myModal');
    // var preview = document.getElementById('preview');
    modal.style.display = "none";
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModel(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}