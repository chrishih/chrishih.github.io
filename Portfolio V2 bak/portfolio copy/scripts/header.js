document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');

  // 點擊按鈕切換 menu 的顯示狀態
  mobileMenuButton.addEventListener('click', function () {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden'); // 顯示 menu
    } else {
      mobileMenu.classList.add('hidden'); // 隱藏 menu
    }
  });
});
