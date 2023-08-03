// TODO: write your code here

const holes = document.querySelectorAll('.hole');

holes.forEach((hole) => hole.addEventListener('click', (e) => {
  console.log(e.currentTarget)
  setInterval(getIndex(), 800);
}));

function getIndex() {
  const index = Math.floor(Math.random() * 16)
  console.log(index)
  return index
}

const index = getIndex();


function changeHole(index) {

}