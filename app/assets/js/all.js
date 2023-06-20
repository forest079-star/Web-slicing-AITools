// import Swiper from 'swiper';

// swiper
const swiperM1 = new Swiper('.person-wriper', {
  spaceBetween: 24,
  // 分頁
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // 左右箭頭
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // // 滾動條
  scrollbar: false,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// ai toolsnavbar
var swiperM2 = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  freeMode: {
    enabled: true,
    // sticky: true,
  },
  spaceBetween: 16,
  // loop:true,
  mousewheel: true,
  // mousewheel: {
  //   releaseOnEdges: true,
  // },
});

// 選擇元素
var btnMenu = document.getElementById('btn-menu');
var menuList = document.getElementById('menu-list');
var iconMenu = btnMenu.querySelector('.material-icons');

// 切換 menu-list 的顯示狀態的函數
function toggleMenu() {
  menuList.classList.toggle('hidden');
}

// 切換按鈕的圖標的函數
function toggleIcon() {
  if (iconMenu.textContent === 'menu') {
    iconMenu.textContent = 'close';
  } else {
    iconMenu.textContent = 'menu';
  }
}

// 為按鈕添加點擊事件
btnMenu.addEventListener('click', function () {
  toggleMenu();
  toggleIcon();
});

document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('#qaList li'));
  const buttons = items.map((item) => item.querySelector('button'));
  const contents = items.map((item) => item.querySelector('.overflow-hidden'));
  const icons = buttons.map((button) =>
    button.querySelector('.material-icons')
  );

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const content = contents[index];
      const icon = icons[index];

      if (content.classList.contains('h-fit')) {
        swapClasses(content, 'h-fit', 'h-0');
        icon.textContent = 'add';
      } else {
        swapClasses(content, 'h-0', 'h-fit');
        icon.textContent = 'remove';
      }
    });
  });
});

// 定義一個函數來簡化添加和移除類別的過程
function swapClasses(element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}

document.addEventListener('DOMContentLoaded', (event) => {
  // 找到 filterDropDownBtn 並添加事件監聽器
  document.getElementById('filterDropDownBtn').addEventListener('click', () => {
    // 找到 filterDropDown 並切換隱藏與顯示
    document.getElementById('filterDropDown').classList.toggle('hidden');
  });

  // 找到 sortDropDownBtn 並添加事件監聽器
  let sortDropDownBtn = document.getElementById('sortDropDownBtn');
  sortDropDownBtn.addEventListener('click', () => {
    // 找到 sortDropDown 並切換隱藏與顯示
    let sortDropDown = document.getElementById('sortDropDown');
    sortDropDown.classList.toggle('hidden');
  });

  // 找到 sortDropDown 中的每一個列表項目，並為它們添加事件監聽器
  let sortDropDownItems = document
    .getElementById('sortDropDown')
    .querySelectorAll('li');
  sortDropDownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      // 更新 sortDropDownBtn 的文字
      sortDropDownBtn.querySelector('p').textContent = event.target.textContent;
      // 隱藏 sortDropDown
      document.getElementById('sortDropDown').classList.add('hidden');
    });
  });
});

// back to top
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.getElementById('back-to-top');
  backToTop.addEventListener('click', handleBackToTopClick);
});

function handleBackToTopClick(event) {
  event.preventDefault();
  const options = { top: 0, behavior: 'smooth' };
  window.scrollTo(options);
}


// gsap

const boxes = ['ani-box1', 'ani-box2', 'ani-box3'].map((id) =>
  document.getElementsByClassName(id)
);

gsap
  .timeline({ repeat: -1, repeatDelay: 1 })
  .fromTo(
    boxes,
    { y: '100%' },
    { y: '0%', duration: 1, ease: 'power2.inOut', stagger: 0.2 }
  )
  .to(boxes, {
duration: 1,
    delay: 0.5,
    y: '-100%',
    ease: 'power2.inOut',
    stagger: 0.2,
  });

