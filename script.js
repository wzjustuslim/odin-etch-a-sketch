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

function randomColor() {
  let color = ''
  const rng = Math.floor(Math.random() * 7)
  switch (rng) {
    case 0:
      color = 'red'
      break;
    case 1:
      color = 'orange'
      break
    case 2:
      color = 'yellow'
      break
    case 3:
      color = 'green'
      break
    case 4:
      color = 'blue'
      break
    case 5:
      color = 'indigo'
      break
    case 6:
      color = 'violet'
      break
    
    default:
      break;
  }
  return color
}

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
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
        const hasColor = Array.from(col.classList).some(className => colors.includes(className))
        if (!hasColor) {
          col.classList.add(randomColor())
        }
      })
      row.appendChild(col)
    }
  }
}



createGrid(16)