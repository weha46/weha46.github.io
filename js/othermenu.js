const otherMenu = document.getElementById("otherMenu");
const navList = document.getElementById("navList");

let menuShown = false;

otherMenu.addEventListener("click", () => {
  if (!menuShown) {
    navList.classList.remove(
      "[&>*:nth-child(5)]:hidden",
      "[&>*:nth-child(6)]:hidden",
      "[&>*:nth-child(7)]:hidden",
      "[&>*:nth-child(8)]:flex",
      "justify-center"
    );
    navList.classList.add(
      "[&>*:nth-child(5)]:flex",
      "[&>*:nth-child(6)]:flex",
      "[&>*:nth-child(7)]:flex",
      "[&>*:nth-child(8)]:hidden",
      "justify-start"
    );
  } else {
    navList.classList.remove(
      "[&>*:nth-child(5)]:flex",
      "[&>*:nth-child(6)]:flex",
      "[&>*:nth-child(7)]:flex",
      "[&>*:nth-child(8)]:hidden",
      "justify-start"
      
    );
    navList.classList.add(
      "[&>*:nth-child(5)]:hidden",
      "[&>*:nth-child(6)]:hidden",
      "[&>*:nth-child(7)]:hidden",
      "[&>*:nth-child(8)]:flex",
      "justify-center"
    );
  }

  menuShown = !menuShown;
});
