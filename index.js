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

/* 
Event listeners can be 
set up to listen for  animation events 
*/

const element = document.getElementById('watchMe')
/* syntax:
element.addEventListener('animation name', function, bool)
*/
element.addEventListener('animationstart', listener, false)
element.addEventListener('animationend', listener, false)
element.addEventListener('animationiteration', listener, false)

element.classList.add('slidein')

/* 
Now when the event is triggered, it is delivered to the listener function

*/

function listener(event) {
	const list = document.createElement('li')
	switch (event.type) {
		case 'animationstart':
			list.textContent = `Started: elapsed time is ${event.elapsedTime}s`
			break
		case 'animationend':
			list.textContent = `Ended: Elapsed time is ${event.elapsedTime}s`
			break
		case 'animationiteration':
			list.textContent = `New loop started at time ${event.elapsedTime}s`
			break
	}
	document.getElementById('output').appendChild(list)
}
