
function createGrid(size) {
  const container = document.getElementById('container')
  for (let i = 0; i < size; i++) {
    const row = document.createElement('div')
    row.className = 'row'
    container.appendChild(row)
    // for (let i = 0; i < size; i++) {

    // }
  }
}

createGrid(16)