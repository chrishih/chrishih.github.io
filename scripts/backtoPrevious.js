// 返回按鈕滾動顯示
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('backToWorkBtn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
});