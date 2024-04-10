let list = [];
let count1 = 0;
let q1El = document.getElementById("q1-el");
let m1El = document.getElementById("m1-el");
let p1El = document.getElementById("p1-el");
function add1() {
  count1 = 1;
  q1El.innerHTML = `<button id="m1-el" onclick="minus1()" class="button1">-</button>&emsp;<span id="c1-el">${count1}</span>&emsp;<button id="p1-el" onclick="plus1()" class="button1">+</button><br><button id="cart1-btn" onclick="addcart1()" class="button1">Add to Cart</button>`;
}
function minus1() {
  count1--;
  document.getElementById("c1-el").textContent = count1;
}
function plus1() {
  count1++;
  document.getElementById("c1-el").textContent = count1;
}
function addcart1() {
  list.push(count1);
  list.push("Taco");
  list.push(499);
  localStorage.setItem("list", JSON.stringify(list));
}
let count2 = 0;
let q2El = document.getElementById("q2-el");
let m2El = document.getElementById("m2-el");
let p2El = document.getElementById("p2-el");
function add2() {
  count2 = 1;
  q2El.innerHTML = `<button id="m2-el" onclick="minus2()" class="button1">-</button>&emsp;<span id="c2-el">${count2}</span>&emsp;<button id="p2-el" onclick="plus2()" class="button1">+</button><br><button id="cart2-btn" onclick="addcart2()" class="button1">Add to Cart</button>`;
}
function minus2() {
  count2--;
  document.getElementById("c2-el").textContent = count2;
}
function plus2() {
  count2++;
  document.getElementById("c2-el").textContent = count2;
}
function addcart2() {
  list.push(count2);
  list.push("Steak");
  list.push(299);
  localStorage.setItem("list", JSON.stringify(list));
}
let count3 = 0;
let q3El = document.getElementById("q3-el");
let m3El = document.getElementById("m3-el");
let p3El = document.getElementById("p3-el");
function add3() {
  count3 = 1;
  q3El.innerHTML = `<button id="m3-el" onclick="minus3()" class="button1">-</button>&emsp;<span id="c3-el">${count3}</span>&emsp;<button id="p3-el" onclick="plus3()" class="button1">+</button><br><button id="cart3-btn" onclick="addcart3()" class="button1">Add to Cart</button>`;
}
function minus3() {
  count3--;
  document.getElementById("c3-el").textContent = count3;
}
function plus3() {
  count3++;
  document.getElementById("c3-el").textContent = count3;
}
function addcart3() {
  list.push(count3);
  list.push("Soup");
  list.push(399);
  localStorage.setItem("list", JSON.stringify(list));
}
let count4 = 0;
let q4El = document.getElementById("q4-el");
let m4El = document.getElementById("m4-el");
let p4El = document.getElementById("p4-el");
function add4() {
  count4 = 1;
  q4El.innerHTML = `<button id="m4-el" onclick="minus4()" class="button1">-</button>&emsp;<span id="c4-el">${count4}</span>&emsp;<button id="p4-el" onclick="plus4()" class="button1">+</button><br><button id="cart4-btn" onclick="addcart4()" class="button1">Add to Cart</button>`;
}
function minus4() {
  count4--;
  document.getElementById("c4-el").textContent = count4;
}
function plus4() {
  count4++;
  document.getElementById("c4-el").textContent = count4;
}
function addcart4() {
  list.push(count4);
  list.push("Salad");
  list.push(499);
  localStorage.setItem("list", JSON.stringify(list));
}
let count5 = 0;
let q5El = document.getElementById("q5-el");
let m5El = document.getElementById("m5-el");
let p5El = document.getElementById("p5-el");
function add5() {
  count5 = 1;
  q5El.innerHTML = `<button id="m5-el" onclick="minus5()" class="button1">-</button>&emsp;<span id="c5-el">${count5}</span>&emsp;<button id="p5-el" onclick="plus5()" class="button1">+</button><br><button id="cart5-btn" onclick="addcart5()" class="button1">Add to Cart</button>`;
}
function minus5() {
  count5--;
  document.getElementById("c5-el").textContent = count5;
}
function plus5() {
  count5++;
  document.getElementById("c5-el").textContent = count5;
}
function addcart5() {
  list.push(count5);
  list.push("Fried Rice");
  list.push(399);
  localStorage.setItem("list", JSON.stringify(list));
}
let count6 = 0;
let q6El = document.getElementById("q6-el");
let m6El = document.getElementById("m6-el");
let p6El = document.getElementById("p6-el");
function add6() {
  count6 = 1;
  q6El.innerHTML = `<button id="m6-el" onclick="minus6()" class="button1">-</button>&emsp;<span id="c6-el">${count6}</span>&emsp;<button id="p6-el" onclick="plus6()" class="button1">+</button><br><button id="cart6-btn" onclick="addcart6()" class="button1">Add to Cart</button>`;
}
function minus6() {
  count6--;
  document.getElementById("c6-el").textContent = count6;
}
function plus6() {
  count6++;
  document.getElementById("c6-el").textContent = count6;
}
function addcart6() {
  list.push(count6);
  list.push("Pasta");
  list.push(599);
  localStorage.setItem("list", JSON.stringify(list));
}
let count7 = 0;
let q7El = document.getElementById("q7-el");
let m7El = document.getElementById("m7-el");
let p7El = document.getElementById("p7-el");
function add7() {
  count7 = 1;
  q7El.innerHTML = `<button id="m7-el" onclick="minus7()" class="button1">-</button>&emsp;<span id="c7-el">${count7}</span>&emsp;<button id="p7-el" onclick="plus7()" class="button1">+</button><br><button id="cart7-btn" onclick="addcart7()" class="button1">Add to Cart</button>`;
}
function minus7() {
  count7--;
  document.getElementById("c7-el").textContent = count7;
}
function plus7() {
  count7++;
  document.getElementById("c7-el").textContent = count7;
}
function addcart7() {
  list.push(count7);
  list.push("Lobster");
  list.push(49);
  localStorage.setItem("list", JSON.stringify(list));
}
let count8 = 0;
let q8El = document.getElementById("q8-el");
let m8El = document.getElementById("m8-el");
let p8El = document.getElementById("p8-el");
function add8() {
  count8 = 1;
  q8El.innerHTML = `<button id="m8-el" onclick="minus8()" class="button1">-</button>&emsp;<span id="c8-el">${count8}</span>&emsp;<button id="p8-el" onclick="plus8()" class="button1">+</button><br><button id="cart8-btn" onclick="addcart8()" class="button1">Add to Cart</button>`;
}
function minus8() {
  count8--;
  document.getElementById("c8-el").textContent = count8;
}
function plus8() {
  count8++;
  document.getElementById("c8-el").textContent = count8;
}
function addcart8() {
  list.push(count8);
  list.push("Chicken");
  list.push(499);
  localStorage.setItem("list", JSON.stringify(list));
}
