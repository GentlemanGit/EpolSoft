const NUMBER = document.querySelector(".number");
const CONVERTED = document.querySelector(".converted");
let DoubleNumber = "";
function checkOddEvenNumber(number) {
  if (number.value) {
    return number.value % 2 == 0 ? "00000000" : "10000000";
  } else return "";
}

NUMBER.oninput = function () {
  DoubleNumber = checkOddEvenNumber(NUMBER);
  CONVERTED.value = "H'" + parseInt(DoubleNumber, 2);
};




let addBinary = (a, b) => {
  // handle corner cases when either input is empty
  if (a === null || a.length === 0) return b;
  if (b === null || b.length === 0) return a;

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let sum = '';

  while (i >=0 || j >= 0) {
    let x = i < 0 ? 0 : +a[i];
    let y = j < 0 ? 0 : +b[i];
    let val = x + y + carry;

    carry = val > 1 ? 1 : 0;
    sum = val % 2 + sum;

    i--;
    j--;
  }

  return carry > 0 ? carry + sum : sum;
};
console.log(addBinary ('10000000', '10000000'));