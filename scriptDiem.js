function calculate() {
  var semester1 = parseFloat(document.getElementById("semester1").value);
  var semester2 = parseFloat(document.getElementById("semester2").value);

  var average = (semester1 + semester2) / 2;
  document.getElementById("summarise").value = average.toFixed(2);
  var result = "";
  if (average >= 9) {
    result = "Học sinh giỏi";
  } else if (average >= 5) {
    result = "Học sinh khá";
  } else {
    result = "Học sinh yếu";
  }
  document.getElementById("result").innerText = result;
}

function resetForm() {
  document.getElementById("semester1").value = "";
  document.getElementById("semester2").value = "";
  document.getElementById("year").value = "";
  document.getElementById("summarise").value = "";
  document.getElementById("result").innerText = "";
}
