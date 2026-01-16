document.addEventListener('DOMContentLoaded', function () {
  const isWorks = window.location.pathname.includes('/works/');
  const basePath = isWorks ? '../' : '';

  // 動態載入 Header
  fetch(basePath + 'components/header.html')
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch header: ${response.status}`);
      return response.text();
    })
    .then(data => {
      if (isWorks) {
        data = data.replace(/href="(?!http|#|mailto:)(\w)/g, 'href="../$1');
        data = data.replace(/src="(?!http)(\w)/g, 'src="../$1');
      }
      document.body.insertAdjacentHTML('afterbegin', data);

      // 高亮當前頁面的 nav-link
      const navLinks = document.querySelectorAll('.nav-link');
      const currentPath = window.location.pathname.split('/').pop(); // 獲取當前頁面的檔案名

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const targetPage = href ? href.split('/').pop() : '';
        if (targetPage === 'work.html' && (currentPath.startsWith('work_') || currentPath === 'work.html')) {
          // 如果檔案名稱以 "work_" 開頭或是 "work.html"，將 Work 設置為 active
          link.classList.add('active');
        } else if (targetPage === currentPath) {
          // 如果是其他頁面，根據 href 匹配
          link.classList.add('active');
        }
      });

      // 初始化 Header 的其他 JS
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

      // 初始化 Header 的 Drawer JS
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

      // Close mobile menu when clicking on a link
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
        });
      });
    })
    .catch(err => console.error(err));



  // 動態載入 Footer
  fetch(basePath + 'components/footer.html')
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch footer: ${response.status}`);
      return response.text();
    })
    .then(data => {
      if (isWorks) {
        data = data.replace(/href="(?!http|#|mailto:)(\w)/g, 'href="../$1');
        data = data.replace(/src="(?!http)(\w)/g, 'src="../$1');
      }
      document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(err => console.error(err));





  // 動態載入 Back-to-Top Button
  fetch(basePath + 'components/backToTop.html')
    .then(response => {
      if (!response.ok) throw new Error(`Failed to fetch back-to-top button: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.body.insertAdjacentHTML('beforeend', data);

      // 初始化 Back-to-Top 的 JS
      const backToTopButton = document.getElementById('backToTop');
      const footer = document.querySelector('footer'); // 確保 footer 已經載入
      const footerHeight = footer.offsetHeight;

      window.addEventListener('scroll', function () {
        const scrollY = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // 顯示或隱藏 Back-to-Top 按鈕
        if (scrollY > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.remove('opacity-100', 'visible');
          backToTopButton.classList.add('opacity-0', 'invisible');
        }

        // Sticky Back-to-Top 當接近 footer
        const footerTop = documentHeight - footerHeight;
        if (scrollY + viewportHeight >= footerTop) {
          backToTopButton.style.position = 'fixed';
          backToTopButton.style.bottom = `${footerHeight + 20}px`; // 距離 footer 20px
        } else {
          backToTopButton.style.position = 'fixed';
          backToTopButton.style.bottom = '20px'; // 固定在距離底部 20px
        }
      });

      backToTopButton.addEventListener('click', function () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    })
    .catch(err => console.error(err))
    .finally(() => {
      // 移除讀取效果
      const loader = document.getElementById('pageLoader');
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => loader.remove(), 500);
    });

  // 使用 MutationObserver 確保 header 加載完成後綁定事件
  const observer = new MutationObserver(() => {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
          mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
        } else {
          mobileMenuButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
        }
      });

      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-lg"></i>';
        });
      });

      observer.disconnect(); // 停止觀察，避免重複綁定
    }
  });

  // 監聽 body 的變化
  observer.observe(document.body, { childList: true, subtree: true });
});

