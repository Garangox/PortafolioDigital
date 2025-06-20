function toggleSeccion(id) {
  const section = document.getElementById(id);

  if (section.style.display != "block") {
    const x = document.getElementsByClassName("contenido");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
  }


  if (!section) return;

  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
    section.style.maxHeight = "none";
    const fullHeight = section.scrollHeight + "px";
    section.style.maxHeight = "0";
    section.style.overflow = "hidden";

    setTimeout(() => {
      section.style.transition = "max-height 0.5s ease-in-out";
      section.style.maxHeight = fullHeight;
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


let carruselInterval;
let index = 0;
const totalSlides = 3;

function cambiarSlide() {
  index = (index + 1) % totalSlides;
  document.getElementById("slides").style.transform = `translateX(-${index * 100
    }%)`;
}

function iniciarCarrusel() {
  carruselInterval = setInterval(cambiarSlide, 3000);
}

function pausarCarrusel() {
  clearInterval(carruselInterval);
}

function reanudarCarrusel() {
  iniciarCarrusel();
}

