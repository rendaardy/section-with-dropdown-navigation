const dropdownMenuFeatures = document.querySelectorAll('.nav-item');

for (const dropdown of dropdownMenuFeatures) {
  dropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });
}

document.body.addEventListener('click', () => {
  for (const dropdown of dropdownMenuFeatures) {
    dropdown.classList.remove('show');
  }
});

const header = document.querySelector('.header');
const hamburger = document.querySelector('.hamburger');
const backdrop = document.querySelector('.backdrop');

hamburger.addEventListener('click', () => {
  header.classList.toggle('nav-open');

  if (header.classList.contains('nav-open')) {
    backdrop.style.display = 'block';
  } else {
    backdrop.style.display = 'none';
  }
});

