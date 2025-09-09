const phrases = ["Freelancer", "Software Engineer", "Web Developer", "Problem Solver"];
let index = 0;
let isTyping = true;
let textIndex = 0;
const speed = 100;

function typeEffect() {
    if (isTyping) {
        if (textIndex < phrases[index].length) {
            document.getElementById('typing-text').innerHTML += phrases[index].charAt(textIndex);
            textIndex++;
            setTimeout(typeEffect, speed);
        } else {
            isTyping = false;
            setTimeout(typeEffect, 1000);
        }
    } else {
        if (textIndex >= 0) {
            document.getElementById('typing-text').innerHTML = phrases[index].substring(0, textIndex);
            textIndex--;
            setTimeout(typeEffect, speed);
        } else {
            isTyping = true;
            index = (index + 1) % phrases.length;
            setTimeout(typeEffect, 1000);
        }
    }
}

window.onload = typeEffect;

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.box-container').forEach((block, index) => {
                setTimeout(() => {
                    block.classList.add('animate');
                }, index * 200);
            });
        } else {
            entry.target.querySelectorAll('.box-container').forEach((block, index) => {
                setTimeout(() => {
                    block.classList.remove('animate');
                }, index * 200);
            });
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0
});


document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills');
    observer.observe(skillsSection);
});

function downloadFile(filePath,fileName) {
    fetch(filePath)
    .then(response => response.blob())
    .then(blob => {
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
    modal.style.display = "none";
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModel(){
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
}

