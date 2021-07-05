let btn = document.querySelector(".button-add");
let ctn = document.querySelector(".container");

btn.addEventListener("click", () => {
  let newBox = document.createElement("div");
  ctn.append(newBox);
  newBox.classList.add("box");

  newBox.addEventListener("click", () => {
    if (confirm("Delete this box?")) {
      newBox.remove();
    }
  });
});
