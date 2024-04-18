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
        "pageLength": 10          // Показувати по 10 рядків на сторінці
    });
});
  