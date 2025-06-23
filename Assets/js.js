"use strict"
// #region Modal
function openModal() {
  document.getElementById('myModal').style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function openEditModal() {
  document.getElementById("editModal").style.display = "flex";
  document.body.classList.add('no-scroll');
}

function closeModal(event) {
  const modal = document.getElementById("myModal");
  if (event.target === document.getElementById('myModal') || event.target === document.getElementById('closeModalBtn')) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}

function closeEditModal(event) {
  const modal = document.getElementById("editModal");
  if (event.target === document.getElementById('editModal') || event.target === document.getElementById('closeEditModalBtn')) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}
//#endregion
// #region List Array
let listArr = [
  {
    img: "./images/man1.jpg",
    name: "Jessy Cohen",
    phone: "052-3895166",
    address: "Tel-Aviv Hahagana 12 st",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png",
    type: "button"
  },
  {
    img: "./images/man2.jpg",
    name: "Rose Toledano",
    phone: "052-3212648",
    address: "Haifa Ruth 38",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png",
    type: "button"
  },
  {
    img: "./images/man3.jpg",
    name: "Leonardo Lavi",
    phone: "052-4616401",
    address: "Ramat-Gan Haaliya 45",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png",
    type: "button"
  }
];
//#endregion

let list = document.getElementById("list");
let ul = document.getElementById("ul");
const deleteAllContacts = document.getElementById("delete_all");
let currentEditing = null;

// #region Build Array
listArr.forEach((item) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  let span = document.createElement("span");

  let infoBtn = document.createElement("button");
  let editBtn = document.createElement("button");
  let trashBtn = document.createElement("button");

  let infoImg = document.createElement("img");
  let editImg = document.createElement("img");
  let trashImg = document.createElement("img");

  img.src = item.img;
  img.className = "images";

  span.textContent = item.name;
  span.className = "names";

  infoImg.src = item.imgBtnInfo;
  editImg.src = item.imgBtnEdit;
  trashImg.src = item.imgBtnTrash;

  infoBtn.type = item.type;
  infoBtn.className = "info";
  editBtn.className = "edit";
  trashBtn.className = "trash_bin";

  infoBtn.appendChild(infoImg);
  editBtn.appendChild(editImg);
  trashBtn.appendChild(trashImg);

  li.style.listStyle = "none";

  let buttonContainer = document.createElement("div");
  buttonContainer.className = "button-row"; // נשתמש בזה ב־CSS

  buttonContainer.appendChild(infoBtn);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(trashBtn);

  li.appendChild(img);
  li.appendChild(span);
  li.appendChild(buttonContainer);

  ul.appendChild(li);

  // info button function:
  infoBtn.addEventListener("click", function () {
    document.querySelector("#myModal h2").textContent = item.name;
    document.getElementById("modalImg").src = item.img;
    document.getElementById("phone").textContent = `Phone number: ${item.phone}`;
    document.getElementById("address").textContent = `Address: ${item.address}`;
    openModal();
  });

  // trash button function:
  trashBtn.addEventListener("click", function () {
    const confirmDelete = confirm(`Are you sure you want to delete ${item.name}?`);
    if (confirmDelete) {
      li.remove();
    }
  });

  // edit button function:
  editBtn.addEventListener("click", function () {
    document.getElementById("editName").value = item.name;
    document.getElementById("editPhone").value = item.phone;
    document.getElementById("editAddress").value = item.address;
    currentEditing = { item, span };
    openEditModal();
  });
});

// save information button function:
document.getElementById("saveEdit").addEventListener("click", function () {
  if (currentEditing) {
    const { item, span } = currentEditing;

    item.name = document.getElementById("editName").value;
    item.phone = document.getElementById("editPhone").value;
    item.address = document.getElementById("editAddress").value;

    span.textContent = item.name;

    closeEditModal({ target: document.getElementById("editModal") });
    currentEditing = null;
  }
});

list.appendChild(ul);

//#endregion
// #region Main buttons
deleteAllContacts.addEventListener('click', () => {
  const confirmDelete = confirm("Are you sure you want to delete ALL your contacts?");
  if (confirmDelete) {
    ul.innerHTML = "";
  }
})

//#endregion







