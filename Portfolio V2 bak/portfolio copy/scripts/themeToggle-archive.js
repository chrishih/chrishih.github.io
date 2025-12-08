// document.addEventListener('DOMContentLoaded', function () {
//   const themeToggle = document.getElementById('themeToggle');
//   const icon = themeToggle.querySelector('i');
//   const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
//   const currentTheme = localStorage.getItem('theme');
//   function setTheme(theme) {
//     if (theme === 'dark') {
//       document.body.classList.add('dark');
//       icon.classList.remove('ri-sun-line');
//       icon.classList.add('ri-moon-line');
//       localStorage.setItem('theme', 'dark');
//     } else {
//       document.body.classList.remove('dark');
//       icon.classList.remove('ri-moon-line');
//       icon.classList.add('ri-sun-line');
//       localStorage.setItem('theme', 'light');
//     }
//   }
//   if (currentTheme) {
//     setTheme(currentTheme);
//   } else if (prefersDarkScheme.matches) {
//     setTheme('dark');
//   }
//   themeToggle.addEventListener('click', () => {
//     if (document.body.classList.contains('dark')) {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    function setTheme(theme) {
      if (theme === 'dark') {
        document.body.classList.add('dark');
        icon.classList.remove('ri-sun-line');
        icon.classList.add('ri-moon-line');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        icon.classList.remove('ri-moon-line');
        icon.classList.add('ri-sun-line');
        localStorage.setItem('theme', 'light');
      }
    }
    if (currentTheme) {
      setTheme(currentTheme);
    } else if (prefersDarkScheme.matches) {
      setTheme('dark');
    }
    themeToggle.addEventListener('click', () => {
      if (document.body.classList.contains('dark')) {
        setTheme('light');
      } else {
        setTheme('dark');
      }
    });
    prefersDarkScheme.addListener((e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
  });