
let f = document.getElementById('1');
let s = document.getElementById('2');
let t = document.getElementById('3');
let b = document.getElementById('product__btn__black');
let w = document.getElementById('product__btn__white');
let img = document.getElementById('product__img');
let actions = document.getElementById('actions');
let p = document.getElementById('p1');
let pp = document.getElementById('p2');
b.addEventListener('click', () => changeImg('black'));
w.addEventListener('click', () => changeImg('grey'))

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function changeImg(mode) {
  if (mode === 'black') {
    console.log('b');
    f.srcset = '/src/img/dekstop/products-black-des@1x.webp 1x, /src/img/dekstop/products-black-des@2x.webp 2x ';
    s.srcset = '/src/img/tablet/products-black-tablet@1x.webp 1x, /src/img/tablet/products-black-tablet@2x.webp 2x ';
    t.srcset = '/src/img/mobile/products-black-mobile@1x.webp 1x, /src/img/mobile/products-black-mobile@2x.webp 2x ';
    img.src = '/src/img/dekstop/products-black-des@1x.webp'
    pp.style.border = 'none';
    p.style.border = '2px solid #ff0000';
  }
  if (mode === "grey") {
    console.log('g');
    f.srcset = '/img/dekstop/products-grey-des@1x.webp 1x, /img/dekstop/products-grey-des@2x.webp 2x ';
    s.srcset = '/img/tablet/products-grey-tablet@1x.webp 1x, /img/tablet/products-grey-tablet@2x.webp 2x ';
    t.srcset = '/img/mobile/products-grey-mobile@1x.webp 1x, /img/mobile/products-grey-mobile@2x.webp 2x ';
    img.src = '/img/dekstop/products-grey-des@1x.webp'
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
})();