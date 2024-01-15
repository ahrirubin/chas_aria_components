const btn = document.getElementById("btn");
const dialogBtn = document.getElementById("dialogBtn");

const modal = document.getElementById("Modal");

const dialogModal = document.getElementById("Dialog");

const closeBtn = document.getElementById("closeModalBtn");
const dialogCloseBtn = document.getElementById("closeDialogBtn");

btn.onclick = () => {
  modal.style.display = "block";
  btn.style.display = "none";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  btn.style.display = "inline";
};

dialogBtn.addEventListener("click", () => {
  dialogModal.showModal();
});
dialogCloseBtn.addEventListener("click", () => {
  dialogModal.close();
});
