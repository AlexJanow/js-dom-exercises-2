const btn = document.querySelector(".button-add");
const ctn = document.querySelector(".container");

btn.addEventListener("click", () => {
  const newBox = document.createElement("div");
  ctn.append(newBox);
  newBox.classList.add("box");

  newBox.addEventListener("dblclick", () => {
    if (confirm("Delete this box?")) {
      newBox.remove();
    }
  });

  const colInput = document.createElement("input");
  colInput.type = "color";
  colInput.value = "#00ff00";
  colInput.addEventListener("change", () => {
    newBox.style.background = colInput.value;
  });

  newBox.append(colInput);
});
