const intersectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
  })
})

const elements = document.querySelectorAll(".animate")

elements.forEach(el => intersectObserver.observe(el))