"use strict"
// #region Modal open and close 
function openModal() {
  document.getElementById('myModal').style.display = 'flex';
  document.body.classList.add('no-scroll');
}

function openEditModal() {
  document.getElementById("editModal").style.display = "flex";
  document.body.classList.add('no-scroll');
}

function openAddModal() {
  document.getElementById("addModal").style.display = "flex";
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

function closeAddModal(event) {
  const modal = document.getElementById("addModal");
  if (event.target === document.getElementById('addModal') || event.target === document.getElementById('closeAddModalBtn')) {
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
    email: "JessyC@gmail.com",
    comment: "My best friend!",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png"
  },
  {
    img: "./images/man2.jpg",
    name: "Rose Toledano",
    phone: "052-3212648",
    address: "Haifa Ruth 38",
    email: "RoseToledano@gmail.com",
    comment: "Do not answer!",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png"
  },
  {
    img: "./images/man3.jpg",
    name: "Leonardo Lavi",
    phone: "052-4616401",
    address: "Ramat-Gan Haaliya 45",
    email: "Leo@gmail.com",
    comment: "Friend from school",
    imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
    imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
    imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png"
  }
];
//#endregion
//#region global parameters
// Creating a list :
let list = document.getElementById("list");
// Creating the ul:
let ul = document.getElementById("ul");

// Creating the top buttons
const deleteAllContacts = document.getElementById("delete_all");
const addNewContact = document.getElementById("addNewContact");

let currentEditing = null;

// Creating the people count of the top bar as peopleCount :
const peopleCount = document.getElementById("peopleCount");

// Creating the top search bar as top search input :
let topBarSearch = document.getElementById("search_box");

// empty massage:
const emptyMassege = document.getElementById("emptyMessage");

//#endregion
// #region Build Array
listArr.sort((a, b) => a.name.localeCompare(b.name));
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

  infoBtn.className = "info";
  editBtn.className = "edit";
  trashBtn.className = "trash_bin";

  infoBtn.appendChild(infoImg);
  editBtn.appendChild(editImg);
  trashBtn.appendChild(trashImg);

  let buttonContainer = document.createElement("div");
  buttonContainer.className = "button-row";

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
    document.getElementById("modalPhone").textContent = `Phone number: ${item.phone}`;
    document.getElementById("modalAddress").textContent = `Address: ${item.address}`;
    document.getElementById("modalEmail").textContent = `Email: ${item.email}`;
    document.getElementById("modalComment").textContent = `Comment: ${item.comment}`;
    openModal();
  });

  // trash button function:
  trashBtn.addEventListener("click", function () {
    const confirmDelete = confirm(`Are you sure you want to delete ${item.name}?`);
    if (confirmDelete) {
      li.remove();
      listArr.length--;
      if (listArr.length === 0) {
        emptyMassege.style.display = "block";
      }
      console.log(listArr);
    }
    updatePeopleCount();
  });

  // edit button function:
  editBtn.addEventListener("click", function () {
    document.getElementById("editName").value = item.name;
    document.getElementById("editPhone").value = item.phone;
    document.getElementById("editAddress").value = item.address;
    document.getElementById("editEmail").value = item.email;
    document.getElementById("editComment").value = item.comment;

    currentEditing = { item, span };
    openEditModal();
  });

  // effect when hover:
  li.addEventListener("mouseover", () => {
    li.style.boxShadow = "20px 30px 35px -45px #203333";
  });

  li.addEventListener("mouseout", () => {
    li.style.boxShadow = "none";
  });
});

// save information edit button function:
document.getElementById("saveEdit").addEventListener("click", function () {
  if (currentEditing) {
    const { item, span } = currentEditing;

    item.name = document.getElementById("editName").value;
    item.phone = document.getElementById("editPhone").value;
    item.address = document.getElementById("editAddress").value;
    item.email = document.getElementById("editEmail").value;
    item.comment = document.getElementById("editComment").value;
    const newImageUrl = document.getElementById("editNewImage").value;
    if (newImageUrl && newImageUrl.trim() !== "") {
      item.img = newImageUrl;

      // עדכון התמונה בדומ
      const li = span.closest("li");
      const imgElement = li.querySelector("img");
      if (imgElement) {
        imgElement.src = newImageUrl;
      }
      URL1.value = "";
      URL2.value = "";
    }


    span.textContent = item.name;

    console.log("Email saved:", item.email);
    console.log("Comment saved:", item.comment);

    // בדיקה אם השם כבר קיים ברשימה 
    const nameExists = listArr.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (nameExists) {
      alert(`The contact "${name}" already exist.`);
      console.warn(`Duplicate name detected: "${name}"`);
      return;
    }
    closeEditModal({ target: document.getElementById("editModal") });
    currentEditing = null;
  }
});

list.appendChild(ul);
//#endregion
// #region Buttons
let URL1 = document.getElementById("editNewImage");
let URL2 = document.getElementById("addNewImage");

const hiddenInput = document.getElementById("hiddenFileInput");
const preview = document.getElementById("previewContainer");

// Upload button triggers
document.getElementById("uploadBtn2").addEventListener("click", () => {
  hiddenInput.click();
});

document.getElementById("uploadBtn1").addEventListener("click", () => {
  hiddenInput.click();
});

// When image is selected
hiddenInput.addEventListener("change", () => {
  const file = hiddenInput.files[0];

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageData = e.target.result;

      // Clear previous preview
      preview.innerHTML = "";

      // Show image in preview
      const img = document.createElement("img");
      img.src = imageData;
      img.alt = "Uploaded picture";
      img.className = "uploaded_image";


      // Update input fields based on modal state
      const addModal = document.getElementById("addModal");
      const editModal = document.getElementById("editModal");

      if (addModal.style.display === "flex") {
        URL2.value = imageData;
      } else if (editModal.style.display === "flex") {
        URL1.value = imageData;
      }
    };

    reader.readAsDataURL(file);
  } else {
    alert("אנא בחרי קובץ תמונה תקין");
  }
});



// The delete button of the top bar function:
deleteAllContacts.addEventListener('click', () => {
  const confirmDelete = confirm("Are you sure you want to delete ALL your contacts?");
  if (confirmDelete) {
    ul.innerHTML = "";
    listArr.length = 0;
  }

  const emptyMassege = document.getElementById("emptyMessage");

  emptyMassege.style.display = "block";

  updatePeopleCount();
})

// open add contact modal:
addNewContact.addEventListener('click', () => {
  openAddModal();
})

// save new contact button function:
document.getElementById("saveNewContact").addEventListener("click", function () {
  event.preventDefault();

  const name = document.getElementById("addName").value.trim();
  const phone = document.getElementById("addPhone").value.trim();
  const address = document.getElementById("addAddress").value.trim();
  const comment = document.getElementById("addComment").value.trim();
  const email = document.getElementById("addEmail").value.trim();
  const img = document.getElementById("addNewImage").value.trim() || "./icons/user.png";
  // בדיקה אם השם כבר קיים ברשימה
  const nameExists = listArr.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  if (nameExists) {
    alert(`The contact "${name}" already exist.`);
    return;
  }

  //  שימלאו לפחות את השם והטלפון אחרת לא ישמור (הודעה קופצת)
  if (name && phone) {
    const newContact = {
      img,
      name,
      phone,
      address,
      email,
      comment,
      imgBtnInfo: "./icons/about_info_information_help_ui_icon.png",
      imgBtnEdit: "./icons/compose_document_edit_pen_pencil_icon.png",
      imgBtnTrash: "./icons/bin_delete_recycle_remove_trash_icon.png"
    };

    listArr.push(newContact);
    buildContactElement(newContact);
    // sort by name
    listArr.sort((a, b) => a.name.localeCompare(b.name));
    ul.innerHTML = ""; // נקה את הרשימה
    listArr.forEach(buildContactElement);

    closeAddModal({ target: document.getElementById("addModal") });
    clearAddFields();
  }
  // make sure to enter a name
  else if (!name) {
    alert("Please enter a name");
  }
  // make sure to enter a phone
  else if (!phone) {
    alert("Please enter a phone number");
  }

  console.log(`The contact "${name}"was successfully  saved!`);
  updatePeopleCount();
});

// Creating a method that count the current number of people:
const updatePeopleCount = () => {
  const allContacts = ul.querySelectorAll("li");
  const shownContacts = Array.from(allContacts).filter(li => li.style.display !== "none");
  peopleCount.textContent = ` ${shownContacts.length} people`;
};

// clear fields after use
function clearAddFields() {
  document.getElementById("addName").value = "";
  document.getElementById("addPhone").value = "";
  document.getElementById("addAddress").value = "";
  document.getElementById("addEmail").value = "";
  document.getElementById("addComment").value = "";
  document.getElementById("addNewImage").value = "";
}

// A method that work after typing in the search bar , The method get the term entered in the search bar and if the term is in encluded in the contacter name it display it otherwise hide it :
topBarSearch.addEventListener("input", () => {
  const searchTerm = topBarSearch.value.toLowerCase();
  const listItems = document.querySelectorAll("#ul > li");

  listItems.forEach(li => {
    const nameElement = li.querySelector(".names");
    const nameText = nameElement.textContent.toLowerCase();

    if (nameText.includes(searchTerm))
      li.style.display = "flex";
    else
      li.style.display = "none";
  });

  updatePeopleCount();
});
//#endregion
//#region new contact:
// add the new contact to list Array
function buildContactElement(item) {
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

  infoBtn.className = "info";
  editBtn.className = "edit";
  trashBtn.className = "trash_bin";

  infoBtn.appendChild(infoImg);
  editBtn.appendChild(editImg);
  trashBtn.appendChild(trashImg);

  let buttonContainer = document.createElement("div");
  buttonContainer.className = "button-row";

  buttonContainer.appendChild(infoBtn);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(trashBtn);

  li.appendChild(img);
  li.appendChild(span);
  li.appendChild(buttonContainer);

  ul.appendChild(li);

  infoBtn.addEventListener("click", function () {
    document.querySelector("#myModal h2").textContent = item.name;
    document.getElementById("modalImg").src = item.img;
    document.getElementById("modalPhone").textContent = `Phone number: ${item.phone}`;
    document.getElementById("modalAddress").textContent = `Address: ${item.address}`;
    document.getElementById("modalEmail").textContent = `Email: ${item.email}`;
    document.getElementById("modalComment").textContent = `Comment: ${item.comment}`;

    // פונקציה עזר להצגת שדה רק אם יש ערך
    function showField(id, label, value) {
      const el = document.getElementById(id);
      if (value && value.trim() !== "") {
        el.textContent = `${label}: ${value}`;
        el.style.display = "block";
      } else {
        el.textContent = "";
        el.style.display = "none";
      }
    }

    showField("modalPhone", "Phone number", item.phone);
    showField("modalAddress", "Address", item.address);
    showField("modalEmail", "Email", item.email);
    showField("modalComment", "Comment", item.comment);

    openModal();
  });

  trashBtn.addEventListener("click", function () {
    const confirmDelete = confirm(`Are you sure you want to delete ${item.name}?`);
    if (confirmDelete) {
      li.remove();
    }
    // הסרה מהמערך
    const index = listArr.indexOf(item);
    if (index !== -1) {
      listArr.splice(index, 1);
    }

    updatePeopleCount();
  });

  editBtn.addEventListener("click", function () {

    document.getElementById("editName").value = item.name;
    document.getElementById("editPhone").value = item.phone;
    document.getElementById("editAddress").value = item.address;
    document.getElementById("editEmail").value = item.email;
    document.getElementById("editComment").value = item.comment;
    document.getElementById("editNewImage").textContent = item.img;
    currentEditing = { item, span };
    openEditModal();
  });

  // effect when hover:
  li.addEventListener("mouseover", () => {
    li.style.boxShadow = "20px 30px 35px -45px #203333";
  });

  li.addEventListener("mouseout", () => {
    li.style.boxShadow = "none";
  });
  emptyMassege.style.display = "none";
  console.log(listArr);
}
//#endregion







