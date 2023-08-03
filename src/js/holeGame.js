const holes = [...document.querySelectorAll('.hole')];

function game() {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-goblin',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1+ Math.random() * 16 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
}
game()
