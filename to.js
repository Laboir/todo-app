const cardBox = document.querySelector(".card-box");
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".input-box");

let newEl;

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please Enter the Value");
    newEl.remove();
  } else {
    AddElement();

    newEl.querySelector(".fa-trash").addEventListener("click", () => {
      newEl.remove();
    });

    newEl.addEventListener("click", function () {
      this.classList.toggle("checked");
    });
  }
});

function AddElement() {
  newEl = document.createElement("div");
  newEl.innerHTML = `<input type="checkbox"  id="check" class="check" />  
  <p class="text">${input.value}<p/>
  <i class="fa-solid fa-trash"></i> `;
  newEl.classList.add("card");
  cardBox.append(newEl);
  input.value = "";
}
