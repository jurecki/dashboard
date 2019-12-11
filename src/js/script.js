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