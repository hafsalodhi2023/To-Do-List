// const input = document.querySelector("#input");
// const toDoList = document.querySelector("#to_do_list");
// const submit = document.querySelector("#add_item");

// // submit.onclick = () => {
// //   add_Item();
// // };

// input.onkeyup = (event) => {
//   if (event.key == "Enter") {
//     add_Item();
//   } else {
//   }
// };

// var add_Item = () => {
//   var parentDiv = document.createElement("div");
//   var childDiv = document.createElement("div");
//   var trashBin = document.createElement("i");
//   var checkBox = document.createElement("i");

//   parentDiv.className = "item";

//   parentDiv.appendChild(childDiv);

//   parentDiv.innerHTML = "<div>" + input.value + "</div>";

//   trashBin.className = "fa-sharp fa-solid fa-trash";
//   trashBin.style.color = "lightgray";
//   childDiv.appendChild(trashBin);
//   trashBin.onclick = () => {
//     parentDiv.remove();
//   };

//   checkBox.className = "fa-sharp fa-solid fa-check-to-slot";
//   checkBox.style.color = "lightgray";
//   childDiv.appendChild(checkBox);
//   checkBox.onclick = () => {
//     checkBox.style.color = "green";
//   };
// };

document.querySelector("#input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const input = document.querySelector("#input");
    addItem(input.value);
  }
});

document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = (input) => {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");

  item.className = "item";
  text.textContent = input;

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "lightgray";
  checkIcon.addEventListener("click", () => {
    checkIcon.style.color = "limegreen";
  });
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "darkgray";
  trashIcon.addEventListener("click", () => {
    item.remove();
  });
  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
};
