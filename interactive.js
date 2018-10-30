var radius=40;
function drawCircle() {
     var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      context.fillStyle = 'green';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = '#003300';
      context.stroke();
}
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            radius += 20;
            break;
        case 38:
            radius += 20;
            break;
        case 39:
            radius -= 20;
            break;
        case 40:
            radius -= 20;
            break;
    }
 
    drawCircle();
}  