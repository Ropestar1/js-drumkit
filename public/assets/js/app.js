window.addEventListener('keydown', function(e) {
  // console.log(e);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //this line uses an attribute selector
  /*
  if above line were to be written in previous js syntax, I think we need to create a variable,
  concatenate a string for the attribute selector (audio[data-key='"' + variable for e.keyCode + '""'])
  */
  console.log(audio);
});
