const num = document.getElementById('num');
const add = document.getElementById('add');
const remove = document.getElementById('remove');
let count = 0;

add.addEventListener('click', () => {
  count++;
  num.textContent = count;
});

remove.addEventListener('click', () => {
    count--;
    num.textContent = count;
  });
