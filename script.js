let size = 0

const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
  while (true) {
    size = parseInt(prompt('Please set the size of your new grid!'))
    
    if (isNaN(size)) {
      console.log('not number')
      continue
    }
    if (size < 1 || size > 100) {
      console.log('outsize')
      continue
    }

    const container = document.getElementById('container')
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    console.log('createGrid')
    createGrid(size)
    break
  }
})

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