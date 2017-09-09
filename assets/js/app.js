window.addEventListener('keydown', function(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //this line uses an attribute selector
  /*
  if above line were to be written in previous js syntax, I think we need to create a variable,
  concatenate a string for the attribute selector (audio[data-key='"' + variable for e.keyCode + '""'])
  */

  if (!audio) return;

  audio.currentTime = 0; // sets the play time of the audio to 0, starting over
  audio.play()
  console.log(audio);
});
