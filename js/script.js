$(document).ready(function() {
    $('.menu-nav__link').click(function(e) {
      e.preventDefault(); // Заборона переходу за посиланням
      $('.menu-nav__link').removeClass('active'); // Видалення класу з усіх елементів
      $(this).addClass('active'); // Додавання класу до поточного елементу
    });
  });

  $(document).ready(function() {
    $('#myTable').DataTable({
        "paging": true,           // Увімкнути пагінацію
        "pageLength": 8, // Показувати по 10 рядків на сторінці
    });
});
  

document.addEventListener('DOMContentLoaded', function() {
  const truncatedElements = document.querySelectorAll('.text-truncate');

  truncatedElements.forEach(element => {
      element.addEventListener('click', function() {
          // Перевірка, чи весь текст відображений
          if (this.style.overflow === 'hidden') {
              this.style.overflow = 'visible';  // Розгортаємо текст
              this.style.whiteSpace = 'normal'; // Дозволяємо перенос тексту
          } else {
              this.style.overflow = 'hidden';   // Сховати текст знову
              this.style.whiteSpace = 'nowrap'; // Заборонити перенос тексту
          }
      });
  });
});
