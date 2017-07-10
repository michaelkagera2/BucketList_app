// Create close button and add to each list item
var MyBucketlist = document.getElementsByTagName("li");
var i;
for (i = 0; i < MyBucketlist.length; i++) {
	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7")
	span.className = "close";
	span.appendChild(txt);

MyBucketlist[i].appendChild(span)
}

//click close button to hide item
var close = document.getElementsByClassName("close");
var i ;
for(i = 0; i < close.length; i ++) {
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = "none";
	}
}

//check list item on click
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'li') {
		ev.target.classList.toggle('checked');
	}
}, false);

//create new task
function newTask() {
	var li = document.createElement('li');
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("Please type in your task, then click add. Thank You.");
	}
	else{
		document.getElementById("myBL").appendChild(li);
	}

	document.getElementById("myInput").value = "";

	var span = document.createElement("span");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span)

	for (i = 0; i < close.length; i ++){
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}