const holes = [...document.querySelectorAll('.hole')];
holes.forEach((hole) => hole.addEventListener('click', () => {
  console.log('click');
}));
function game() {
  let activeHole = 1;

  const getHole = (index) => document.getElementById(`hole${index}`);
  const deactivateHole = (index) => { getHole(index).className = 'hole'; };
  const activateHole = (index) => { getHole(index).className = 'hole hole_has-goblin'; };
  const next = () => setTimeout(() => {
    deactivateHole(activeHole);
    activeHole = Math.floor(1 + Math.random() * 16);
    activateHole(activeHole);
    next();
  }, 800);

  next();
}
game();
