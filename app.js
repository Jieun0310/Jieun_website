const openBtn = document.querySelector('.open_btn');
const closeBtn = document.querySelector('.cancel');
const submitBtn = document.querySelector('.submit');
const dimm = document.querySelector('.dimm');
const modal = document.querySelector('.modal');

openBtn.addEventListener('click', function () {
  dimm.classList.add('show');
  modal.classList.add('show');
});

closeBtn.addEventListener('click', function () {
  dimm.classList.remove('show');
  modal.classList.remove('show');
});

submitBtn.addEventListener('click', function () {
  dimm.classList.remove('show');
  modal.classList.remove('show');
});

dimm.addEventListener('click', function () {
  dimm.classList.remove('show');
  modal.classList.remove('show');
});
