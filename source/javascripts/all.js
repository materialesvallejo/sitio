/*

  Product Card Interaction

*/
//  Cache Product Card nodes
const $cards = document.getElementsByClassName('js-card');
//  Add an Event Listener for each Product Card
for (var c = 0; c < $cards.length; c++) {
  $cards[c].addEventListener('click', function(){
    updateCard(this);
  });
}
//  Dispatches Product Card styling-animation functions: rotate and fade
function updateCard($card) {
  //  Cache arrow node
  var $arrow = $card.getElementsByClassName('js-rotate')[0];
  //  Rotate arrow
  rotate($arrow);
  //  Cache image and detail nodes
  var $image = $card.getElementsByClassName('js-fade')[0];
  var $detail = $card.getElementsByClassName('js-fade')[1];
  //  If image is visible, fade image and delay-fade detail
  if (hasClass($image, 'is-visible')) {
    fade($image);
    setTimeout(function(){
      fade($detail)
    }, 225);
  //  Else, fade detail and delay-fade image
  } else {
    fade($detail);
    setTimeout(function(){
      fade($image)
    }, 225);
  }
}
//  Toggle rotation classes
function rotate($node) {
  $node.classList.toggle('is-up');
  $node.classList.toggle('is-down');
}
//  Toggle fade classes
function fade($node) {
  $node.classList.toggle('is-visible');
  $node.classList.toggle('is-hidden');
}
//  Returns Boolean indicating presence of class in element
function hasClass($node, cls) {
  return (' ' + $node.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
