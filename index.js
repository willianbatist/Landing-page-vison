const iconList = document.querySelector("#icon");
const iconListC = document.querySelector("#mobile-nav");
const links = document.getElementsByClassName("link-mobile");


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