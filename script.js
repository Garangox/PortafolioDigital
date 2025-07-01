function toggleSeccion(id, idP) {
  const section = document.getElementById(id);

  if (section.style.display != "block" && id != "presentacion") {
    const x = document.getElementsByClassName("contenido");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
  }
  if (!section) return;

  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    section.style.maxHeight = "none";
    const parent = (idP ?  document.getElementById(idP) : '');
    const fullHeight = (section.scrollHeight + (parent ? parent.scrollHeight : '')) + "px";
    section.style.maxHeight = "0";
    section.style.overflow = "hidden";

    setTimeout(() => {
      section.style.transition = "max-height 0.5s ease-in-out";
      section.style.maxHeight = fullHeight;
      if(parent) parent.style.maxHeight = fullHeight;
    }, 10);
  } else {
    section.style.transition = "max-height 0.5s ease-in-out";
    section.style.maxHeight = "0";
    setTimeout(() => {
      section.style.display = "none";
      section.style.maxHeight = "none";
    }, 500);
  }
}


let index = 0;
const totalSlides = document.querySelectorAll('#slides img').length;

function cambiarSlide() {
  index = (index + 1) % totalSlides;
  document.getElementById("slides").style.transform = `translateX(-${index * 100}%)`;
}

function iniciarCarrusel() {
  setInterval(cambiarSlide, 3000);
}

window.onload = iniciarCarrusel;


function toggleSub(id) {
  const sub = document.getElementById(id);
  const parent = sub.closest('.contenido');

  if (sub.style.display === "block") {
    sub.style.display = "none";
  } else {
    sub.style.display = "block";

    if (parent && parent.style.maxHeight) {
      setTimeout(() => {
        parent.style.maxHeight = parent.scrollHeight + "px";
      }, 10);
    }
  }
}

