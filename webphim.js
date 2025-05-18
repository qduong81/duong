
document.addEventListener('DOMContentLoaded', function() {
  const moviesRow = document.getElementById('movies-row');
  const movies = document.querySelectorAll('.movie');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const movieWidth = movies[0].offsetWidth;
  const gap = 15; // Khớp với gap trong CSS
  let currentPosition = 0;
  
  // Tính toán vị trí tối đa có thể cuộn
  const maxPosition = -(movies.length * (movieWidth + gap)) + moviesRow.offsetWidth;

  // Hàm cập nhật vị trí và trạng thái nút
  function updateCarousel() {
    moviesRow.style.transform = `translateX(${currentPosition}px)`;
    
    // Ẩn/hiện nút điều hướng khi ở đầu/cuối
    prevButton.style.visibility = currentPosition >= 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentPosition <= maxPosition ? 'hidden' : 'visible';
  }

  // Xử lý sự kiện click nút
  prevButton.addEventListener('click', function() {
    if (currentPosition < 0) {
      currentPosition += movieWidth + gap;
      if (currentPosition > 0) currentPosition = 0;
      updateCarousel();
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentPosition > maxPosition) {
      currentPosition -= movieWidth + gap;
      if (currentPosition < maxPosition) currentPosition = maxPosition;
      updateCarousel();
    }
  });

  // Khởi tạo ban đầu
  updateCarousel();
});





function showRanking(type) {
            // Hide all ranking lists
            document.querySelectorAll('.ranking-list').forEach(list => {
                list.classList.remove('active');
            });
            
            // Deactivate all tabs
            document.querySelectorAll('.ranking-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Show selected ranking and activate its tab
            document.getElementById(`${type}-ranking`).classList.add('active');
            event.target.classList.add('active');
        }


// thanh search o dien thoai
function toggleSearchBar() {
    var searchBar = document.getElementById("searchBar");
    searchBar.classList.toggle("show");
  }



const moviesRow = document.getElementById('movies-row');
const movies = document.querySelectorAll('.movie');
const btnPrev = document.querySelector('.carousel-button.prev');
const btnNext = document.querySelector('.carousel-button.next');
let currentIndex = 0;

function getVisibleCount() {
  return window.innerWidth <= 600 ? 2 : 5;
}

function updateButtons() {
  const visibleCount = getVisibleCount();
  const maxIndex = movies.length - visibleCount;

  btnPrev.style.display = currentIndex === 0 ? 'none' : 'flex';
  btnNext.style.display = currentIndex >= maxIndex ? 'none' : 'flex';
}

function moveCarousel(direction) {
  const visibleCount = getVisibleCount();
  const maxIndex = movies.length - visibleCount;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const style = getComputedStyle(movies[0]);
  const width = movies[0].offsetWidth;
  const gap = parseInt(style.marginRight) || 15;

  const moveDistance = (width + gap) * currentIndex;
  moviesRow.style.transform = `translateX(-${moveDistance}px)`;

  updateButtons();
}

// Reset vị trí khi resize và cập nhật nút bấm
window.addEventListener('resize', () => {
  currentIndex = 0;
  moviesRow.style.transform = 'translateX(0)';
  updateButtons();
});

// Khởi tạo lần đầu
updateButtons();



function toggleSidebar() {
    document.getElementById("sidebar").classList.add("open");
    document.getElementById("overlay").classList.add("active");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("overlay").classList.remove("active");

    // Ẩn tất cả submenu khi đóng
    document.querySelectorAll(".submenu").forEach(el => el.classList.remove("open"));
  }

  function toggleSubmenu(id) {
    const submenu = document.getElementById("submenu-" + id);
    const plus = document.getElementById("plus-" + id);
    const isOpen = submenu.style.display === "block";

    submenu.style.display = isOpen ? "none" : "block";
    plus.textContent = isOpen ? "+" : "–";
  }



