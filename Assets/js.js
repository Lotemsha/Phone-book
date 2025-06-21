"use strict"

function openModal() {
  document.getElementById('myModal').style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function closeModal(event) {
  const modal = document.getElementById("myModal");
  if (event.target === document.getElementById('myModal') || event.target === document.getElementById('closeModalBtn')) {
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
  }
}

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

let list = document.getElementById("list");
let ul = document.getElementById("ul");

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

  li.appendChild(img);
  li.appendChild(span);
  li.appendChild(infoBtn);
  li.appendChild(editBtn);
  li.appendChild(trashBtn);

  ul.appendChild(li);

  infoBtn.addEventListener("click", function () {
    document.getElementById("myModal").style.display = "flex";
    document.querySelector("#myModal h2").textContent = item.name;
    document.getElementById("modalImg").src = item.img;
    document.getElementById("phone").textContent = `Phone number: ${item.phone}`;
    document.getElementById("address").textContent = `Address: ${item.address}`;
    openModal();
    openModal();
  });

  trashBtn.addEventListener("click", function () {
    li.remove();
  });
});

list.appendChild(ul);


// const list1 = document.getElementById('list');

// list.addEventListener('click', function (e) {
//   const li = e.target.closest('li');
//   if (li && list.contains(li)) {
//     console.log('לחצת על:', li.textContent.trim());
//   }
// });







