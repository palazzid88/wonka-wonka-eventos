  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.navbar ul');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
