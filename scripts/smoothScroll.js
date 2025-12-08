// document.addEventListener('DOMContentLoaded', function () {
//   const navLinks = document.querySelectorAll('a[href^="#"]');
//   navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       const targetId = this.getAttribute('href');
//       if (targetId === '#') return;
//       const targetElement = document.querySelector(targetId);
//       if (targetElement) {
//         const headerOffset = 80;
//         const elementPosition = targetElement.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });