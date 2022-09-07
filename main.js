const background = document.body.style.background = '#4040A8';
//const font = document.body.style.fontFamily = 'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif';
const font = document.body.style.fontFamily = 'Quicksand, sans-serif';

const heading = document.getElementById('heading');
heading.style.color = "#F5DD76";
heading.textContent = `Percent Diff Calculator`;

const sub_heading = document.getElementById('sub-heading');
sub_heading.style.color = "#A8922F";
sub_heading.textContent = "Calculate the percent difference between two numbers";

const answer = document.getElementById('answer');
answer.style.display = "none";
answer.style.backgroundColor = "white";
answer.style.fontSize = "large";
answer.style.margin = "12px";
answer.style.padding = "10px";

const answerlabel = document.getElementById('answerlabel')
answerlabel.style.display = "none";

function calculateDifference() {
  //calculate the percent difference between two numbers
  let num1 = document.getElementById('firstNumber').value;
  let num2 = document.getElementById('secondNumber').value;

  return num1 && num2 ? ((parseFloat(num2) - parseFloat(num1)) / parseFloat(num1)) : 0;

}

function showDifference() {
  //red text if diff is negative
  calculateDifference() < 0 ? answer.style.color = "red" :answer.style.color = "black";
  
  //un-hide answer and answer label
  answerlabel.style.display = "block";
  answer.style.display = "block";
  answer.textContent = `${(calculateDifference() * 100).toFixed(2)}%`;
  //window.alert(`The difference is ${(calculateDifference() * 100).toFixed(2)}%`);
}

function clearWindows() {
  //clear out entries and re-hide answer and answer label
  document.getElementById('firstNumber').value = null;
  document.getElementById('secondNumber').value = null;
  answer.style.display = "none";
  answerlabel.style.display = "none";

}
