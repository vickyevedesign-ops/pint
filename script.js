const beer = document.getElementById('beer');
const foam = document.getElementById('foam');
const message = document.getElementById('message');
const pourSound = document.getElementById('pourSound');
const bubbleSound = document.getElementById('bubbleSound');

let filled = false;

document.getElementById('pint').addEventListener('click', () => {
  if (filled) return;
  
  filled = true;
  pourSound.play();
  
  let height = 0;
  let y = 370;
  let foamHeight = 0;
  let foamY = 370;
  
  const fill = setInterval(() => {
    if (height >= 350) {
      clearInterval(fill);
      bubbleSound.play();
      message.textContent = 'Cheers!';
      return;
    }
    height += 5;
    y -= 5;
    foamHeight = Math.min(height / 4, 20);
    foamY = y;
    
    beer.setAttribute('height', height);
    beer.setAttribute('y', y);
    foam.setAttribute('ry', foamHeight);
    foam.setAttribute('cy', foamY);
  }, 50);
});
