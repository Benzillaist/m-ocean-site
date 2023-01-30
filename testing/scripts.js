// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};
window.onresize = function() {resizeFunction()};
window.onload = function() {onloadFunction()}
//window.onkeyup = function() {resizeFunction()};
//window.onmousemove = function() {resizeFunction()};
//window.onunload = function() {resizeFunction()};
//window.onchange = function() {resizeFunction()};
//window.onpopstate = function() {resizeFunction()};

//document.getElementById("header-container").addEventListener("load", updateHeaderText);

function scrollFunction() {
	updateHeaderText();
	
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("hcenter").style.fontSize = "1em";
		document.getElementById("hcenter").style.height = "45px";
		document.getElementById("hleft").style.height = "45px";
		document.getElementById("hright").style.height = "45px";
		document.getElementById("header-container").style.height = "45px";
		document.getElementById("header-dropdowns").style["line-height"] = "45px";
  } else {
    document.getElementById("hcenter").style.fontSize = "1em";
		document.getElementById("hcenter").style.height = "70px";
		document.getElementById("hleft").style.height = "100px";
		document.getElementById("hright").style.height = "100px";
		document.getElementById("header-container").style.height = "70px";
		document.getElementById("header-dropdowns").style["line-height"] = "70px";
  }
}

//function sleep(ms) {
//    return new Promise(function(resolve) {
//			return setTimeout(resolve, ms) });
//}

//function getWidth() {
//  return Math.max(
//    document.body.scrollWidth,
//    document.documentElement.scrollWidth,
//    document.body.offsetWidth,
//    document.documentElement.offsetWidth,
//    document.documentElement.clientWidth
//  );
//}


//parseInt(document.getElementById("body").style.width.replace(/^\D+/g, ''))

function resizeFunction() {
	updateHeaderText();
}

function onloadFunction() {
	updateHeaderText();
}

function updateHeaderText() {
	
	if(window.innerWidth < 920) {
		
		// enlarges the "Contact Us" element
		document.getElementById("header-text-right").style.width = "auto";
		document.getElementById("header-text-right").style.height = "auto";
		document.getElementById("header-text-right").style.visibility = "visible";
		document.getElementById("header-text-right").style["padding-right"] = "2%";
		document.getElementById("header-text-right").style["font-size"] = "24px";
		
		// shrinks all of the dropdown elements
		document.getElementById("header-dropdowns").style["font-size"] = "0px";
		document.getElementById("header-dropdowns").style.width = "0px";
		document.getElementById("header-dropdowns").style.height = "0px";
		document.getElementById("header-dropdowns").style.visibility = "hidden";
		
	} else {
		
		// shrinks the "Contact Us" element
		document.getElementById("header-text-right").style.width = "0px";
		document.getElementById("header-text-right").style.height = "0px";
		document.getElementById("header-text-right").style.visibility = "hidden";
		document.getElementById("header-text-right").style["padding-right"] = "0%";
		document.getElementById("header-text-right").style["font-size"] = "0px";
		
		// enlarges all of the dropdown elements
		document.getElementById("header-dropdowns").style["font-size"] = "24px";
		document.getElementById("header-dropdowns").style.width = "auto";
		document.getElementById("header-dropdowns").style.height = "auto";
		document.getElementById("header-dropdowns").style.visibility = "visible";
		
	}
}

var activePersonID = -1;

function handlePersonRequest(ele) {
	
//	alert("test");
	var requestAnswerID = "a" + ele.id;
	var activeAnswerID = "a" + activePersonID;
	
	if(ele.id == activePersonID) {
		// shrink active info panel
		document.getElementById(activeAnswerID).style["min-width"] = "0px";
		document.getElementById(activeAnswerID).style["font-size"] = "0px";
		document.getElementById(activeAnswerID).style["visibility"] = "hidden";
		document.getElementById(activeAnswerID).style["border"] = "none";
		
		// resets the active person as no info panels will be open
		activePersonID = -1;
	} else if(activePersonID >= 0) {
		// shrink active info panel
		document.getElementById(activeAnswerID).style["min-width"] = "0px";
		document.getElementById(activeAnswerID).style["font-size"] = "0px";
		document.getElementById(activeAnswerID).style["visibility"] = "hidden";
		document.getElementById(activeAnswerID).style["border"] = "none";
		
		// expand new info panel
		document.getElementById(requestAnswerID).style["min-width"] = Math.max(Math.min(window.innerWidth, 1000)-301, 295) + "px";
		document.getElementById(requestAnswerID).style["font-size"] = "16px";
		document.getElementById(requestAnswerID).style["visibility"] = "visible";
		document.getElementById(requestAnswerID).style["border"] = "1px blue solid";
		
		// sets the active person to the element that requested the info
		activePersonID = ele.id;
	} else {
		// expand new info panel
		document.getElementById(requestAnswerID).style["min-width"] = Math.max(Math.min(window.innerWidth, 1000)-306, 295) + "px";
		document.getElementById(requestAnswerID).style["font-size"] = "16px";
		document.getElementById(requestAnswerID).style["visibility"] = "visible";
		document.getElementById(requestAnswerID).style["border"] = "1px blue solid";
		
		// sets the active person to the element that requested the info
		activePersonID = ele.id;
	}
}