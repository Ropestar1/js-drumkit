function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //this line uses an attribute selector
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  /*
  if above line were to be written in previous js syntax, I think we need to create a variable,
  concatenate a string for the attribute selector (audio[data-key='"' + variable for e.keyCode + '""'])
  */

  if (!audio) return;

  audio.currentTime = 0; // sets the play time of the audio to 0, starting over
  audio.play()

  key.classList.add('playing'); //also can use toggle instead of add or remove
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
