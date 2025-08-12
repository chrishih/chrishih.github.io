document.addEventListener('DOMContentLoaded', function () {
  const figures = document.querySelectorAll('figure img'); // 選取所有 <figure> 裡的 <img>
  const popup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage');
  const closePopup = document.getElementById('closePopup');

  // 點擊圖片顯示 popup
  figures.forEach(img => {
    img.addEventListener('click', function () {
      popupImage.src = this.src; // 設置 popup 的圖片來源
      popup.classList.add('active'); // 顯示 popup，觸發淡入效果
    });
  });

  // 點擊關閉按鈕隱藏 popup
  closePopup.addEventListener('click', function () {
    popup.classList.remove('active'); // 隱藏 popup，觸發淡出效果
    setTimeout(() => {
      popupImage.src = ''; // 清空圖片來源
    }, 300); // 等待淡出動畫完成後清空
  });

  // 點擊黑色背景隱藏 popup
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.classList.remove('active'); // 隱藏 popup，觸發淡出效果
      setTimeout(() => {
        popupImage.src = ''; // 清空圖片來源
      }, 300); // 等待淡出動畫完成後清空
    }
  });
});