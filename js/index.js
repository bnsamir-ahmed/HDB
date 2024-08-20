let toogle = document.querySelector('#nav-icon1')
let navBar = document.querySelector('.nav-mob')

toogle.addEventListener('click' , () =>{
    
    navBar.classList.toggle('show')
    document.body.classList.toggle('over-flow')
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds a smooth scrolling animation
  });
})




window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const stickyClass = 'sticky';
  const navbarToggler = document.querySelector('.navbar-toggler');

  


  const logoWhite = document.getElementById('logoWhite');
  const logoBlue = document.getElementById('logoBlue');
  const logoWhiteMob = document.getElementById('logoWhite-mob');
  const logoBlueMob = document.getElementById('logoBlue-mob');


  if (window.scrollY > 0) {
    navbarToggler.classList.add('scrolled'); // Add 'scrolled' class

    header.classList.add('sticky');
    logoWhite.style.display = 'none';
    logoBlue.style.display = 'block';
    logoWhiteMob.style.display = 'none';
    logoBlueMob.style.display = 'block';
    // logoStickyWhite.style.display = 'none';
    // logoStickyBlue.style.display = 'block';
    header.classList.add(stickyClass);

} else {
  navbarToggler.classList.remove('scrolled'); // Remove 'scrolled' class

    header.classList.remove('sticky');
    logoWhite.style.display = 'block';
    logoBlue.style.display = 'none';
    logoWhiteMob.style.display = 'block';
    logoBlueMob.style.display = 'none';
    // logoStickyWhite.style.display = 'block';
    // logoStickyBlue.style.display = 'none';
    header.classList.remove(stickyClass);

}




});





