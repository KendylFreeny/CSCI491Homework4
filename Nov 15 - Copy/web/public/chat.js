window.onload = function() {

    var messages = [];
    var socket = io.connect('http://localhost:3700');
    var field = document.getElementById("field");
	var name = document.getElementById("name");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");


    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
			newTitle();
        } else {
            console.log("There is a problem:", data);
        }
    });

    sendButton.onclick = function() {
        if(name.value == "") {
            alert("Please type your name!");
        } else {
            var text = field.value;
            socket.emit('send', { message: text, username: name.value });
			document.getElementById("field").value=null;
			
        }
    };

	
 var timeoutId = false;
 var msg = "Nothing happened yet";
 var oldTitle;
function newTitle() {
    oldTitle = document.title;
    msg = "New Message!";
	doSomething();
}
function blink () {
 document.title = document.title == msg ? ' ' : msg; 
 }

function clear() {
        clearInterval(timeoutId);
        document.title = oldTitle;
        window.onmousemove = null;
        timeoutId = null;
    }
	
function doSomething () {
        if (!timeoutId) {
			timeoutId = setInterval(blink, 1000);
            
        }
	}
    



	
}