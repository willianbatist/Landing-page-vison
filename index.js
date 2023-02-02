const iconList = document.querySelector("#icon");
const iconListC = document.querySelector("#mobile-nav");
const links = document.getElementsByClassName("link-mobile");
const container = document.querySelector("#module");
const mover = document.querySelector("#module");


iconList.addEventListener("click", () => {
  if (iconListC.style.display === "none") {
    iconListC.style.display = "flex"
  } else {
    iconListC.style.display = "none"
  }
})


function closeMenu(links) {
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener("click", () => {
      iconListC.style.display = "none"
    })
  }
}
closeMenu(links);


container.addEventListener("mousemove", function(e) {
  mover.style.backgroundPositionX = -e.offsetX * 1.8 + "px";
  mover.style.backgroundPositionY = -e.offsetY + 80 + "px";
});

container.addEventListener("mouseenter", function() {
  
  setTimeout(function() {
    mover.classList.add("no-more-slidey");
    container.removeEventListener("mouseenter");
  }, 250);
  
});