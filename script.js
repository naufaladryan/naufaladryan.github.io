// JavaScript for responsive navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
});