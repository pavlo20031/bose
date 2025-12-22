
let b = document.getElementById('product__btn__black');
let w = document.getElementById('product__btn__white');
let img = document.getElementById('product__img');
let p = document.getElementById('b1');
let pp = document.getElementById('b2');
let pic = document.getElementById('p1');
let picc = document.getElementById('p2');
let moded = 'black';
picc.style.display = 'none';
b.addEventListener('click', () => changeImg('black',0));
w.addEventListener('click', () => changeImg('grey',0))
function changeImg(mode,mode2) {
  if (mode === 'black') {
    moded = 'black';
    console.log('b');
    pic.style.display = 'block';
    picc.style.display = 'none';
    pp.style.border = 'none';
    p.style.border = '2px solid #ff0000';
  }
  if (mode === "grey") {
    moded = 'grey';
    console.log('g');
    picc.style.display = 'block';
    pic.style.display = 'none';
    p.style.border = 'none';
    pp.style.border = '2px solid #ff0000';
  }
  if (mode2 === 0) {
  pic.animate(
    [
      { transform: 'translateY(20px) rotate(0deg)', opacity: 0 },
      { transform: 'translateY(0) rotate(360deg)', opacity: 1 }
    ],
    {
      duration: 600,
      easing: 'ease',
    }
  );
  picc.animate(
    [
      { transform: 'translateY(20px) scale(0.1) rotate(0deg)', opacity: 0 },
      { transform: 'translateY(20px) scale(1) rotate(360deg)', opacity: 1 }
    ],
    {
      duration: 600,
      easing: 'ease',
    }
  );
  }
}
//a
function imgg (mode){
  if (mode === 'black') {
    console.log('b');
    pic.style.display = 'block';
    picc.style.display = 'none';
    pp.style.border = 'none';
    p.style.border = '2px solid #ff0000';
    pic.style.opacity = "0.5";
  }
  if (mode === "grey") {
    console.log('g');
    picc.style.display = 'block';
    pic.style.display = 'none';
    p.style.border = 'none';
    pp.style.border = '2px solid #ff0000';
    picc.style.opacity = "0.5";
  }
  if (mode === "none") {
    picc.style.opacity = "1";
    pic.style.opacity = "1";
  }
}
b.addEventListener('mouseenter', () => {
  imgg('black');
});

b.addEventListener('mouseleave', () => {
  imgg('none');
  changeImg(moded,1)
});

w.addEventListener('mouseenter', () => {
  imgg('grey');
});

w.addEventListener('mouseleave', () => {
  imgg('none');
  changeImg(moded,1)
});

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