// Import stylesheets
import './style.css';

const shureButton = document.querySelector('.button--first');
const nopeButton = document.querySelector('.button--second');
const divs = document.querySelectorAll('div');
const blackHole = document.querySelector("img");

function checkCookie() {
    const cookie = localStorage.getItem('cookie');
    cookie ? divs.forEach(div => div.style.display = 'none') : null;
  }
  
  shureButton.addEventListener('click', e => {
    e.preventDefault();
  
    localStorage.setItem('cookie', true);
  

    blackHole.classList.add("grow");

    divs.forEach(div => {
        div.style.opacity = '0';
        div.style.transition = '5s';
        div.classList.add('absorp');
      });

    
  })


  
  nopeButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    divs.forEach(div => {
      div.style.opacity = '0';
      div.style.transition = '.7s';
    });
  })
  
  checkCookie();