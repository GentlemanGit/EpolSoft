const NUMBER = document.querySelector(".number");
const CONVERTED = document.querySelector(".converted");
const CHECKBOXES = document.querySelectorAll(".checkbox");

let SecondNumderFirstOctet = [];
let FirstNumderSecondOctet = [];
let SecondNumderSecondOctet = [];

function checkChecbox() {
  CHECKBOXES.forEach((item, index) => {
    if (item.checked == true) {
      if (index < 4) SecondNumderFirstOctet.push(item);
      else if (index < 11) FirstNumderSecondOctet.push(item);
      else SecondNumderSecondOctet.push(item);
    }
  });
}

function checkOddEvenNumber(number) {
  if (number.value) {
    return number.value % 2 == 0 ? "H'0" : "H'8";
  } else return "";
}

function summationBinaryNumner (OctetArray) {
  let sumNumbers = "0000";

  for (let i = 0; OctetArray.length > i; i++) {
    let current = sumNumbers.length - 1;
    let next = OctetArray[i].value.length - 1;
    let carry = 0;
    let sum = "";

    while (current >= 0 || next >= 0) {
      let x = current < 0 ? 0 : +sumNumbers[current];
      let y = next < 0 ? 0 : +OctetArray[i].value[current];
      let val = x + y + carry;

      carry = val > 1 ? 1 : 0;
      sum = (val % 2) + sum;

      current--;
      next--;
    }
    sumNumbers = carry > 0 ? carry + sum : sum;
  }
  return sumNumbers;
};

function Output() {
  checkChecbox();
  let FinalyNumber = `${checkOddEvenNumber(NUMBER)}${parseInt(
    summationBinaryNumner(SecondNumderFirstOctet),
    2
  )}${parseInt(summationBinaryNumner(SecondNumderSecondOctet), 2)
    .toString(16)
    .toUpperCase()}${parseInt(summationBinaryNumner(FirstNumderSecondOctet), 2)
    .toString(16)
    .toUpperCase()}`;
  CONVERTED.value = FinalyNumber;
  if (!NUMBER.value) {
    CONVERTED.value = "";
  }
  SecondNumderFirstOctet = [];
  FirstNumderSecondOctet = [];
  SecondNumderSecondOctet = [];
}

CHECKBOXES.forEach((c) => {
  c.addEventListener("click", Output);
});
NUMBER.oninput = Output;
