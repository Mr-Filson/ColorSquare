const square = document.getElementById('square');
const colors = ['red', 'yellow', 'green']
	
let colorX = 0;
square.addEventListener('click', () => {                      
	square.style.backgroundColor = colors[colorX];
	colorX++;
	
	if (colorX >= colors.length) {
		colorX = colors.length - 2;
		colors.reverse();
	}

	
	if (colorX <= 0) {
		colors.reverse();
		colorX = 1;
	}	


});



/*
function() {
	colors = 0;
	
	if(square.style.backgroundColor == 'yellow') {
		square.style.backgroundColor = 'green';
		colors += 1;
*/
