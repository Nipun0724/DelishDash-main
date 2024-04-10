list = JSON.parse(localStorage.getItem("list"));
let options = document.getElementById("options");
let sum = [];
let tableEl = document.getElementById("table-el");
for (let i = 0; i < list.length - 2; i = i + 3) {
  tableEl.innerHTML += `<tr><th>${i / 3 + 1}</th><th>${list[i + 1]}</th><th>${
    list[i]
  }</th><th>${list[i + 2]}</th><th>${list[i + 2] * list[i]}</th></tr>`;
  sum.push(list[i + 2] * list[i]);
}
let total = 0;
for (let j = 0; j < sum.length; j++) {
  total += sum[j];
}
document.getElementById("total-el").textContent = "Total : $" + total;
function order() {
  options.innerHTML = `<form id="paymentForm" action="">
        <label>Card Number:</label><br>
        <input type="text" id="cardNumber" name="cardNumber">
        <br><br>
        <label>Expiry Date:</label><br>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY">
        <br><br>
        <label>CVV:</label><br>
        <input type="text" id="cvv" name="cvv">
        <br><br>
        <label>Cardholder Name:</label><br>
        <input type="text" id="name" name="name">
        <br>
        <button type="submit" id="pay" onclick="refresh()">Pay Now</button>
    </form>`;
}
function refresh() {
  document.getElementById("cardNumber").value = "";
  document.getElementById("expiryDate").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("name").value = "";
  options.innerHTML = `<form id="paymentForm" action="">
        <label>Card Number:</label><br>
        <input type="text" id="cardNumber" name="cardNumber">
        <br><br>
        <label>Expiry Date:</label><br>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY">
        <br><br>
        <label>CVV:</label><br>
        <input type="text" id="cvv" name="cvv">
        <br><br>
        <label>Cardholder Name:</label><br>
        <input type="text" id="name" name="name">
        <br>
        <button type="submit" id="pay" onclick="refresh()">Pay Now</button>
    </form>`;
  localStorage.clear();
}
