const buttons = document.querySelector(".buttons");
const result = document.querySelector(".result");

let input = "";
buttons.addEventListener("click", (e) => {
  if (e.target.innerText == "C") {
    result.innerText = "0";
    input = "0";
  } else if (e.target.innerText == "Del") {
    input = input.slice(0, -1);
    result.innerText = input;
  } else if (e.target.innerText == "=") {
    try {
      result.innerText = eval(input);
      input = "0";
    } catch {
      result.innerText = "error";
      input = "0";
    }
  } else if (e.target.innerText.toString().length <= 3) {
    console.log(e.target.innerText);
    input += e.target.innerText;
    result.innerText = input;
  }
});
