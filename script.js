const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

let timesClicked = 0

loveMe.addEventListener('dblclick', (e) => {
  createHeart(e)
})

const createHeart = (e) => {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX
  const y = e.clientY

  const offsetLeft = e.target.offsetLeft
  const offsetTop = e.target.offsetTop

  const xInside = x - offsetLeft
  const yInside = y - offsetTop

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 1000)
}
