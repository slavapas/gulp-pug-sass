const allRows = document.querySelectorAll('.table__row');
allRows.forEach(row => {
  row.children[0].classList.add('table__cell--active')
})