// Where el is the DOM element you'd like to test for visibility
function isHidden(el: Element) {
	const style = window.getComputedStyle(el)
	return style.display === 'none'
}


export default isHidden