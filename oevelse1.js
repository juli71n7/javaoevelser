const alkoKnap1 = document.querySelector(".alkoknap1");
const alkoKnap2 = document.querySelector(".alkoknap2");
const sodaKnap1 = document.querySelector(".sodaknap1");
const sodaKnap2 = document.querySelector(".sodaknap2");

window.addEventListener("load", sidenVises);
function sidenVises() {
  console.log("sidenvises");
}

alkoKnap1.addEventListener("click", funktionClick1);
function funktionClick1() {
  console.log("du har klikket på snaps");
  if (funktionClick1) {
    console.log("indeholder alkohol");
  }
}

alkoKnap2.addEventListener("click", funktionClick2);
function funktionClick2() {
  console.log("du har klikket på ol");
  if (funktionClick2) {
    console.log("indeholder alkohol");
  }
}

sodaKnap1.addEventListener("click", funktionClick3);
function funktionClick3() {
  console.log("du har klikket på fanta");
  if (funktionClick3) {
    console.log("alkoholfri");
  }
}

sodaKnap2.addEventListener("click", funktionClick4);
function funktionClick4() {
  console.log("du har klikket på cola");
  if (funktionClick4) {
    console.log("alkoholfri");
  }
}
