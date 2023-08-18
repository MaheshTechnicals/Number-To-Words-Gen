let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let result = document.querySelector("body")

btn.addEventListener("click", () => {

  num2word()

})





let num2word = () => {
  const n2w = numberToWords
  if (input.value == "") {
    console.log("Please Enter Valid Number")
  }
  else {
    let convert = n2w.toWords(input.value)

    let a = document.createElement("div")
    a.classList = "box"
    a.innerText = convert

    result.appendChild(a)
    input.value = ""

  }





}