"use strict"



function openModal() {
  document.getElementById('myModal').style.display = 'flex';
}

function closeModal(event) {
  if (event.target === document.getElementById('myModal') || event.target === document.getElementById('closeModalBtn')) {
    document.getElementById('myModal').style.display = 'none';
  }
  // document.getElementById('myModal').style.display = 'none';

}


let listArr = [
  {
    img: "./images/man1.jpg",
    name: "Jessy Cohen",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png",
    type: "button"
  },
  {
    img: "./images/man2.jpg",
    name: "Rose Toledano",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png",
    type: "button"
  },
  {
    img: "./images/man3.jpg",
    name: "Leonardo Lavi",
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

  trashBtn.addEventListener("click", function () {
    li.remove();
  });



});


list.appendChild(ul);










