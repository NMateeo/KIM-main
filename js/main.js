const nav = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".navbar-mobile__link")
const footerYear = document.querySelector('.footeryear')

const navAnim = () => {
	nav.classList.toggle("navbar-mobile--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("navbar-mobile--active")
		})
	})
}


const handleCurrentYear = () => {
    const year = new Date().getFullYear()
    footerYear.innerText = year
}

handleCurrentYear()

navBtn.addEventListener("click", navAnim)
