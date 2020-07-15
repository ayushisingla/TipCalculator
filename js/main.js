//click to call function
window.onload = function() {
    document.getElementById("result").style.display = "none";
}
document.getElementById("calculate").onclick = function() {
    calculateTip();
  };

function calculateTip() {
    var bill = document.getElementById("bill").value;
    var persons = document.getElementById("billDivider").value;
    var tipPercent = document.getElementById("ratings").value;

    var total = (bill*tipPercent)/persons;
    //round to two decimal places
    total = Math.round(total) / 100;
    //next line allows us to always have two digits after decimal point
    total = total.toFixed(2);

    document.getElementById("result").style.display="block";
    document.getElementById("calculator").style.display="none";
    document.getElementById("tip").innerHTML=total;
}