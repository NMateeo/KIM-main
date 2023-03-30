const nav = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".navbar-mobile__link")

const navAnim = () => {
	nav.classList.toggle("navbar-mobile--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			navBtn.classList.remove("navbar-mobile--active")
		})
	})
}

navBtn.addEventListener("click", navAnim)
