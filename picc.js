function changeMessage() {
    // Ẩn các phần tử cũ
    const wishBox = document.getElementById('khung');
    wishBox.style.display = 'block';

    image.addEventListener('transitionend', function() {
      image.style.opacity = 0;  // Làm ảnh biến mất
  });
    
}

  const images = document.querySelectorAll('.roll');

  // Tạo một thời gian delay khác nhau cho từng ảnh để chúng di chuyển độc lập
  images.forEach((image, index) => {
      // Thêm thời gian delay cho mỗi ảnh
      image.style.animationDelay = `${index * 1}s`;
  });