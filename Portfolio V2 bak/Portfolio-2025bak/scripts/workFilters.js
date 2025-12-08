// document.addEventListener('DOMContentLoaded', function () {
//   const filterButtons = document.querySelectorAll('.filter-btn');
//   const workGrid = document.querySelector('.grid');
//   const workCards = document.querySelectorAll('.work-card');

//   filterButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const filter = this.getAttribute('data-filter');

//       // 更新按鈕樣式
//       filterButtons.forEach(btn => btn.classList.remove('active'));
//       this.classList.add('active');

//       // 計算當前 grid 的高度
//       const currentHeight = workGrid.offsetHeight;

//       // 隱藏 grid (淡出效果)
//       workGrid.style.height = `${currentHeight}px`; // 設置當前高度
//       workGrid.classList.add('hidden');

//       setTimeout(() => {
//         // 篩選作品
//         workCards.forEach(card => {
//           if (filter === 'all' || card.getAttribute('data-category') === filter) {
//             card.classList.remove('hidden'); // 顯示作品
//           } else {
//             card.classList.add('hidden'); // 隱藏作品
//           }
//         });

//         // 計算篩選後的 grid 高度
//         const newHeight = Array.from(workCards)
//           .filter(card => !card.classList.contains('hidden'))
//           .reduce((totalHeight, card) => totalHeight + card.offsetHeight, 0);

//         // 設置新的高度並顯示 grid (淡入效果)
//         workGrid.style.height = `${newHeight}px`;
//         workGrid.classList.remove('hidden');
//       }, 500); // 等待淡出完成後再更新內容
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workGrid = document.querySelector('.grid');
  const workCards = document.querySelectorAll('.work-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      // 更新按鈕樣式
      filterButtons.forEach(btn => btn.classList.remove('active')); // 移除其他按鈕的 active 樣式
      this.classList.add('active'); // 為當前按鈕添加 active 樣式

      // 隱藏 grid section
      workGrid.style.opacity = '0';
      workGrid.style.transition = 'opacity 0.5s ease';

      setTimeout(() => {
        // 篩選作品
        workCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden'); // 顯示作品
          } else {
            card.classList.add('hidden'); // 隱藏作品
          }
        });

        // 顯示 grid section
        workGrid.style.opacity = '1';
      }, 500); // 等待淡出完成後重新排列
    });
  });
});
