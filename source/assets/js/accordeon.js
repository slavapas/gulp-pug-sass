const accItems = document.querySelectorAll('.acc__title')

let activeItem;
accItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const currentItem =  e.currentTarget;

    //show new 
    currentItem.classList.add('acc__active');
    currentItem.nextElementSibling.classList.add('active');

    //hide old
    if (activeItem) {
        activeItem.classList.remove('acc__active');
        activeItem.nextElementSibling.classList.remove('active');
    }

    activeItem = (activeItem ===  currentItem) ? 0 :  currentItem;
  });
});

const allRows = document.querySelectorAll('.table__row');
allRows.forEach(row => {
  row.children[0].classList.add('table__cell--active')
})