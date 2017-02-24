// const Calculator = function (options) {
//   this.display = "0";
//
// }

document.querySelector('.calculator-container').addEventListener('click', function(event) {

  const display = document.querySelector('.calculator-display');
  const target = event.target || event.srcElement
  display.dataset.sum = target.dataset.value;

});
