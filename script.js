
function createGrid(size) {
  const container = document.getElementById('container')
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div')
    row.className = 'row'
    container.appendChild(row)
    for (let i = 0; i < size; i++) {
      const col = document.createElement('div')
      col.className = 'col'
      col.addEventListener('mouseenter', () => {
        col.classList.add('active')
      })
      row.appendChild(col)
    }
  }
}

createGrid(16)