
// some global variables
let pageHeight, ticking, screenHeight, currentEl, pageSectionArr

// When the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {

  // Get height of screen
  screenHeight = screen.height

  // Get all page-sections on page and populate arrays
  pageSectionArr = document.getElementsByClassName('page-section');

  // set total page height depending on number of projects
  pageHeight = screenHeight * pageSectionArr.length;

  document.getElementById('body').style.height = pageHeight+"px";

  // Check the scroll position, show appropriate project
  checkScroll();

});

function checkScroll(){

	last_known_scroll_position = window.scrollY;

	if (!ticking) {

	  window.requestAnimationFrame(function() {
	    checkElement(last_known_scroll_position);
	    ticking = false;
	  });
	   
	  ticking = true;

	}
}

function checkElement(scroll_pos) {

  // how many times does pageHeight go into scrollPos
  let x = Math.floor(scroll_pos / screenHeight);

  // set appropriate element if not already
  if(currentEl !== x){
  	applyElement(x);
  }
}

function applyElement(x){

	// Set currentEl
	currentEl = x;

	// for each project and project-img
	// hide all
	for (var i = pageSectionArr.length - 1; i >= 0; i--) {
		// projectImgArr[i].style.display = "none"
		pageSectionArr[i].classList.add("hidden");
	}

	// Set background color on body
	// get data-bgcolor attribute from .project-text element, white as fallback
	document.getElementById('body').style.background = pageSectionArr[x].dataset.bgcolor || "white";

	// Set text color on body, get it from data attribute, black as fallback
	document.getElementById('body').style.color = pageSectionArr[x].dataset.textcolor || "black";

	// Show appropriate project
	pageSectionArr[x].classList.remove('hidden');
	pageSectionArr[x].classList.add("shown");


}