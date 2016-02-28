function setTitle(title) {
    top.document.title = title;
}

var angle = 0;
function gallerySpin(sign) {
    spinner = document.querySelector("#container");
	if (sign) {
		angle -= 60;
	} else {
		angle += 60;
	}
	spinner.setAttribute("style", "transform: rotateY("+ angle +"deg);");
}

function setStyle(){
    if (top.document.comand == 1) {
        $$('stage').attr('class', 'stage1');
    }
    else if (top.document.comand == 2) {
        $$('stage').attr('class', 'stage2');
    }
    else {
        $$('stage').attr('class', 'stage3');
    }
}