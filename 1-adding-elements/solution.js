let btn = document.querySelector(".button-add");
let ctn = document.querySelector(".container");
let box = document.querySelector(".box");
let body = document.body;
let div = document.createElement("div");

btn.addEventListener("click", (e) => {
  if (ctn === false) {
    let newCont = document.createElement("ctn");
    body.append(newCont);
  } else {
    let newBox = document.createElement("div");
    ctn.append(newBox);
    newBox.classList.add("box");
    console.log("lol");
  }
});
