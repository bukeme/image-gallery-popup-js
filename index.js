const smallImg = document.querySelectorAll('.small-img')
const model = document.querySelector('.modal')
const fullImg = document.querySelector('.full-img')

smallImg.forEach(function(element) {
	element.addEventListener('click', function() {
		console.log('hello')
		model.classList.add('open')
		let imgSrc = this.src
		fullImg.src = imgSrc
		fullImg.classList.add('open')
	})
})

model.addEventListener('click', function(e) {
	if (!e.target.classList.contains('full-img')) {
		model.classList.remove('open')
		fullImg.classList.remove('open')
	}
})