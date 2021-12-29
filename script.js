"strict"

const panels = document.querySelectorAll(".panel")

// this will remove active classes from all panels and then add the active class when clicked, which will then add the flex 5 from CSS to make it larger
panels.forEach((panel) => {
  panel.addEventListener(`click`, () => {
    removeActiveClasses()
    panel.classList.add("active")
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active")
  })
}
