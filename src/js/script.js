document.querySelector('.arow-left').addEventListener('click', returnsSlide);
document.querySelector('.arow-right').addEventListener('click', forwardSlide);
const allSlide = document.querySelectorAll('.item')

function returnsSlide() {
	const one = document.getElementById('item__one');
	const two = document.getElementById('item__two');
	const three = document.getElementById('item__three');
	if(one.getAttribute('open') === 'true'){
		one.style.display = 'none';
		one.setAttribute('open', 'false')

		three.style.display = 'block';
		three.setAttribute('open', 'true')
		
	}else if(three.getAttribute('open') === 'true'){
		three.style.display = 'none';
		three.setAttribute('open', 'false')

		two.style.display = 'block';
		two.setAttribute('open', 'true')

	}else if(two.getAttribute('open') === 'true'){
		two.style.display = 'none';
		two.setAttribute('open', 'false')

		one.style.display = 'block';
		one.setAttribute('open', 'true')

	}
}

function forwardSlide() {
	const one = document.getElementById('item__one');
	const two = document.getElementById('item__two');
	const three = document.getElementById('item__three');
	if(one.getAttribute('open') === 'true'){
		one.style.display = 'none';
		one.setAttribute('open', 'false')

		two.style.display = 'block';
		two.setAttribute('open', 'true')
		
	}else if(two.getAttribute('open') === 'true'){
		two.style.display = 'none';
		two.setAttribute('open', 'false')

		three.style.display = 'block';
		three.setAttribute('open', 'true')

	}else if(three.getAttribute('open') === 'true'){
		three.style.display = 'none';
		three.setAttribute('open', 'false')

		one.style.display = 'block';
		one.setAttribute('open', 'true')
	}

}