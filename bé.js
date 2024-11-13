// Đổi chữ sau mỗi 5 giây với hiệu ứng fade-out và fade-in
const textElement = document.getElementById('text');
const texts = ['Em bé ngoan xinh iu của anh ơiii', 'Em bé biết gì hăm', '❤️Anh yêuu emmm❤️'];
let currentIndex = 0;

function changeText() {
  textElement.classList.remove('fade-in');
  textElement.classList.add('fade-out');

  // Sau khi chữ đã biến mất, thay đổi nội dung và áp dụng hiệu ứng fade-in
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % texts.length;
    textElement.textContent = texts[currentIndex];
    textElement.classList.remove('fade-out');
    textElement.classList.add('fade-in');
  }, 2000); // Thời gian fade-out là 2 giây
}

// Thực hiện thay đổi chữ sau mỗi 5 giây
setInterval(changeText, 5000);

function changeMessage() {
  // Ẩn các phần tử cũ
  document.querySelector('.message-container').style.display = 'none';
  document.querySelector('.btn').style.display = 'none';
  
  // Hiển thị lời chúc mới
  const wishBox = document.getElementById('wishBox');
  wishBox.style.display = 'block';
}