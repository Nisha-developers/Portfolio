const headerDesign = document.querySelector('header');
const headerTitle = document.querySelector('.header-title');
const projectItemAll = document.querySelectorAll('.project-item')
const fixedTop = document.getElementById('fixed-top');
const hiddenvisible = document.querySelectorAll('.hiddenvisible');
const questionSpan = document.querySelectorAll('.question span');
const question = document.querySelectorAll('.question');
const allLinks = document.querySelectorAll('.nav-links');
const answer = document.querySelectorAll('.answer');
const menuEl = document.querySelector('.fa-bars');
const phoneMenu = document.querySelector('.phone-menu');

let positionToggle = false;

menuEl.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent document click

  menuEl.classList.toggle("fa-x");
  phoneMenu.classList.toggle('actives');

  positionToggle = menuEl.classList.contains('fa-x');

  document.querySelector('main').style.filter =
    positionToggle ? 'blur(10px)' : 'blur(0)';
});

// OUTSIDE CLICK
document.addEventListener('click', (e) => {
  if (!positionToggle) return;

  const screenWidth = window.innerWidth;
  const halfScreenWidth = screenWidth / 2;
  const userPositionClick = e.clientX;

  if (userPositionClick > halfScreenWidth) {
    closeMenu();
  }
});

function closeMenu() {
  positionToggle = false;

  document.querySelector('main').style.filter = 'blur(0)';
  menuEl.classList.remove('fa-x');
  menuEl.classList.add('fa-bars'); // corrected icon name
  phoneMenu.classList.remove('actives');
}



question.forEach((el, index) => {
  el.addEventListener('click', () => {
    const isActive = answer[index].classList.contains('active');

    // Close any open answer first
    answer.forEach((ans, i) => {
      ans.classList.remove('active');
      questionSpan[i].innerText = '+';
    });

    // If the clicked one was not active, open it
    if (!isActive) {
      answer[index].classList.add('active');
      questionSpan[index].innerText = '-';
    }
  });
});


fixedTop.addEventListener('click', ()=>{
window.scrollTo({
  top: 0,
  left:0,
  behavior: 'smooth'
})
  
})
let eachHeight = [];
let detemineHeaderColor = 50;
projectItemAll.forEach((el, index)=>{
  const targetHeight = getComputedStyle(el).height;
  eachHeight.push(targetHeight);
})
hiddenvisible.forEach((el, index)=>{
el.style.height = eachHeight[index]
})

window.addEventListener('resize', ()=>{
  eachHeight = [];
projectItemAll.forEach((el, index)=>{
  const targetHeight = getComputedStyle(el).height;
  eachHeight.push(targetHeight);
})
hiddenvisible.forEach((el, index)=>{
el.style.height = eachHeight[index]
})
})
// Dark-mode version of your body background pattern


document.addEventListener('scroll', () => {
 if(scrollY < detemineHeaderColor){
  headerDesign.style.backgroundColor = 'transparent';
  headerDesign.classList.remove('darkHeaderbG');
  headerTitle.style.color = '';
   allLinks.forEach((el)=>{
      el.style.color = '#122a4b'
    })
}
else{
    headerDesign.classList.add('darkHeaderbG');
    headerDesign.style.backgroundColor = '';
    headerTitle.style.color = ' #CBD5E1';
    allLinks.forEach((el)=>{
      el.style.color = '#CBD5E1'
    })
}
});



const roles = [
  "a Full Stack Dev",
  "a Web Designer",
  "a React Enthusiast"
];

let index = 0;
let charIndex = 0;
const typingSpeed = 100; // milliseconds
const erasingSpeed = 50;
const delayBetween = 1500; // time before erasing

const typedElement = document.getElementById("typing");

function type() {
  if (charIndex < roles[index].length) {
    typedElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetween);
  }
}

function erase() {
  if (charIndex > 0) {
    typedElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, typingSpeed);
  }
}

// Start typing on page load
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, delayBetween);
});
