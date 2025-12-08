// document.addEventListener('DOMContentLoaded', function () {
//   const mobileMenuButton = document.getElementById('mobileMenuButton');
//   const mobileMenu = document.getElementById('mobileMenu');
//   mobileMenuButton.addEventListener('click', function () {
//     mobileMenu.classList.toggle('hidden');
//     if (mobileMenu.classList.contains('hidden')) {
//       mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
//     } else {
//       mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
      } else {
        mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
      }
        });
    });
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
      });
    });