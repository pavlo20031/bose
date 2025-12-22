
let b = document.getElementById('product__btn__black');
let w = document.getElementById('product__btn__white');
let img = document.getElementById('product__img');
let p = document.getElementById('b1');
let pp = document.getElementById('b2');
let pic = document.getElementById('p1');
let picc = document.getElementById('p2');
picc.style.display = 'none';
b.addEventListener('click', () => changeImg('black'));
w.addEventListener('click', () => changeImg('grey'))
function changeImg(mode) {
  if (mode === 'black') {
    console.log('b');
    pic.style.display = 'block';
    picc.style.display = 'none';
    pp.style.border = 'none';
    p.style.border = '2px solid #ff0000';
  }
  if (mode === "grey") {
    console.log('g');
    picc.style.display = 'block';
    pic.style.display = 'none';
    p.style.border = 'none';
    pp.style.border = '2px solid #ff0000';
  }}
//a




(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-mobile-open]"),
    closeModalBtn: document.querySelector("[data-mobile-close]"),
    modal: document.querySelector("[data-mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();//a