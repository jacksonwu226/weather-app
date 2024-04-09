document.addEventListener('DOMContentLoaded', function() {
  addWrapper();
});
function addWrapper(){
  const body = document.querySelector('body');
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', 'wrapper');
  body.append(wrapperDiv);
}