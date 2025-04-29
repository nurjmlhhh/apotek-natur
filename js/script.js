  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('show');
  });


// Carousel otomatis
let index = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Ganti slide setiap 3 detik

// Klik kategori
function kategoriKlik(namaKategori) {
  alert('Anda memilih kategori: ' + namaKategori);
}

// Navigasi bawah aktif
function pilihMenu(element) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

// Fungsi sederhana buat search produk
function searchProduk() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const produkItems = document.querySelectorAll('.produk-item');
  
  produkItems.forEach(item => {
    const namaProduk = item.textContent.toLowerCase();
    if (namaProduk.includes(input)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Fungsi pilih menu (optional untuk active class)
function pilihMenu(element) {
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  element.classList.add('active');
}

const gambar = document.getElementById('gambar-berganti');
const gambarList = ['/image/diskon.png', 'image/apoteker2.jpeg', '/image/resep.jpeg', '/image/doktor.jpeg'];
let a = 0;

setInterval(() => {
  a = (a + 1) % gambarList.length;
  gambar.src = gambarList[a];
}, 2000); // Ganti setiap 1.5 detik


// Back to Top
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'flex';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Testimoni Slider
const testimonialTexts = [
  '"Pelayanan cepat dan terpercaya! Apotek Natur terbaik."',
  '"Belanja obat herbal online jadi gampang dan cepat!"',
  '"Respon customer service-nya ramah dan profesional."'
];

let testimonialIndex = 0;
const testimonialText = document.querySelector('.testimonial-text');

setInterval(() => {
  testimonialIndex = (testimonialIndex + 1) % testimonialTexts.length;
  testimonialText.textContent = testimonialTexts[testimonialIndex];
}, 5000);

// Toggle Modal
const loginLink = document.querySelector('.menu a[href="#"]:last-child'); // Login link
const modal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close modal when clicking outside the box
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
