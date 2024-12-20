document.addEventListener("DOMContentLoaded", () => {
  const slides = [
    document.getElementById("slide-1"),
    document.getElementById("slide-2"),
    document.getElementById("slide-3"),
    document.getElementById("slide-4"),
    document.getElementById("slide-5"),
    document.getElementById("slide-6"),
  ];

  let currentIndex = 0;

  function showSlide(index) {
    // Slide yang akan muncul di posisi 0
    slides[index].classList.remove("translate-x-full", "-translate-x-full");
    slides[index].classList.add("z-10", "translate-x-0");

    // Slide sebelumnya bergerak ke kiri (-translate-x-full)
    const previousIndex = (index - 1 + slides.length) % slides.length;
    slides[previousIndex].classList.remove("z-10", "translate-x-0");
    slides[previousIndex].classList.add("-translate-x-full");

    // Slide berikutnya bergerak masuk dari kanan (translate-x-full)
    const nextIndex = (index + 1) % slides.length;
    setTimeout(() => {
      slides[nextIndex].classList.remove("-translate-x-full");

      slides[nextIndex].classList.add("translate-x-full");
    }, 1000);

    // Jadwalkan transisi ke slide berikutnya
    setTimeout(() => {
      currentIndex = nextIndex;
      showSlide(currentIndex);
    }, 6000); // Durasi setiap slide
  }

  // Memulai slider
  showSlide(currentIndex);
});

document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        // Tutup semua elemen <details> lainnya
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details) {
            otherDetails.open = false;
          }
        });
      }
    });
  });
});
