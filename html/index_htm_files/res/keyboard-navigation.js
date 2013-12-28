/* JavaScript functions used for keyboard navigation (thanks Laza) */

function preventDefault(e) {
	if (document.addEventListener) {
		e.preventDefault();
	} else {
		e.returnValue=false;
	}
	return false;
}

function keypress(e) {
	 // Add compability with widgets that uses user input (like the Commenting widget)
	if(typeof _jaWidgetFocus != 'undefined' && _jaWidgetFocus) {
		return true;
	}
	if(!e) {
		var e = window.event;
	}
	if(e.keyCode) {
		keyCode = e.keyCode; 
	} else if(e.which) {
		keyCode = e.which;
	}
	return handleKeyCode(keyCode); // This function is defined in index-scripts.inc and slide-scripts.inc
}

function setupListeners() {
	if (document.addEventListener) {
		document.addEventListener('keypress',keypress,false);
	} else if (document.attachEvent) {
		document.attachEvent('onkeydown',keypress);
	}
}

window.onload = function() {
	setupListeners();	
};
