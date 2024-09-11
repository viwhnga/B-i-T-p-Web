var id = 0;
function sell() {
  id++;
  var pname = productForm.pname.value;
  var qty = productForm.qty.value;
  var price = productForm.up.value;
  var dc = productForm.dc.value;
  var sub = qty * price * (1 - dc / 100);
  var row = "<tr>";
  row += "<td>" + id + "</td>";
  row += "<td>" + pname + "</td>";
  row += "<td>" + qty + "</td>";
  row += "<td>$" + price + "</td>";
  row += "<td>$" + dc + "</td>";
  row += "<td>$" + sub + "</td>";
  row += "</tr>";
  document.getElementById("tbl").innerHTML += row;
}
