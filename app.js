const navslider = () => {
const burger = document.querySelector('.burger');
const linkuri = document.querySelector('.linkuri');

burger.addEventListener('click' ,() =>{
  linkuri.classList.toggle('linkuri-active')
  burger.classList.toggle('toggle');
});

}
navslider();