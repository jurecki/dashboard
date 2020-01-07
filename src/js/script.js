console.log(document.getElementsByTagName('a'));

const links = document.getElementsByTagName('a')

for( let i=0; i<links.length; i++) {
    //remove active class
    links[i].classList.remove('active');

    //add acitve class
    links[i].addEventListener('click', function() {
        links[i].classList.toggle('active');
    });
}

function toggleMenu(visible) {
    document.querySelector('.side-nav').classList.toggle('active',visible)
    document.querySelector('.side-logo-icon').classList.toggle('active', visible)
}


  document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
  });