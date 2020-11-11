const inputElem = document.getElementById('gauge'); 
const currentValueElem = document.getElementById('current-value'); 


const setCurrentValue = (val) => {
  currentValueElem.innerText = val;
}


const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value);
}

window.onload = (inputElem) => {
  inputElem.addEventListener('input', rangeOnChange); 
  setCurrentValue(inputElem.value); 
}