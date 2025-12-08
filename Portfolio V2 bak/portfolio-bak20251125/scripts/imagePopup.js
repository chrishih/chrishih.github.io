// document.addEventListener('DOMContentLoaded', function () {
//   const figures = document.querySelectorAll('figure img'); // 選取所有 <figure> 裡的 <img>
//   const popup = document.getElementById('imagePopup');
//   const popupImage = document.getElementById('popupImage');
//   const closePopup = document.getElementById('closePopup');

//   // 點擊圖片顯示 popup
//   figures.forEach(img => {
//     img.addEventListener('click', function () {
//       popupImage.src = this.src; // 設置 popup 的圖片來源
//       popup.classList.remove('hidden'); // 顯示 popup
//     });
//   });

//   // 點擊關閉按鈕隱藏 popup
//   closePopup.addEventListener('click', function () {
//     popup.classList.add('hidden'); // 隱藏 popup
//     popupImage.src = ''; // 清空圖片來源
//   });

//   // 點擊黑色背景隱藏 popup
//   popup.addEventListener('click', function (e) {
//     if (e.target === popup) {
//       popup.classList.add('hidden'); // 隱藏 popup
//       popupImage.src = ''; // 清空圖片來源
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
    const figures = document.querySelectorAll('figure img');
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    const closePopup = document.getElementById('closePopup');
  
    function showPopup(src) {
      popupImage.src = src;
      popup.classList.remove('pointer-events-none');
      popup.classList.add('opacity-100');
      popup.classList.remove('opacity-0');
    }
  
    function hidePopup() {
      popup.classList.remove('opacity-100');
      popup.classList.add('opacity-0');
      // 等待過渡結束後再隱藏互動
      setTimeout(() => {
        popup.classList.add('pointer-events-none');
        popupImage.src = '';
      }, 300); // 與 Tailwind 的 duration-300 一致
    }
  
    // 點擊圖片顯示 popup
    figures.forEach(img => {
      img.addEventListener('click', function () {
        showPopup(this.src);
      });
    });
  
    // 點擊關閉按鈕隱藏 popup
    closePopup.addEventListener('click', hidePopup);
  
    // 點擊黑色背景隱藏 popup
    popup.addEventListener('click', function (e) {
      if (e.target === popup) hidePopup();
    });
  });
  