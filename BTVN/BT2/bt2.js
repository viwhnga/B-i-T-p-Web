let productCount = 0; // Đếm số sản phẩm
let totalAmount = 0; // Tổng số tiền ban đầu
// let cho phép chúng ta cập nhật giá trị của biến chứ không cho phép chúng ta tái khái báo lại biến đó
function addProduct() {
  const name = document.getElementById("productName").value;
  const quantity = parseInt(document.getElementById("productQuantity").value);
  const price = parseInt(document.getElementById("productPrice").value);

  if (name && quantity > 0 && price > 0) {
    productCount++;

    const subtotal = quantity * price;
    totalAmount += subtotal;

    const table = document
      .getElementById("productTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = productCount;
    newRow.insertCell(1).innerText = name;
    newRow.insertCell(2).innerText = quantity;
    newRow.insertCell(3).innerText = price + "$";
    newRow.insertCell(4).innerText = subtotal + "$";

    document.getElementById("totalAmount").innerText = totalAmount;

    document.getElementById("productName").value = "";
    document.getElementById("productQuantity").value = "";
    document.getElementById("productPrice").value = "";
  } else {
    alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
  }
}
