// document.addEventListener('DOMContentLoaded', function () {
//   const backToTopButton = document.getElementById('backToTop');
//   window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 300) {
//       backToTopButton.classList.remove('opacity-0', 'invisible');
//       backToTopButton.classList.add('opacity-100', 'visible');
//     } else {
//       backToTopButton.classList.remove('opacity-100', 'visible');
//       backToTopButton.classList.add('opacity-0', 'invisible');
//     }
//   });
//   backToTopButton.addEventListener('click', function () {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });