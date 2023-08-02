// TODO: write your code here

const holes = document.querySelectorAll('.hole');

holes.forEach(hole => hole.addEventListener('click', () => {
  setInterval(hole.classList.toggle('hole_has-goblin'), 1000)
}))
