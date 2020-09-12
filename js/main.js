let form = document.forms.form,
      input = form.textview,
      clear = document.querySelector('.clear');
      equal

function clean(input){
  input.value = '';
}value
function insert(num, input) {
  input.value += num;
}
function back(input){
  input = input.value.substring(0, input.value.length - 1);
}
function equal(input) {
  if(input.value){
    input.value = eval(input.value);
  }
}