const fuzbal = document.getElementById('fuzbal')
document.addEventListener(
	'click',
	(e) => {
		fuzbal.style.transform = `translateY(${e.clientY - 25}px)`
		fuzbal.style.transform += `translateX(${e.clientX - 25}px)`
		fuzbal.style.transform += `scale(210%)`
	},
	false
)
