let btn = document.querySelector(".button-add");
let ctn = document.querySelector(".container");

const elementsToRender = [
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
  {
    className: "box",
    backgroundColor: "lightgreen",
  },
  {
    className: "circle",
    backgroundColor: "lightseagreen",
  },
];

btn.addEventListener("click", () => {
  for (let i = 0; i < elementsToRender.length; i++) {
    const boxData = elementsToRender[i];
    const boxDataName = boxData.className;
    const boxDataColor = boxData.backgroundColor;
    const newBox = document.createElement("div");
    newBox.classList.add(boxDataName);
    newBox.style.backgroundColor = boxDataColor;
    ctn.append(newBox);
    console.log(boxDataName);
    console.log(boxDataColor);
  }
});
