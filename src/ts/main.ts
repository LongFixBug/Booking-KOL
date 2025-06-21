// Import CSS cho trang chủ, Vite sẽ tự xử lý
import '../css/style.css';

// Import thư viện AOS và CSS của nó từ node_modules
import AOS from 'aos';
import 'aos/dist/aos.css';

// Khởi tạo AOS khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 100,
        disable: () => window.innerWidth < 768,
    });
});

// Thêm các mã TypeScript khác cho trang chủ ở đây
console.log('Landing page loaded with TypeScript!');

// Header scroll effect
const header = document.querySelector('.header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}